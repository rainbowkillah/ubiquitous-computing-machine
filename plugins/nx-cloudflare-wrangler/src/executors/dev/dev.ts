import { ExecutorContext, PromiseExecutor } from '@nx/devkit';
import { DevExecutorSchema } from './schema';
import { execSync } from 'child_process';

const runExecutor: PromiseExecutor<DevExecutorSchema> = async (
  options,
  context: ExecutorContext
) => {
  const projectRoot =
    context.projectsConfigurations?.projects[context.projectName!]?.root;

  if (!projectRoot) {
    throw new Error(`Project root not found for ${context.projectName}`);
  }

  const args = ['wrangler', 'dev'];

  // Add config path if specified
  if (options.config) {
    args.push('--config', options.config);
  }

  // Add environment if specified
  if (options.env) {
    args.push('--env', options.env);
  }

  // Add port if specified
  if (options.port) {
    args.push('--port', options.port.toString());
  }

  // Add IP if specified
  if (options.ip) {
    args.push('--ip', options.ip);
  }

  // Add local flag if specified
  if (options.local) {
    args.push('--local');
  }

  // Add persist flag if specified
  if (options.persist) {
    args.push('--persist');
  }

  // Add remote flag if specified
  if (options.remote) {
    args.push('--remote');
  }

  // Add verbose flag if specified
  if (options.verbose) {
    args.push('--verbose');
  }

  // Add any extra arguments
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
    console.error('Error running wrangler dev:', error);
    return {
      success: false,
    };
  }
};

export default runExecutor;
