export interface TailExecutorSchema {
  config?: string;
  env?: string;
  format?: 'json' | 'pretty';
  status?: 'ok' | 'error' | 'canceled';
  extraArgs?: string[];
}
