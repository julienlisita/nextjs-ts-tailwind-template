// src/config/dataMode.ts
type DataMode = 'static' | 'db';

export const DATA_MODE: DataMode =
  (process.env.NEXT_PUBLIC_DATA_MODE as DataMode) ||
  (process.env.DATA_MODE as DataMode) ||
  'static';

export const IS_DB = DATA_MODE === 'db';
