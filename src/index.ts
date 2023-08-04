import { registerPlugin } from '@capacitor/core';

import type { CapacitorCheckAutoTimePlugin } from './definitions';

const CapacitorCheckAutoTime = registerPlugin<CapacitorCheckAutoTimePlugin>(
  'CapacitorCheckAutoTime',
  {
    web: () => import('./web').then(m => new m.CapacitorCheckAutoTimeWeb()),
  },
);

export * from './definitions';
export { CapacitorCheckAutoTime };
