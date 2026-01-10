export interface SecretExecutorSchema {
  action?: 'put' | 'delete' | 'list';
  name?: string;
  value?: string;
  config?: string;
  env?: string;
  extraArgs?: string[];
}
