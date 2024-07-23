import React from 'react';
import {Dimensions} from 'react-native';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
import useFakeChartData from '../../../hooks/useFakeChartData';

const {width} = Dimensions.get('window');

const ChartBar = () => {
  const state = useFakeChartData();

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
