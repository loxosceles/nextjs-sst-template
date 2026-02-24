# Architecture Overview

## Stack

- **Next.js** (App Router, TypeScript, Tailwind CSS) — SSR via OpenNext
- **SST v3** — infrastructure as code (Pulumi under the hood)
- **AWS** — CloudFront + Lambda (SSR) + S3 (assets) + DynamoDB (ISR revalidation)

## How It Deploys

```
sst deploy --stage dev
    │
    ├── Builds Next.js via OpenNext
    ├── Uploads static assets → S3
    ├── Deploys SSR handler → Lambda
    ├── Creates CloudFront distribution
    └── Outputs site URL
```

SST's `Nextjs` component handles the full deployment — no manual CloudFront/S3/Lambda wiring.

## Request Flow

```
Browser → CloudFront → Lambda (SSR) → Response
                     → S3 (static assets)
```

ISR revalidation uses DynamoDB + SQS (managed by SST automatically).

## Project Structure

```
├── sst.config.ts          # Infrastructure definition (~30 lines)
├── frontend/              # Next.js app (pnpm workspace)
│   ├── app/               # App Router pages
│   ├── components/        # React components
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities
│   └── shared/            # Shared types/constants
├── .github/workflows/     # CI/CD (deploy, lint, test, versioning)
├── .devcontainer/         # Dev container config
├── .env.dev / .env.prod   # Stage env vars (gitignored)
└── docs/                  # Documentation
```

No `infrastructure/` directory — SST keeps everything in `sst.config.ts` at the project root.

## Key Differences from CDK Template

| Concern | CDK template | This template |
|---------|-------------|---------------|
| Rendering | Static export (`output: 'export'`) | SSR via Lambda |
| Infra code | `infrastructure/` workspace | `sst.config.ts` at root |
| Deploy | CodePipeline + CodeBuild | GitHub Actions → `sst deploy` |
| Env vars | `EnvironmentManager` class | SST loads `.env.{stage}` natively |
| Domain | Manual CloudFront + ACM + OAC | `domain` prop on `Nextjs` component |
