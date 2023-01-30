import {useRef} from 'react';

import {Animated} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    // To modify box's opacity
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
  };
};
