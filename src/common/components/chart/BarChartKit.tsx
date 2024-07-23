import {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const {width} = Dimensions.get('window');

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffffff',
  fillShadowGradient: '#a9a9a9',
  //   fillShadowGradientTo: '#FF493B',
  fillShadowGradientOpacity: 1,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForVerticalLabels: {
    fontSize: '10',
    fontWeight: 'bold',
    dx: '-25',
    dy: '-10',
  },
};

const BarChartKit = () => {
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
      <BarChart
        verticalLabelRotation={-45}
        showBarTops={false}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={width - width * 0.12}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={chartConfig}
        style={
          {
            //   marginVertical: 8,
            //   borderRadius: 16,
          }
        }
      />
    </View>
  );
};

export default BarChartKit;
