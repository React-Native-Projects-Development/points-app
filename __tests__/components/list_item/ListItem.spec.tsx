import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';
import {beforeEach, describe, expect, it, jest} from '@jest/globals';

import {ListItem} from '../../../src/components/list_item/ListItem';
import {Product} from '../../../src/interfaces/product';

describe('<ListItem />', () => {
  let item: Product;
  let onPress: () => void;

  beforeEach(() => {
    item = {
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 16434,
      image: 'https://loremflickr.com/640/480/transport',
      is_redemption: false,
      id: '1',
    };

    onPress = jest.fn();
  });

  it('should render correctly', () => {
    render(<ListItem item={item} onPress={onPress} />);

    expect(screen.getByText('Handmade Metal Shoes')).toBeVisible();
  });

  it('should press on tap', async () => {
    render(<ListItem item={item} onPress={onPress} />);

    const button = screen.getByText('Handmade Metal Shoes');

    fireEvent(button, 'press');

    expect(onPress).toHaveBeenCalled();
  });
});
