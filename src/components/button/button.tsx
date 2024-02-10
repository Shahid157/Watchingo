import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
//UTILS
import {styles} from './styles';
import {ButtonTypeProps} from './types';

const Button = ({onPress, style, buttonText}: ButtonTypeProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default Button;
