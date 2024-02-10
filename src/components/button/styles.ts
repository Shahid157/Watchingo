import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';

const color = AppConfig();
export const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 28,
    color: color.monochromeColors.grey3,
  },
});
