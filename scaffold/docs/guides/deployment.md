# Deployment Guide

## Prerequisites

- AWS account with credentials configured
- OIDC identity provider set up in AWS for GitHub Actions (see [github-actions-oidc-aws pattern](https://github.com/loxosceles/ai-coding-standards))
- GitHub repo variables: `PROJECT_NAME`, `AWS_ACCOUNT_ID`, `AWS_REGION_DEFAULT`

## Environment Files

Copy the template and fill in values per stage:

```sh
cp .env_TEMPLATE .env.dev
cp .env_TEMPLATE .env.prod
```

SST loads `.env.{stage}` automatically when you run `sst deploy --stage {stage}`.

## Manual Deploy

```sh
# Dev
pnpm deploy:dev

# Prod
pnpm deploy:prod
```

## CI/CD

Merges to `dev` → deploys to dev stage. Merges to `main` → deploys to prod stage.

The `deploy.yml` workflow:
1. Checks out code
2. Installs dependencies (`pnpm install --frozen-lockfile`)
3. Assumes OIDC role (`{project}-github-actions-{stage}`)
4. Runs `pnpm sst deploy --stage {stage}`

### OIDC Role Permissions

SST needs broad permissions (CloudFormation, Lambda, S3, CloudFront, IAM, SSM, DynamoDB, SQS, etc.). Start with `AdministratorAccess` on the OIDC role, tighten later.

## Teardown

```sh
pnpm destroy:dev    # sst remove --stage dev
```

Prod has `protect: true` in `sst.config.ts` — you must explicitly disable protection before removing.

## Custom Domain (Prod)

Set `PROD_DOMAIN_NAME` and `CERTIFICATE_ARN` in `.env.prod`. The ACM certificate must be in `us-east-1` (CloudFront requirement).

If using Route 53, you can omit `cert` in `sst.config.ts` and let SST auto-create the certificate.
