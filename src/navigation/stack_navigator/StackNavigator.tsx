import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../../screens/home/HomeScreen';
import {ProductDetails} from '../../screens/product_detail/ProductDetailScreen';

import {RootStackParamList} from './types';

import {Colors} from '../../constants/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductDetailsScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.background},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetails} />
    </Stack.Navigator>
  );
};
