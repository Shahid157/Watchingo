import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
//UTIL SERVICES
import {useDispatch} from 'react-redux';
import {addMovieData} from '../../redux/toolkitSlice/MovieDataSlicer';
import {styles} from './styles';
import {CardProps} from './types';
import strings from '../../utils/strings';
import {imageBase} from '../../utils/apiService/apiService';
//ASSET ICON
import dateIcon from '../../assets/icon/date.png';

const Card = ({item, navigation}: CardProps) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(strings.detail_screen);
        dispatch(addMovieData(item));
      }}
      style={styles.cardContainer}>
      <Image
        style={styles.imageCard}
        source={{uri: imageBase + item?.poster_path}}
        resizeMode="cover"
      />

      <View style={styles.textCard}>
        <Text style={styles.title}>{item?.title}</Text>
        <View style={styles.dateTextCont}>
          <Image source={dateIcon} style={styles.iconStyle} />

          <Text style={styles.rateText}>{item?.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
