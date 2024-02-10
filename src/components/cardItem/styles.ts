import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import {HP, WP} from '../../utils/responsive/responsive';

const color = AppConfig();
export const styles = StyleSheet.create({
  cardContainer: {
    height: HP('16'),
    backgroundColor: color.monochromeColors.white,
    borderRadius: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    color: color.monochromeColors.black,
    fontWeight: '500',
    fontSize: 16,
  },
  iconStyle: {height: 16, width: 16, tintColor: color.monochromeColors.orange},
  rateText: {
    textAlign: 'center',
    color: color.monochromeColors.black,
    marginLeft: 5,
  },
  textCard: {flex: 1, alignItems: 'center'},
  dateTextCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageCard: {
    width: WP('40'),
    height: HP('14'),
    borderRadius: 12,
    backgroundColor: color.monochromeColors.grey3,
    alignItems: 'center',
    marginLeft: -5,
  },
});
