import {NavigationProp} from '@react-navigation/native';

export interface CardProps {
  navigation: NavigationProp<any>;
  item: item;
}
type item = {
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};
