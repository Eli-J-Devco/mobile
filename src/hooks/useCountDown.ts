/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useEffect, useRef, useState} from 'react';

const useCountDown: (
  total: number,
  ms?: number,
) => [number, () => void, () => void, () => void] = (
  total: number,
  ms = 1000,
) => {
  const [counter, setCountDown] = useState(total);
  const [startCountDown, setStartCountDown] = useState(false);
  // Store the created interval
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const intervalId = useRef<any>();
  const start: () => void = () => setStartCountDown(true);
  const pause: () => void = () => setStartCountDown(false);
  const reset: () => void = () => {
    clearInterval(intervalId.current);
    setStartCountDown(true);
    setCountDown(total);
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      startCountDown && counter > 0 && setCountDown(counter => counter - 1);
    }, ms);
    // Clear interval when count to zero
    if (counter === 0) clearInterval(intervalId.current);

    // Clear interval when unmount
    return () => clearInterval(intervalId.current);
  }, [startCountDown, counter, ms]);

  return [counter, start, pause, reset];
};

export default useCountDown;
