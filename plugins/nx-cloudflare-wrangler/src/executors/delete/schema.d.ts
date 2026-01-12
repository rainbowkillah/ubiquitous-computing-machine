export interface DeleteExecutorSchema {
  config?: string;
  env?: string;
  name?: string;
  force?: boolean;
  extraArgs?: string[];
}
