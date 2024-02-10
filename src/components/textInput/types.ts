import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface InputTypeProps {
  style?: StyleProp<ViewStyle>;
  multiline?: boolean;
  autoFocus?: boolean;
  hint?: string;
  onChangeText?: (text: string) => void;
  onEndEditing?: () => void;
  onFocus?: () => void;
  value?: string;
  inputStyle: StyleProp<TextStyle>;
}
