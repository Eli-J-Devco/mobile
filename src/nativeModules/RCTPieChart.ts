import {requireNativeComponent, ViewStyle} from 'react-native';

export interface IDataSet {
  value: number;
  label: string;
  color: string;
}

interface RCTPieChartProps {
  style?: ViewStyle;
  data: IDataSet[];
}

const RCTPieChart = requireNativeComponent<RCTPieChartProps>('RCTPieChart');

export default RCTPieChart;
