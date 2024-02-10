import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
//UTIL SERVICES
import {imageBase} from '../../utils/apiService/apiService';
import {PropsType, stateType} from '../homeScreen/types';
import strings from '../../utils/strings';
import {styles} from './styles';
//ASSET ICONS
import saveIcon from '../../assets/icon/save.png';
import saveFill from '../../assets/icon/saveFill.png';
import dateIcon from '../../assets/icon/date.png';
import starIcon from '../../assets/icon/star.png';
//COMPONENTS
import Header from '../../components/header';
import Button from '../../components/button/button';

const DetailScreen = ({navigation}: PropsType) => {
  const [save, setSave] = useState(false);
  const movieData = useSelector((state: stateType) => state?.MovieDataSlicer);
  const coverImage = imageBase + movieData?.poster_path;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        headerTitle={strings.detail_screen}
        onBackPress={() => navigation.goBack()}
        onSavePress={() => setSave(!save)}
        icon={save ? saveFill : saveIcon}
      />
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          resizeMode="cover"
          imageStyle={styles.imageStyle}
          source={{uri: coverImage}}
          style={styles.posterStyle}>
          <View style={styles.boxStyle}>
            <Image source={starIcon} style={styles.rateIcon} />
            <Text style={styles.rateText}>{movieData?.vote_average}</Text>
          </View>
        </ImageBackground>
        <View style={styles.subContainer}>
          <Text style={styles.genreStyle}>{movieData?.original_title}</Text>
          <View style={styles.dateBox}>
            <Image source={dateIcon} style={styles.dateIcon} />

            <Text style={styles.dateText}>{movieData.release_date}</Text>
          </View>
          <Text style={styles.overView}>{movieData?.overview}</Text>
          <Button
            onPress={() => navigation.navigate(strings.home_screen)}
            style={styles.buttonStyle}
            buttonText={'Watch Now'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailScreen;
