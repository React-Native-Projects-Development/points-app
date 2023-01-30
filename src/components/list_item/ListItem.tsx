import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ChevronRight} from '../icons';
import {FadeInImage} from '../image/FadeInImage';
import {formatDate} from '../../utils/utils';
import {Product} from '../../interfaces/product';
import styles from './styles';

type Props = {
  item: Product;
  onPress: () => void;
};

const customOperatorColor = (isRedemption: boolean) =>
  isRedemption ? '#FF0000' : '#00B833';

export const ListItem: React.FC<Props> = ({item, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.listItemContainer}>
        <View style={styles.imgContainer}>
          <FadeInImage style={styles.img} uri={item.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.productNameText}>
            {item.product}
          </Text>
          <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
        </View>
        <Text style={styles.pointsText}>
          <Text
            style={{
              color: customOperatorColor(item.is_redemption),
            }}>
            {!item.is_redemption ? '+' : '-'}
          </Text>
          {item.points?.toLocaleString()}
        </Text>
        <View style={styles.iconContainer}>
          <ChevronRight />
        </View>
      </View>
    </TouchableOpacity>
  );
};
