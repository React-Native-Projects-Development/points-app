import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/home/HomeScreen';
import ProductDetailsScreen from '../../screens/product_detail/ProductDetailsScreen';

import {RootStackParamList} from './types';

import {colors} from '../../constants/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.background},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};
