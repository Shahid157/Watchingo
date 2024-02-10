import {NavigationProp} from '@react-navigation/native';

export interface stateType {
  MovieDataSlicer: item;
}

export interface PropsType {
  navigation: NavigationProp<any>;
}

export type item = {
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};
