/* eslint-disable no-magic-numbers */
import {Dimensions} from 'react-native';
import {SCREEN_HEGHT} from '../constants/view/screen-size';

const {height} = Dimensions.get('window');

type ResultType = {
  top: number;
  bottom: number;
};

export const flexV = (top: number, bottom: number): ResultType => {
  // console.log('----> height: ', height);

  const team = 2;

  if (height < SCREEN_HEGHT.IpPorMax) {
    return {top: top, bottom: bottom - team};
  }

  return {top, bottom};
};
