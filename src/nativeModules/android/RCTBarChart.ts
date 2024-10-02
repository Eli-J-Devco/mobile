import {requireNativeComponent, ViewStyle} from 'react-native';

interface RCTBarChartProps {
  style?: ViewStyle;
  data: {
    values: number[];
    labels: string[];
  };
}

const RCTBarChart = requireNativeComponent<RCTBarChartProps>('RCTBarChart');

export default RCTBarChart;
