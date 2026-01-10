# @acme/nx-cloudflare-c3

Nx plugin providing C3 (create-cloudflare) equivalent scaffolding and project generation for Cloudflare apps.

## Features

- **App Generator**: Scaffold complete Cloudflare applications (equivalent to `create-cloudflare`)
- **Add Generator**: Add Cloudflare features to existing apps
- **Interactive Mode**: Guided project setup with prompts
- **CI Mode**: Non-interactive generation for automation
- **Multi-Framework Support**: React, Vue, Next.js, SvelteKit, and more

## Installation

```bash
npm install --save-dev @acme/nx-cloudflare-c3
```

## Usage

### Generate a New Cloudflare App

```bash
# Interactive mode (similar to create-cloudflare)
nx g @acme/nx-cloudflare-c3:app

# With options
nx g @acme/nx-cloudflare-c3:app my-worker --directory=apps/my-account --framework=none --typescript=true

# Framework-specific apps
nx g @acme/nx-cloudflare-c3:app my-react-app --framework=react
nx g @acme/nx-cloudflare-c3:app my-next-app --framework=next
```

### Add Features to Existing App

```bash
# Add KV storage
nx g @acme/nx-cloudflare-c3:add --project=my-worker --feature=kv

# Add D1 database
nx g @acme/nx-cloudflare-c3:add --project=my-worker --feature=d1

# Add R2 storage
nx g @acme/nx-cloudflare-c3:add --project=my-worker --feature=r2
```

## App Generator Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | string | (required) | Name of the app |
| `directory` | string | `apps` | Directory to create the app in |
| `framework` | string | `none` | Framework (none, react, vue, next, svelte) |
| `typescript` | boolean | `true` | Use TypeScript |
| `account` | string | - | Cloudflare account name/ID |
| `wranglerConfig` | string | `wrangler.jsonc` | Wrangler config filename |
| `tags` | string[] | - | Tags for the project |

## Supported Frameworks

- **none**: Plain Worker (JavaScript/TypeScript)
- **react**: React application
- **vue**: Vue application
- **next**: Next.js application
- **svelte**: SvelteKit application
- **remix**: Remix application
- **solid**: SolidJS application
- **qwik**: Qwik application

## Generated Project Structure

```
apps/
  my-worker/
    src/
      index.ts          # Worker entry point
      index.test.ts     # Unit tests
    wrangler.jsonc      # Wrangler configuration
    tsconfig.json       # TypeScript configuration
    project.json        # Nx project configuration
    README.md           # Project documentation
```

## Integration with Wrangler Plugin

The generated projects automatically integrate with `@rainbowkillah/cf-wrangler`:

```json
{
  "targets": {
    "dev": {
      "executor": "@rainbowkillah/cf-wrangler:dev"
    },
    "deploy": {
      "executor": "@rainbowkillah/cf-wrangler:deploy"
    },
    "tail": {
      "executor": "@rainbowkillah/cf-wrangler:tail"
    },
    "types": {
      "executor": "@rainbowkillah/cf-wrangler:types"
    }
  }
}
```

## Example: Create a Worker with KV

```bash
# Generate the app
nx g @acme/nx-cloudflare-c3:app my-kv-worker

# Add KV binding
nx g @acme/nx-cloudflare-c3:add --project=my-kv-worker --feature=kv

# Develop locally
nx run my-kv-worker:dev

# Deploy
nx run my-kv-worker:deploy
```

## Building

Run `nx build nx-cloudflare-c3` to build the library.

## Running unit tests

Run `nx test nx-cloudflare-c3` to execute the unit tests via [Jest](https://jestjs.io).

## License

MIT

