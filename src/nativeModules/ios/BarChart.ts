import { requireNativeComponent, ViewStyle } from 'react-native';

type DataChart = {
    labels: string[]
    values: number[]
}
interface Props {
    style: ViewStyle
    chartData: DataChart
}

const RCTIBarChart = requireNativeComponent<Props>('RCTBarChart');

export default RCTIBarChart;
