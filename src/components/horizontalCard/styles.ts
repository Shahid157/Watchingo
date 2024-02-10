import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import {HP, WP} from '../../utils/responsive/responsive';

const color = AppConfig();
export const styles = StyleSheet.create({
  cardContainer: {
    height: HP('30'),
    width: WP('50'),
    backgroundColor: color.monochromeColors.white,
    borderRadius: 14,
    marginRight: 10,
    justifyContent: 'center',
  },
  imageBackground: {height: '100%', width: '100%'},
  imageStyle: {borderRadius: 14, backgroundColor: color.monochromeColors.grey3},
  title: {
    width: WP('50'),
    textAlign: 'center',
    color: color.monochromeColors.black,
    fontWeight: '500',
    fontSize: 16,
  },
  iconCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
  },
  iconStyle: {height: 16, width: 16, tintColor: color.monochromeColors.orange},
  rateText: {
    textAlign: 'center',
    color: color.monochromeColors.black,
    marginLeft: 5,
  },
  boxStyle: {
    flex: 1,
    height: HP('8'),
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 10,
    width: 170,
    justifyContent: 'center',
    backgroundColor: color.monochromeColors.white,
  },
});
