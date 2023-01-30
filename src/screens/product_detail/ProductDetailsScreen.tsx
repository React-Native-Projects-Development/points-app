import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';
import {FadeInImage} from '../../components/image/FadeInImage';
import {
  ProductScreenNavigationProp,
  RootRouteProps,
} from '../../navigation/stack_navigator/types';
import {formatDate} from '../../utils/utils';

const ProductDetailsScreen = () => {
  const navigation = useNavigation<ProductScreenNavigationProp>();
  const route = useRoute<RootRouteProps<'ProductDetailsScreen'>>();
  const {createdAt, image, points, name} = route.params;

  return (
    <ScrollView
      style={styles.scrollview}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imgContainer}>
          <FadeInImage uri={image} style={styles.img} />
        </View>
        <Text style={styles.greyText}>Detalles del producto:</Text>
        <Text style={styles.descriptionText}>
          Comprado el {formatDate(createdAt)}
        </Text>
        <Text style={styles.pointsDescriptionText}>
          Con esta compra acumulaste:
        </Text>
        <Text style={styles.pointsText}>{points.toLocaleString()} puntos</Text>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
          style={styles.btn}>
          <Text style={styles.btnText}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
