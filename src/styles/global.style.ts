import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  view: {
    padding: 16,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexColumn:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRowCentent:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRowJusBeween: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  borderRadius8: {
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default globalStyles;
