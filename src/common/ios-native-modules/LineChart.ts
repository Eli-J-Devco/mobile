import { requireNativeComponent, ViewStyle } from 'react-native';

interface Props {
    style: ViewStyle
    chartData: number[]
    labels: string[]
}

const LineChart = requireNativeComponent<Props>('RCTLineChart');

export default LineChart;
