# nextjs-sst-template

Project template for Next.js + SST v4 (SSR via OpenNext on AWS).

## Bootstrap

From an empty directory:

```sh
curl -fsSL https://raw.githubusercontent.com/loxosceles/nextjs-sst-template/main/setup.sh | bash
```

The directory name becomes the project name. No cloning required.

## Repository Structure

```
├── setup.sh                         # Bootstrap script (entry point)
├── devcontainer-defaults.env.template  # Host config template
└── scaffold/                        # Project files (copied into new projects)
    ├── sst.config.ts
    ├── package.json
    ├── frontend/
    ├── .github/workflows/
    ├── docs/
    └── ...
```

`scaffold/` contains everything that becomes part of the instantiated project. Template-level files (this README, setup.sh, LICENSE) stay at the root and are not copied.

## Project Documentation

After bootstrapping, see the project's docs:

- [Architecture Overview](scaffold/docs/architecture/overview.md)
- [Local Development](scaffold/docs/guides/local-development.md)
- [Deployment](scaffold/docs/guides/deployment.md)
- [Commands Reference](scaffold/docs/reference/commands.md)
- [Environment Variables](scaffold/docs/reference/environment-variables.md)
