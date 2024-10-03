import {requireNativeComponent, ViewStyle} from 'react-native';

interface RCTALineChartProps {
  style?: ViewStyle;
  data: {
    values: number[];
    labels: string[];
  };
}

const RCTALineChart = requireNativeComponent<RCTALineChartProps>('RCTALineChart');

export default RCTALineChart;
