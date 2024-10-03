import { requireNativeComponent, ViewStyle } from 'react-native';

type DataChart = {
    labels: string[]
    values: number[]
}

interface Props {
    style: ViewStyle
    chartData: DataChart
}

const RCTILineChart = requireNativeComponent<Props>('RCTLineChart');

export default RCTILineChart;
