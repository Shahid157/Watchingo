import {StyleProp, ViewStyle} from 'react-native';

export interface ButtonTypeProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  buttonText?: string;
}
