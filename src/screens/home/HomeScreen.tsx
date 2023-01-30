import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {colors} from '../../constants/colors';
import {CustomButton, ListItem} from '../../components';
import {EmptyContainer} from '../../containers/empty/EmptyContainer';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {Product} from '../../interfaces/product';
import {ProductScreenNavigationProp} from '../../navigation/stack_navigator/types';
import {useProducts} from '../../hooks';
import styles from './styles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ProductScreenNavigationProp>();

  const {
    filteredData,
    isLoading,
    selectedOption,
    setSelectedOption,
    totalPoints,
    isCalculatingPoints,
  } = useProducts();

  const onPress = (item: Product) =>
    navigation.navigate('ProductDetailsScreen', {
      createdAt: item.createdAt,
      image: item.image,
      points: item.points,
      name: item.product,
    });

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.textTitle}>Bienvenido de vuelta!</Text>
        <Text style={styles.textSubtitle}>Ruben Rodriguez</Text>
      </View>
      <Text style={styles.greyTitle}>Tus Puntos</Text>
      <View style={styles.cardContainer} testID="points-card">
        <Text style={styles.cardText}>Diciembre</Text>
        {isCalculatingPoints ? (
          <ActivityIndicator
            testID="points-loading-indicator"
            color={colors.white}
            style={styles.cardPoints}
          />
        ) : (
          <Text testID="total-points" style={styles.cardPoints}>
            {totalPoints.toLocaleString()} pts
          </Text>
        )}
      </View>
      <Text style={styles.greyTitle}>Tus Movimientos</Text>
      <View style={styles.flatlistContainer}>
        <FlatList
          testID="products-list"
          keyExtractor={item => item.id.toString()}
          data={filteredData}
          ListEmptyComponent={<EmptyContainer isLoading={isLoading} />}
          contentContainerStyle={{
            paddingVertical: verticalScale(20),
            paddingLeft: horizontalScale(10),
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ListItem item={item} onPress={() => onPress(item)} />
          )}
        />
      </View>
      <View style={styles.buttonsContainer}>
        {selectedOption !== 'all' ? (
          <CustomButton
            style={styles.btnAll}
            onPress={() => setSelectedOption('all')}>
            <Text style={styles.btnText}>Todos</Text>
          </CustomButton>
        ) : (
          <>
            <CustomButton
              style={{...styles.singleBtn, marginRight: horizontalScale(13)}}
              onPress={() => setSelectedOption('earned')}>
              <Text style={styles.btnText}>Ganados</Text>
            </CustomButton>
            <CustomButton
              style={styles.singleBtn}
              onPress={() => setSelectedOption('exchanged')}>
              <Text style={styles.btnText}>Canjeados</Text>
            </CustomButton>
          </>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
