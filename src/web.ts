import { WebPlugin } from '@capacitor/core';

import type { CapacitorCheckAutoTimePlugin } from './definitions';

export class CapacitorCheckAutoTimeWeb
  extends WebPlugin
  implements CapacitorCheckAutoTimePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async isTimeAutomaticallySet(): Promise<{ isAutomaticallySet: boolean }> {
    return { isAutomaticallySet: false }; // Ganti dengan kode untuk mendeteksi pengaturan waktu di iOS
  }

  async getTimeSettingsInfo(): Promise<{ isAutomaticallySet: boolean; isFormat24Hours: boolean }> {
    return { isAutomaticallySet: false, isFormat24Hours: false };
  }
}
