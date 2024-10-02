import {requireNativeComponent, ViewStyle} from 'react-native';

export interface IDataSet {
  values: number[];
  label: string;
}

interface RCTLineChartProps {
  style?: ViewStyle;
  data: {
    datasets: IDataSet[];
    colors: string[];
  };
}

const RCTMutiLineChart =
  requireNativeComponent<RCTLineChartProps>('RCTMutiLineChart');

export default RCTMutiLineChart;
