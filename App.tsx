import React from 'react';
import {StatusBar} from 'react-native';

import {AppNavigator} from './src/navigation/root_navigator/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />
      <AppNavigator />
    </>
  );
};

export default App;
