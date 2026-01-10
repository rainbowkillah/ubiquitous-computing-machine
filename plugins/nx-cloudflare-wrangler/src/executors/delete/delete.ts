import { ExecutorContext, PromiseExecutor } from '@nx/devkit';
import { DeleteExecutorSchema } from './schema';
import { execSync } from 'child_process';

const runExecutor: PromiseExecutor<DeleteExecutorSchema> = async (
  options,
  context: ExecutorContext
) => {
  const projectRoot =
    context.projectsConfigurations?.projects[context.projectName!]?.root;

  if (!projectRoot) {
    throw new Error(`Project root not found for ${context.projectName}`);
  }

  const args = ['wrangler', 'delete'];

  if (options.name) {
    args.push(options.name);
  }

  if (options.config) {
    args.push('--config', options.config);
  }

  if (options.env) {
    args.push('--env', options.env);
  }

  if (options.force) {
    args.push('--force');
  }

  if (options.extraArgs && options.extraArgs.length > 0) {
    args.push(...options.extraArgs);
  }

  console.log(`Running: npx ${args.join(' ')}`);
  console.log(`Working directory: ${projectRoot}`);

  try {
    execSync(`npx ${args.join(' ')}`, {
      cwd: projectRoot,
      stdio: 'inherit',
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error running wrangler delete:', error);
    return {
      success: false,
    };
  }
};

export default runExecutor;
