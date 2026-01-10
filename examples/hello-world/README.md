# Hello World Worker Example

A simple "Hello World" Cloudflare Worker demonstrating the Nx Cloudflare toolchain.

## Prerequisites

- Node.js 18+ installed
- Cloudflare account (for deployment)
- Wrangler installed (automatically handled by Nx)

## Development

Start the development server:

```bash
nx run hello-world:dev
```

The worker will be available at `http://localhost:8787`

## Deployment

### Deploy to staging

```bash
nx run hello-world:deploy --configuration=staging
```

### Deploy to production

```bash
nx run hello-world:deploy --configuration=production
```

### Dry run (validate without deploying)

```bash
nx run hello-world:deploy --dryRun=true
```

## Other Operations

### Generate Types

```bash
nx run hello-world:types
```

### Stream Logs

```bash
nx run hello-world:tail
```

### Manage Secrets

```bash
# Add a secret
nx run hello-world:secret --action=put --name=API_KEY --value=your_secret

# List secrets
nx run hello-world:secret --action=list

# Delete a secret
nx run hello-world:secret --action=delete --name=API_KEY
```

## Extending This Example

### Add KV Storage

1. Create a KV namespace in Cloudflare dashboard
2. Add the binding to `wrangler.jsonc`:

```jsonc
{
  "kv_namespaces": [
    {
      "binding": "MY_KV",
      "id": "your-kv-namespace-id"
    }
  ]
}
```

3. Update the type interface in `src/index.ts`:

```typescript
export interface Env {
  MY_KV: KVNamespace;
}
```

### Add Environment Variables

Add to `wrangler.jsonc`:

```jsonc
{
  "vars": {
    "API_URL": "https://api.example.com"
  }
}
```

## Project Structure

```
hello-world/
├── src/
│   └── index.ts          # Worker entry point
├── wrangler.jsonc        # Wrangler configuration
├── project.json          # Nx project configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Learn More

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Nx Documentation](https://nx.dev)
