import { ExecutorContext, PromiseExecutor } from '@nx/devkit';
import { SecretExecutorSchema } from './schema';
import { execSync } from 'child_process';

const runExecutor: PromiseExecutor<SecretExecutorSchema> = async (
  options,
  context: ExecutorContext
) => {
  const projectRoot =
    context.projectsConfigurations?.projects[context.projectName!]?.root;

  if (!projectRoot) {
    throw new Error(`Project root not found for ${context.projectName}`);
  }

  const action = options.action || 'list';
  const args = ['wrangler', 'secret', action];

  if (action === 'put' && options.name) {
    args.push(options.name);
  } else if (action === 'delete' && options.name) {
    args.push(options.name);
  }

  if (options.config) {
    args.push('--config', options.config);
  }

  if (options.env) {
    args.push('--env', options.env);
  }

  if (options.extraArgs && options.extraArgs.length > 0) {
    args.push(...options.extraArgs);
  }

  console.log(`Running: npx ${args.join(' ')}`);
  console.log(`Working directory: ${projectRoot}`);

  try {
    const command = `npx ${args.join(' ')}`;
    
    // For 'put' action with a value, pass it via stdin
    if (action === 'put' && options.value) {
      execSync(command, {
        cwd: projectRoot,
        stdio: 'inherit',
        input: options.value,
      });
    } else {
      execSync(command, {
        cwd: projectRoot,
        stdio: 'inherit',
      });
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error running wrangler secret:', error);
    return {
      success: false,
    };
  }
};

export default runExecutor;
