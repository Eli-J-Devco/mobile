import React from 'react';
import {StyleSheet, View} from 'react-native';

const HighChartBar = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        data: [1, 3, 2],
      },
    ],
  });

  return <></>;
};

export default HighChartBar;

const styles = StyleSheet.create({
  container: {
    // height: 200,
    // width: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
