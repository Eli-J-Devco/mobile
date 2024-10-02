import {requireNativeComponent, ViewStyle} from 'react-native';

interface RCTLineChartProps {
  style?: ViewStyle;
  data: {
    values: number[];
    labels: string[];
  };
}

const RCTLineChart = requireNativeComponent<RCTLineChartProps>('RCTLineChart');

export default RCTLineChart;
