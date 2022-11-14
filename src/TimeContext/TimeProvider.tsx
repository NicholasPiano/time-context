import React, { useEffect, useState, PropsWithChildren } from 'react';

import TimeContext from './TimeContext';

const TimeProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const [t1, setT1] = useState(false);
  const [t10, setT10] = useState(false);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      setT10((t) => !t);

      if (count % 10 === 0) {
        setT1((t) => !t);
      }

      count += 1;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <TimeContext.Provider value={{ t1, t10 }}>{children}</TimeContext.Provider>;
};

export default TimeProvider;
