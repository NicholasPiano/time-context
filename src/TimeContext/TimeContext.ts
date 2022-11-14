import { createContext } from 'react';

import { UseTimeResult } from './types';

const TimeContext = createContext<UseTimeResult>({
  t1: false,
  t10: false,
});

export default TimeContext;
