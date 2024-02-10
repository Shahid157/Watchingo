import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {headerTypeProps} from './types';
import backArrow from '../../assets/icon/backArrow.png';

const Header = ({
  onBackPress,
  headerTitle,
  onSavePress,
  icon,
}: headerTypeProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Image source={backArrow} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      <TouchableOpacity onPress={onSavePress}>
        <Image source={icon} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
