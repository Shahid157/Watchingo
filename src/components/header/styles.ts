import {StyleSheet} from 'react-native';
import {HP, WP} from '../../utils/responsive/responsive';

export const styles = StyleSheet.create({
  container: {
    height: HP('8'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  backIcon: {
    height: HP('3'),
    width: WP('7'),
  },
  headerTitle: {fontSize: 18, fontWeight: '800'},
});
