/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from 'react';

function random(min: number, max: number) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export function getData() {
  const bars = random(6, 10);

  return [...new Array(bars)].map((vl, index) => {
    return {x: `${index + 1}`, y: random(2, 10)};
  });
}

const useFakeChartData = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    // const team = getData();
    // setState(team);

    const setStateInterval = setInterval(() => {
      const team = getData();

      setState(team);
    }, 1000);

    return () => {
      clearInterval(setStateInterval);
    };
  }, []);

  return state;
};

export default useFakeChartData;
