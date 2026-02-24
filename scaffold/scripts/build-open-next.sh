#!/usr/bin/env bash
# Workaround for OpenNext creating open-next.config.mjs with 0200 permissions.
# See: https://github.com/opennextjs/opennextjs-aws/pull/1104
set -euo pipefail

OPEN_NEXT_VERSION=$(node -e "const v = require('../package.json').devDependencies['@opennextjs/aws']; console.log(v.replace(/^\^/, ''))")

rm -rf .open-next

npx --yes "@opennextjs/aws@${OPEN_NEXT_VERSION}" build

# Fix the source copy (owned by current user, chmod works)
chmod 644 .open-next/.build/open-next.config.mjs 2>/dev/null || true

# Replace all other copies (rm works because parent dirs are writable)
SRC=.open-next/.build/open-next.config.mjs
for f in $(find .open-next -name 'open-next.config.mjs' -not -path '*/.build/*'); do
  rm -f "$f"
  cp "$SRC" "$f"
done
