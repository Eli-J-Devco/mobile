import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const {width} = Dimensions.get('window');

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity: 0,
  fillShadowGradient: '#ffffff',
  //   fillShadowGradientTo: '#FF493B',
  fillShadowGradientOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  propsForDots: {
    r: '0',
    strokeWidth: '0',
    stroke: '#fff',
  },
  propsForVerticalLabels: {
    fontSize: '10',
    fontWeight: 'bold',
    // dx: '-25',
    // dy: '-10',
  },
};

const LineChartKit = () => {
  const [data, setData] = useState([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ]);

  useEffect(() => {
    const setStateInterval = setInterval(() => {
      const team = [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ];

      setData(team);
    }, 1000);

    return () => {
      clearInterval(setStateInterval);
    };
  }, []);

  return (
    <View>
      <LineChart
        // verticalLabelRotation={-45}
        // withVerticalLabels={true}
        data={{
          labels: ['05/01', '05/01', '05/01', '05/01', '05/01', '05/01'],
          datasets: [
            {
              data: data,
              color: () => `rgba(0, 148, 255, 100)`,
              strokeWidth: 0,
            },
          ],
        }}
        width={width - width * 0.12}
        height={220}
        yAxisLabel=""
        yAxisSuffix="kW"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        // transparent
        bezier
        style={
          {
            //   marginVertical: 8,
            //   borderRadius: 16,
            //   transform: [{scaleX: 1.1}],
          }
        }
      />
    </View>
  );
};

export default LineChartKit;
