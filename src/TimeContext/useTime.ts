import { useContext } from 'react';

import { UseTimeResult } from './types';
import TimeContext from './TimeContext';

const useTime = (): UseTimeResult => {
  return useContext(TimeContext);
};

export default useTime;
