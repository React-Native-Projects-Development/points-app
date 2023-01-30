import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';

import {colors} from '../../constants/colors';
import {useAnimation} from '../../hooks/useAnimation';

import styles from './styles';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
export const FadeInImage = ({uri, style, resizeMode = 'cover'}: Props) => {
  const {opacity, fadeIn} = useAnimation();

  const [isLoading, setisLoading] = useState(true);

  const onFinishLoading = () => {
    setisLoading(false);
    fadeIn();
  };

  return (
    <View style={styles.loadingContainer}>
      {isLoading && (
        <ActivityIndicator
          style={styles.indicator}
          color={colors.primary}
          size={30}
        />
      )}
      <Animated.Image
        resizeMode={resizeMode}
        accessibilityLabel="image"
        source={uri ? {uri} : require('../../../assets/img/no-image.png')}
        onLoadEnd={onFinishLoading}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};
