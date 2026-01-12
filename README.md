# ubiquitous-computing-machine

**Nx Cloudflare Monorepo Toolchain**

A comprehensive Nx workspace providing one-for-one parity with Cloudflare's Wrangler CLI and create-cloudflare (C3) tooling. Build, develop, and deploy Cloudflare Workers and applications in a modern monorepo with the full power of Nx.

## 🚀 Features

### Nx Plugins

- **[@rainbowkillah/cf-wrangler](./plugins/nx-cloudflare-wrangler)**: Executors and generators for Wrangler CLI integration
- **[@rainbowkillah/cf-c3](./plugins/nx-cloudflare-c3)**: Project scaffolding equivalent to create-cloudflare (C3)

### Executors

All Wrangler commands available as Nx executors:

- `dev` - Local development server
- `deploy` - Production deployments
- `tail` - Real-time log streaming
- `delete` - Worker deletion
- `types` - TypeScript type generation
- `secret` - Secret management (put/delete/list)

### Generators

Streamlined project and configuration generation:

- `app` - Scaffold complete Cloudflare applications
- `init` - Initialize workspace-wide Cloudflare tooling
- `config` - Generate wrangler.jsonc configuration
- `binding` - Add/update bindings (KV, R2, D1, Queues)
- `env` - Environment-specific configurations
- `add` - Add features to existing apps

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/rainbowkillah/ubiquitous-computing-machine.git
cd ubiquitous-computing-machine

# Install dependencies
npm install

# Build plugins
nx run-many --target=build --projects=nx-cloudflare-wrangler,nx-cloudflare-c3
```

## 🏗️ Quick Start

### 1. Generate a Cloudflare Worker

```bash
# Interactive mode
nx g @acme/nx-cloudflare-c3:app

# Or with options
nx g @acme/nx-cloudflare-c3:app my-worker --directory=apps/production
```

### 2. Develop Locally

```bash
nx run my-worker:dev
```

### 3. Deploy to Cloudflare

```bash
# Deploy to production
nx run my-worker:deploy

# Or test with dry-run
nx run my-worker:deploy --dryRun=true
```

## 📚 Documentation

- **[Parity Matrix](./docs/PARITY_MATRIX.md)**: Complete Wrangler/C3 command mapping
- **[Wrangler Plugin README](./plugins/nx-cloudflare-wrangler/README.md)**: Executor and generator documentation
- **[C3 Plugin README](./plugins/nx-cloudflare-c3/README.md)**: Scaffolding documentation
- **[Examples](./examples)**: Sample projects demonstrating various use cases

## 🎯 Use Cases

### Multi-Account Management

```
apps/
  account-a/
    worker-1/
    worker-2/
  account-b/
    worker-3/
  shared-workers/
```

### Shared Libraries

```bash
# Create a shared utility library
nx g @nx/js:library shared-utils

# Import in multiple workers
import { helper } from '@rainbowkillah/shared-utils';
```

### Environment Management

```bash
# Development
nx run my-worker:dev --env=dev

# Staging deployment
nx run my-worker:deploy --env=staging

# Production deployment
nx run my-worker:deploy --env=production
```

## 🛠️ Development

### Build All Plugins

```bash
nx run-many --target=build --all
```

### Run Tests

```bash
nx run-many --target=test --all
```

### Lint Code

```bash
nx run-many --target=lint --all
```

## 📋 Project Structure

```
ubiquitous-computing-machine/
├── plugins/
│   ├── nx-cloudflare-wrangler/   # Wrangler integration plugin
│   │   ├── src/
│   │   │   ├── executors/         # dev, deploy, tail, etc.
│   │   │   └── generators/        # init, config, binding, env
│   │   ├── executors.json
│   │   ├── generators.json
│   │   └── README.md
│   └── nx-cloudflare-c3/          # C3 scaffolding plugin
│       ├── src/
│       │   └── generators/        # app, add
│       ├── generators.json
│       └── README.md
├── apps/                           # Generated Cloudflare applications
├── libs/                           # Shared libraries
├── docs/                           # Documentation
│   └── PARITY_MATRIX.md
└── examples/                       # Example projects
```

## 🤝 Contributing

Contributions are welcome! Please see the contribution guidelines in each plugin's README.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and lint
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🌟 Acknowledgments

- Built with [Nx](https://nx.dev)
- Powered by [Cloudflare Workers](https://workers.cloudflare.com)
- Inspired by [Wrangler](https://github.com/cloudflare/workers-sdk) and [create-cloudflare (C3)](https://github.com/cloudflare/workers-sdk/tree/main/packages/create-cloudflare)

## 🔗 Links

- [Nx Documentation](https://nx.dev)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler)
- [Create Cloudflare (C3) Documentation](https://developers.cloudflare.com/pages/get-started/c3)

## 💬 Support

- Open an issue for bug reports or feature requests
- Check existing issues for known problems
- Review the [Parity Matrix](./docs/PARITY_MATRIX.md) for command equivalents

