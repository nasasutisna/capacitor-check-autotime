import { WebPlugin } from '@capacitor/core';

import type { CapacitorCheckAutoTimePlugin } from './definitions';

export class CapacitorCheckAutoTimeWeb
  extends WebPlugin
  implements CapacitorCheckAutoTimePlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
