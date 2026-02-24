# Commands Reference

## Development

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server (localhost:3000) |
| `pnpm build` | Build Next.js for production |
| `pnpm test` | Run vitest |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm format` | Format with Prettier |
| `pnpm format:check` | Check formatting |

## Infrastructure

| Command | Description |
|---------|-------------|
| `pnpm deploy:dev` | Deploy to dev stage |
| `pnpm deploy:prod` | Deploy to prod stage |
| `pnpm destroy:dev` | Remove dev stage |
| `sst dev` | Live dev mode (SSR + Lambda against real AWS) |
