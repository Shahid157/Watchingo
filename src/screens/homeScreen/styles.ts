import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import {HP, WP} from '../../utils/responsive/responsive';

const color = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.monochromeColors.grey4,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  iconStyle: {height: 20, width: 20},
  contentText: {
    fontSize: 14,
    fontWeight: '500',
    color: color.monochromeColors.black,
    marginLeft: 5,
  },
  inputCont: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 8,
    flexDirection: 'row',
    marginRight: 15,
    backgroundColor: color.monochromeColors.white,
  },
  buttonContainer: {
    height: 120,
    top: 120,
    bottom: 0,
    justifyContent: 'center',
    padding: 25,
  },
  inputStyle: {flex: 1, height: 50, marginLeft: 5, fontWeight: '500'},
  listHeadText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 16,
    color: color.monochromeColors.black,
  },
  listHeadTextCont: {
    height: HP('4'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  headerCont: {
    height: HP('7'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  headerSubCont: {
    height: HP('5'),
    width: WP('53'),
    backgroundColor: color.monochromeColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    padding: 2,
  },
  imageStyle: {
    height: HP('4'),
    width: WP('9'),
    borderRadius: 20,
  },
  iconView: {
    height: HP('5'),
    width: WP('10.5'),
    backgroundColor: color.monochromeColors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catListContainer: {
    height: HP('4.8'),
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchBox: {
    marginTop: -5,
    height: HP('10'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBtn: {
    height: HP('6'),
    width: WP('15'),
    backgroundColor: color.primaryColor.blue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    height: HP('5'),
    width: WP('10'),
    tintColor: color.monochromeColors.white,
  },
  emptyView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
