# Local Development

## Bootstrap a New Project

```sh
mkdir my-project && cd my-project
curl -fsSL https://raw.githubusercontent.com/loxosceles/nextjs-sst-template/main/setup.sh | bash
```

The directory name becomes the project name. `setup.sh` prompts for GitHub username, git
identity, SSH mode, and optional mounts.

## Host Config (Optional)

Pre-fill prompts on future projects:

```sh
cp devcontainer-defaults.env.template ~/.config/devcontainer-defaults.env
```

## After Bootstrap

```sh
git remote add origin git@github.com:<username>/<project>.git
pnpm install
pnpm dev        # http://localhost:3000
```

## Environment Setup

Create `.env.dev` (gitignored) before deploying:

```sh
cp .env_TEMPLATE .env.dev
# fill in AWS_ACCOUNT_ID and AWS_REGION
```

## Devcontainer

Open in VS Code → **Reopen in Container**. Mounts are configured during `setup.sh`.

To change mounts after bootstrap, edit `.devcontainer/devcontainer.json` directly.

## SST Dev Mode

`sst dev` runs Next.js with live Lambda — useful when testing SSR/API routes against real AWS resources. For frontend-only work, `pnpm dev` is faster.
