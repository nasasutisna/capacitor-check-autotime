export interface CapacitorCheckAutoTimePlugin {
  getTimeSettingsInfo(): Promise<{ isAutomaticallySet: boolean; isFormat24Hours: boolean }>;
}
