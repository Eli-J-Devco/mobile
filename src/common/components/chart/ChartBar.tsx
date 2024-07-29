import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

const {width} = Dimensions.get('window');

function random(min: number, max: number) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export function getData() {
  const bars = random(6, 10);

  return [...new Array(bars)].map((vl, index) => {
    return {x: `${index + 1}`, y: random(2, 10)};
  });
}

const ChartBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  return (
    <VictoryChart
      domainPadding={{x: 20}}
      animate={{duration: 500}}
      width={width - width * 0.12}
      theme={VictoryTheme.material}>
      {state && (
        <VictoryBar
          alignment="start"
          data={state}
          style={{
            data: {fill: 'tomato', width: 12},
          }}
        />
      )}
    </VictoryChart>
  );
};

export default ChartBar;
