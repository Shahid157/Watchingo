import {StyleSheet} from 'react-native';
import {HP} from '../../utils/responsive/responsive';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: HP('14'),
    margin: 8,
    flexDirection: 'row',
    backgroundColor: 'hsl(180, 5%, 91.1%)',
  },
  imageStyle: {
    height: 26,
    width: 26,
    marginRight: 10,
  },
});
