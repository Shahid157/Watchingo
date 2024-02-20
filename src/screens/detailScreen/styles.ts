import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import {HP, WP} from '../../utils/responsive/responsive';

const color = AppConfig();
export const styles = StyleSheet.create({
  subContainer: {flex: 0.5, paddingHorizontal: 20},
  container: {flex: 1},
  dateText: {
    textAlign: 'center',
    color: color.monochromeColors.disabled,
    marginLeft: 5,
  },
  btnContainer: {flex: 1, paddingHorizontal: 60, marginTop: 100},
  textStyle: {
    margin: 15,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: color.monochromeColors.white,
  },
  buttonStyle: {
    height: HP('7'),
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: color.primaryColor.blue,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: color.primaryColor.blue,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 10,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    opacity: 0.7,
    backgroundColor: color.monochromeColors.black,
    borderRadius: 18,
  },
  genreStyle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 20,
    color: color.monochromeColors.black,
  },
  overView: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: color.monochromeColors.black,
  },
  posterStyle: {
    height: HP('45'),
    backgroundColor: color.monochromeColors?.grey2,
    borderRadius: 18,
    marginHorizontal: 20,
  },
  boxStyle: {
    height: HP('7'),
    width: WP('14'),
    backgroundColor: color.monochromeColors.black,
    borderRadius: 12,
    position: 'absolute',
    bottom: -25,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {fontSize: 18, fontWeight: '800'},
  rateIcon: {
    height: HP('2'),
    width: WP('4.5'),
    tintColor: color.monochromeColors.orange,
  },
  rateText: {
    color: color.monochromeColors.white,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateIcon: {
    height: HP('2'),
    width: WP('5.5'),
    tintColor: color.monochromeColors.orange,
  },
});
