import { ExecutorContext, PromiseExecutor } from '@nx/devkit';
import { DeployExecutorSchema } from './schema';
import { execSync } from 'child_process';

const runExecutor: PromiseExecutor<DeployExecutorSchema> = async (
  options,
  context: ExecutorContext
) => {
  const projectRoot =
    context.projectsConfigurations?.projects[context.projectName!]?.root;

  if (!projectRoot) {
    throw new Error(`Project root not found for ${context.projectName}`);
  }

  const args = ['wrangler', 'deploy'];

  // Add config path if specified
  if (options.config) {
    args.push('--config', options.config);
  }

  // Add environment if specified
  if (options.env) {
    args.push('--env', options.env);
  }

  // Add dry-run flag if specified
  if (options.dryRun) {
    args.push('--dry-run');
  }

  // Add no-bundle flag if specified
  if (options.noBundle) {
    args.push('--no-bundle');
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
    console.error('Error running wrangler deploy:', error);
    return {
      success: false,
    };
  }
};

export default runExecutor;
