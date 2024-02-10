import {NavigationProp} from '@react-navigation/native';

export interface horizontalCardProps {
  navigation: NavigationProp<any>;
  listData: [];
}

type item = {
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};
export interface cardItemType {
  index: number;
  item: item;
}
