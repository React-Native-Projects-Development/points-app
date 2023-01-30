import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

import styles from './styles';

type Props = {
  children: any;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const CustomButton: React.FC<Props> = ({children, onPress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.btnContainer, style]}>
      {children}
    </TouchableOpacity>
  );
};
