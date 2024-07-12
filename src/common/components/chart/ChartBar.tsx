import {View, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

const {width} = Dimensions.get('window');

function random(min: number, max: number) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getData() {
  const bars = random(6, 10);

  return [...new Array(bars)].map((vl, index) => {
    return {x: `${index + 1}`, y: random(2, 10)};
  });
}

const ChartBar = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
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
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: 'orange',
                label: 'BYE',
              }),
            },
          }}
        />
      )}
    </VictoryChart>
  );
};

export default ChartBar;
