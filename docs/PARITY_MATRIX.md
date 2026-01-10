# Nx Cloudflare Toolchain Parity Matrix

This document maps Nx commands to their Wrangler/C3 equivalents and documents any known parity gaps.

## Wrangler Command Parity

| Wrangler Command | Nx Command | Status | Notes |
|-----------------|------------|---------|-------|
| `wrangler dev` | `nx run <app>:dev` | ✅ Complete | All flags supported via executor options |
| `wrangler deploy` | `nx run <app>:deploy` | ✅ Complete | Includes dry-run support |
| `wrangler tail` | `nx run <app>:tail` | ✅ Complete | Real-time log streaming |
| `wrangler delete` | `nx run <app>:delete` | ✅ Complete | Worker deletion with confirmation |
| `wrangler types` | `nx run <app>:types` | ✅ Complete | TypeScript type generation |
| `wrangler secret put` | `nx run <app>:secret --action=put` | ✅ Complete | Secret management |
| `wrangler secret delete` | `nx run <app>:secret --action=delete` | ✅ Complete | Secret deletion |
| `wrangler secret list` | `nx run <app>:secret --action=list` | ✅ Complete | List all secrets |
| `wrangler kv:*` | - | 🚧 Planned | KV operations (future executor) |
| `wrangler r2:*` | - | 🚧 Planned | R2 operations (future executor) |
| `wrangler d1:*` | - | 🚧 Planned | D1 operations (future executor) |
| `wrangler queues:*` | - | 🚧 Planned | Queue operations (future executor) |

## C3 Command Parity

| C3 Command | Nx Command | Status | Notes |
|-----------|------------|---------|-------|
| `npm create cloudflare` | `nx g @acme/nx-cloudflare-c3:app` | ✅ Complete | Full scaffolding with templates |
| Interactive project setup | Generator prompts | ✅ Complete | Same UX as C3 |
| Framework selection | `--framework` option | ✅ Complete | React, Vue, Next.js, etc. |
| TypeScript support | `--typescript` option | ✅ Complete | Automatic TS configuration |
| Git initialization | Nx workspace git | ✅ Complete | Integrated with Nx |

## Executor Options

### Dev Executor

```json
{
  "config": "path/to/wrangler.jsonc",
  "env": "dev",
  "port": 8787,
  "ip": "localhost",
  "local": true,
  "persist": false,
  "remote": false,
  "verbose": false,
  "extraArgs": []
}
```

### Deploy Executor

```json
{
  "config": "path/to/wrangler.jsonc",
  "env": "production",
  "dryRun": false,
  "noBundle": false,
  "verbose": false,
  "extraArgs": []
}
```

### Tail Executor

```json
{
  "config": "path/to/wrangler.jsonc",
  "env": "production",
  "format": "pretty",
  "status": "ok",
  "extraArgs": []
}
```

### Secret Executor

```json
{
  "action": "put|delete|list",
  "name": "SECRET_NAME",
  "value": "secret_value",
  "config": "path/to/wrangler.jsonc",
  "env": "production",
  "extraArgs": []
}
```

## Known Gaps and Workarounds

### 1. KV/R2/D1 Operations
**Status**: Not yet implemented as separate executors

**Workaround**: Use `extraArgs` to pass commands:
```bash
nx run myapp:dev --extraArgs="--compatibility-date=2024-01-01"
```

### 2. Wrangler Login
**Status**: Handled outside Nx

**Workaround**: Run `npx wrangler login` before using deploy commands

### 3. Pages Projects
**Status**: Workers-focused currently

**Workaround**: Use standard Wrangler commands for Pages-specific features

## Version Compatibility

- **Wrangler**: 3.x (tested with 3.80.0)
- **Node.js**: 18.x, 20.x, 22.x
- **Nx**: 22.x
- **TypeScript**: 5.x

## Testing Recommendations

All executors wrap Wrangler commands directly, ensuring 1:1 parity. Test with:

```bash
# Test dev server
nx run myapp:dev

# Test deployment (dry run)
nx run myapp:deploy --dryRun=true

# Test type generation
nx run myapp:types
```

## Future Enhancements

1. **KV Executor**: Dedicated executor for KV operations
2. **R2 Executor**: Bucket and object management
3. **D1 Executor**: Database migrations and queries
4. **Queue Executor**: Queue management and publishing
5. **Analytics Executor**: GraphQL analytics queries
6. **Pages Integration**: First-class Pages project support
