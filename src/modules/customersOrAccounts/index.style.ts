import {StyleSheet} from 'react-native';
import {vw} from '../../utils/responsive';

const MAX_WIDTH = 77;

export default StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomWidth: 1
  },
  btn: {
    borderWidth: 1,
    borderRadius: 4,
    width: 32,
    height: 32,
  },
  contentContiner: {
    paddingTop: 8,
  },
  contentContinerDetail: {
    paddingTop: 8,
    paddingHorizontal: 8, 
    gap: 16
  },
  contentDetail: {
    paddingHorizontal: 4
  },
  gap4: {
    gap: 4,
  },
  title: {
    alignItems: 'flex-start',
    gap: 4,
  },
  name: {
    maxWidth: vw(MAX_WIDTH),
    flexWrap: 'wrap',
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    gap: 2,
    paddingHorizontal: 2,
    overflow: 'hidden'
  },
  customerNameContainer: {
    gap: 4,
    padding: 8, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    maxWidth: '100%'
  },
  customerName: {
    padding: 4,
    borderRadius: 4, 
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 4
  }
});
