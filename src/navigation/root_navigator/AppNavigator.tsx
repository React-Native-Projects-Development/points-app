import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StackNavigator} from '../stack_navigator/StackNavigator';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
