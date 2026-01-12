export interface DevExecutorSchema {
  config?: string;
  env?: string;
  port?: number;
  ip?: string;
  local?: boolean;
  persist?: boolean;
  remote?: boolean;
  verbose?: boolean;
  extraArgs?: string[];
}
