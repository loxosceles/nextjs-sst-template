# Coding Agent Instructions

Instructions for AI coding assistants working on this project.

---

## EXTREMELY IMPORTANT RULES!!!

- CONFIRM THAT YOU UNDERSTAND THE RULES ABOVE AND THAT YOU WILL FOLLOW THEM AFTER EVERY NEW INPUT AND BEFORE YOU DO ANYTHING ELSE. YOU MUST confirm that you understand the rules in the following way (verbatim):
  - I will NEVER change files without presenting my solution first: I must analyze the problem and present my solution before making any code changes.
  - I will wait for approval: After presenting my solution, I must wait for explicit approval before implementing it.
  - I will follow the APRAW process: Analyze, Present, Review, Approval, Write - this is the planning cycle for any changes.

  AFTER YOU CONFIRMED LIKE THIS, YOU THINK ABOUT IT INTERNALLY AND WHAT IT MEANS. I don't want you to just repeat it mindlessly. You must understand it.
  DO NOT BREAK THIS RULE UNDER ANY CIRCUMSTANCES!!!!!!

## Required Reading

**Before any work, read these documents:**

1. **`docs/ai-dev-rules/CORE_PRINCIPLES.md`** - Essential guidelines for all code
2. **`docs/ai-dev-rules/INDEX.md`** - Catalog of patterns

**When working on a task:**

- Scan INDEX.md for relevant patterns
- Read any pattern that applies to your current work
- Follow the pattern's guidance
- Reference the pattern when explaining your approach

---

## Workflow: APRAW (Analyze - Present - Review - Approval - Write)

**NEVER write code without presenting your solution first.**

1. **Analyze** - Understand the problem, check relevant patterns
2. **Present** - Show code snippets you plan to change, cite patterns you're following
3. **Review** - Developer reviews your proposed solution
4. **Approval** - Wait for explicit approval
5. **Write** - Only then implement the changes

### After Every Message

Confirm you understand by stating:

- "I will NEVER change files without presenting my solution first"
- "I will wait for approval before implementing"
- "I will follow the APRAW process"

If you forget, developer will say `ryr` (read your rules) and you must confirm again.

---

## Shortcuts

- `ryr` - Read your rules (reminder to confirm understanding)
- `apraw` - Analyze, Present, Review, Approval, Write (the workflow)

---

## Technology Stack

- **Frontend**: Next.js (App Router, SSR via OpenNext)
- **Infrastructure**: SST v4 (Pulumi under the hood) — CloudFront + Lambda + S3 + DynamoDB
- **Package Manager**: pnpm (workspaces)
- **Testing**: Vitest
- **CI/CD**: GitHub Actions + OIDC → `sst deploy`

## Key Patterns

- Bootstrap config: `.env.{stage}` at project root (SST loads automatically)
- Infrastructure: `sst.config.ts` at project root (no separate infra directory)
- Domain config: `PROD_DOMAIN_NAME` + `CERTIFICATE_ARN` env vars for prod
- OpenNext version: `@opennextjs/aws` in root `package.json` (single source of truth)

## Common Commands

```bash
pnpm dev              # Start Next.js dev server
pnpm build            # Build Next.js (Turbopack)
pnpm lint             # ESLint
pnpm test             # All tests
pnpm deploy:dev       # sst deploy --stage dev
pnpm deploy:prod      # sst deploy --stage prod
pnpm destroy:dev      # sst remove --stage dev
sst dev               # Live dev mode (SSR + Lambda against real AWS)
```

## When in Doubt

1. Check `docs/ai-dev-rules/CORE_PRINCIPLES.md`
2. Check relevant pattern in `docs/ai-dev-rules/INDEX.md`
3. Ask for clarification
4. Follow APRAW process
