# Environment Variables

SST loads `.env.{stage}` automatically based on the `--stage` flag. No custom loader needed.

## Infrastructure Variables (`.env.dev` / `.env.prod`)

| Variable | Required | Description |
|----------|----------|-------------|
| `AWS_ACCOUNT_ID` | All stages | AWS account ID |
| `AWS_REGION` | All stages | AWS region for deployment |
| `PROD_DOMAIN_NAME` | Prod only | Custom domain (e.g. `example.com`) |
| `CERTIFICATE_ARN` | Prod only | ACM certificate ARN (must be `us-east-1`) |

## Setup

```sh
cp .env_TEMPLATE .env.dev
cp .env_TEMPLATE .env.prod
```

These files are gitignored. In CI, the OIDC role provides AWS credentials and the stage is determined by the branch name.

## Precedence

SST loads in this order (first wins):
1. Shell environment
2. `.env.{stage}` (e.g. `.env.dev`)
3. `.env`

Avoid creating a root `.env` file — use stage-specific files only.
