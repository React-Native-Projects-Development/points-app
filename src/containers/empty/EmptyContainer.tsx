import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import styles from './styles';

import {colors} from '../../constants/colors';

type Props = {
  isLoading: boolean;
};

export const EmptyContainer: React.FC<Props> = ({isLoading}) => {
  return isLoading ? (
    <View style={styles.center}>
      <ActivityIndicator
        testID="loading-indicator"
        size={50}
        color={colors.primary}
      />
    </View>
  ) : (
    <View testID="no-results" style={styles.center}>
      <Text>No data to display</Text>
    </View>
  );
};
