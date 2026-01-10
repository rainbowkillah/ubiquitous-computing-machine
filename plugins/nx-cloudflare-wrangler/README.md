# @acme/nx-cloudflare-wrangler

Nx plugin providing executors and generators for Cloudflare Wrangler CLI integration.

## Features

### Executors

- **dev**: Run `wrangler dev` with full Nx integration
- **deploy**: Deploy Workers with `wrangler deploy`
- **tail**: Stream logs in real-time with `wrangler tail`
- **delete**: Remove Worker deployments
- **types**: Generate TypeScript types from Wrangler config
- **secret**: Manage Worker secrets

### Generators

- **init**: Initialize workspace-wide Cloudflare tooling
- **config**: Generate and validate `wrangler.jsonc` configuration
- **binding**: Add/update bindings (KV, R2, D1, Queues, Vars)
- **env**: Generate environment-specific configurations

## Installation

```bash
npm install --save-dev @acme/nx-cloudflare-wrangler
```

## Usage

### Running Dev Server

```bash
# Basic dev server
nx run myapp:dev

# With options
nx run myapp:dev --port=8080 --local=true

# With environment
nx run myapp:dev --env=staging
```

### Deploying

```bash
# Deploy to production
nx run myapp:deploy

# Dry run
nx run myapp:deploy --dryRun=true

# Deploy to specific environment
nx run myapp:deploy --env=staging
```

### Managing Secrets

```bash
# Put a secret
nx run myapp:secret --action=put --name=API_KEY --value=secret123

# List secrets
nx run myapp:secret --action=list

# Delete a secret
nx run myapp:secret --action=delete --name=API_KEY
```

## Building

Run `nx build nx-cloudflare-wrangler` to build the library.

## Running unit tests

Run `nx test nx-cloudflare-wrangler` to execute the unit tests via [Jest](https://jestjs.io).

## License

MIT

