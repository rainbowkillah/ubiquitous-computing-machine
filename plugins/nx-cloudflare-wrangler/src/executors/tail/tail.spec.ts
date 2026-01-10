import { ExecutorContext } from '@nx/devkit';

import { TailExecutorSchema } from './schema';
import executor from './tail';

const options: TailExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
  projectGraph: {
    nodes: {},
    dependencies: {},
  },
  projectsConfigurations: {
    projects: {},
    version: 2,
  },
  nxJsonConfiguration: {},
};

describe('Tail Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
