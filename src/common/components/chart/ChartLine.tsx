import React from 'react';
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory-native';
import useFakeChartData from '../../../hooks/useFakeChartData';

const ChartLine = () => {
  const state = useFakeChartData();

  return (
    <VictoryChart animate={{duration: 500}} theme={VictoryTheme.material}>
      {state && (
        <VictoryLine
          interpolation="natural"
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
          style={{
            data: {stroke: '#c43a31'},
            parent: {border: '1px solid #ccc'},
          }}
          data={state}
        />
      )}
    </VictoryChart>
  );
};

export default ChartLine;
