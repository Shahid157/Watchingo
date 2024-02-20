import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
//ASSET ICONs
import userIcon from '../../assets/icon/user.png';
import bellIcon from '../../assets/icon/bell.png';
import searchIcon from '../../assets/icon/search.webp';
//UTIL SERVICES
import {cardItemType} from '../../components/horizontalCard/types';
import {PropsType, item} from './types';
import {Colors} from '../../utils/colors';
import {APIHANDLER} from '../../utils/apiService/apiService';
import strings, {MOCKDATA} from '../../utils/strings';
//COMPONENTS
import HorizontalCard from '../../components/horizontalCard/horizontalCard';
import Card from '../../components/cardItem/cardItem';
import InputText from '../../components/textInput/input';
import {ENDPOINTS, METHODS} from '../../utils/apiService/endPoints';

const HomeScreen = ({navigation}: PropsType) => {
  const [selectedCat, setSelectedCat] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [searchList, setSeachList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    FetchMovies();
  }, []);

  //search functionality
  const onSearchPress = () => {
    const filtered = movieList.filter((data: item) =>
      data?.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setSeachList(filtered);
    setSearchText(searchValue);
  };

  const onChangeText = (text: string) => {
    setSearchValue(text);
    if (text.length === 0) {
      setSearchText('');
    }
  };
  

  // api call to get the movies List
  const FetchMovies = async () => {
    Promise.all([
      APIHANDLER(METHODS.GET, ENDPOINTS.upComingMovies),
      APIHANDLER(METHODS.GET, ENDPOINTS.nowPlayingMovies),
    ])
      .then(response => {
        const {results: dataUpcoming} = response[0].data;
        const {results: dataNowPlaying} = response[1].data;
        setNowPlayingList(dataNowPlaying);
        setMovieList(dataUpcoming);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //here is the Flatlist header component
  const ListHeaderComponent = () => {
    return (
      <View>
        <HorizontalCard
          listData={nowPlayingList as any}
          navigation={navigation}
        />
        <View style={styles.listHeadTextCont}>
          <Text style={styles.listHeadText}>
            {searchText.length > 0 ? 'Top Result' : strings.list_text}
          </Text>
        </View>
      </View>
    );
  };

  //header of the screen
  const Header = () => {
    return (
      <View style={styles.headerCont}>
        <View style={styles.headerSubCont}>
          <Image source={userIcon} style={styles.imageStyle} />
          <Text style={styles.contentText}>{'Hi, Shahid Chawdhary'}</Text>
        </View>
        <View style={styles.iconView}>
          <Image source={bellIcon} style={styles.iconStyle} />
        </View>
      </View>
    );
  };

  // Category redner item
  //the filter functionality is not implemented I haven't found any API for that so I'm using mock data
  const CategoryList = (val: {item: string; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedCat(val?.index)}
        style={[
          styles.catListContainer,
          {
            backgroundColor:
              selectedCat === val?.index
                ? Colors.primaryColors.blue
                : Colors.monochromeColors.white,
          },
        ]}>
        <Text
          style={{
            color:
              selectedCat === val?.index
                ? Colors.monochromeColors.white
                : Colors.monochromeColors.black,
          }}>
          {val.item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {Header()}
        <View style={styles.searchBox}>
          <InputText
            value={searchValue}
            onChangeText={onChangeText}
            style={styles.inputCont}
            inputStyle={styles.inputStyle}
            hint={strings.search_placeholder}
          />
          <TouchableOpacity onPress={onSearchPress} style={styles.searchBtn}>
            <Image source={searchIcon} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={{height: 55}}>
          <FlatList
            data={MOCKDATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={item => CategoryList(item)}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyView}>
              <Text>{strings.no_text}</Text>
            </View>
          )}
          ListHeaderComponent={ListHeaderComponent()}
          data={searchText.length > 0 ? searchList : movieList}
          showsHorizontalScrollIndicator={false}
          renderItem={(element: cardItemType) => (
            <Card navigation={navigation} item={element?.item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
