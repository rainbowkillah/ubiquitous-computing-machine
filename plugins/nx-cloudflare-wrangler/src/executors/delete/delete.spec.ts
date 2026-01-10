import { ExecutorContext } from '@nx/devkit';

import { DeleteExecutorSchema } from './schema';
import executor from './delete';

const options: DeleteExecutorSchema = {};
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

describe('Delete Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
