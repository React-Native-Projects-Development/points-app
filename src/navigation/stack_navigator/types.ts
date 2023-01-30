import {NavigationProp, RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductDetailsScreen: {
    createdAt: string;
    image: string;
    name: string;
    points: number;
  };
};

export type ProductScreenNavigationProp = NavigationProp<RootStackParamList>;
export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
