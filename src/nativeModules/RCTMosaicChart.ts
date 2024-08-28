import {requireNativeComponent, ViewStyle} from 'react-native';

type Value = {
  x: string;
  y: number[];
};

interface RCTMosaicChartProps {
  style?: ViewStyle;
  data: Value[];
  title: string;
}

const RCTMosaicChart =
  requireNativeComponent<RCTMosaicChartProps>('RCTMosaicChart');

export default RCTMosaicChart;
