import {requireNativeComponent, ViewStyle} from 'react-native';

interface RCTABarChartProps {
  style?: ViewStyle;
  data: {
    values: number[];
    labels: string[];
  };
}

const RCTABarChart = requireNativeComponent<RCTABarChartProps>('RCTABarChart');

export default RCTABarChart;
