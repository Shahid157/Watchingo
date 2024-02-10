import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//UTILS
import {styles} from './styles';
import {cardItemType, horizontalCardProps} from './types';
import {imageBase} from '../../utils/apiService/apiService';
import strings from '../../utils/strings';
import {useDispatch} from 'react-redux';
import {addMovieData} from '../../redux/toolkitSlice/MovieDataSlicer';
//ASSET ICON
import starIcon from '../../assets/icon/star.png';

const HorizontalCard = ({listData, navigation}: horizontalCardProps) => {
  const dispatch = useDispatch();

  return (
    <FlatList
      data={listData}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={(item: cardItemType) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(strings.detail_screen);
            dispatch(addMovieData(item?.item));
          }}
          style={styles.cardContainer}>
          <ImageBackground
            source={{uri: imageBase + item?.item?.poster_path}}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}>
            <View style={styles.boxStyle}>
              <Text numberOfLines={1} style={styles.title}>
                {item?.item?.title}
              </Text>
              <View style={styles.iconCont}>
                <Image source={starIcon} style={styles.iconStyle} />

                <Text style={styles.rateText}>{item?.item?.vote_average}</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
};
export default HorizontalCard;
