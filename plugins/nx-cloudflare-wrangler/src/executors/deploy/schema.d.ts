export interface DeployExecutorSchema {
  config?: string;
  env?: string;
  dryRun?: boolean;
  noBundle?: boolean;
  verbose?: boolean;
  extraArgs?: string[];
}
