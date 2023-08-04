export interface CapacitorCheckAutoTimePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  isTimeAutomaticallySet(): Promise<{ isAutomaticallySet: boolean }>;
}
