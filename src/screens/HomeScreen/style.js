import {StyleSheet} from 'react-native';
import {COLOR} from '../../themes/styles';

export default StyleSheet.create({
  headerContainer: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 30,
  },
  fontBold: {
    fontWeight: '800',
  },
  avatar: {
    backgroundColor: COLOR.lightPurple,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
