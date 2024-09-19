import { requireNativeComponent, ViewStyle } from 'react-native';

interface Props {
    style: ViewStyle
    chartData: number[]
}

const BarChart = requireNativeComponent<Props>('RCTBarChart');

export default BarChart;
