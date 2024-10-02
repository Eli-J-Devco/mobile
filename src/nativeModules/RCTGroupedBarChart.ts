import {requireNativeComponent, ViewStyle} from 'react-native';

export interface IDataSet {
  values: number[];
  label: string;
}

interface RCTLineChartProps {
  style?: ViewStyle;
  data: IDataSet[];
}

const RCTGroupedBarChart =
  requireNativeComponent<RCTLineChartProps>('GroupedBarChart');

export default RCTGroupedBarChart;
