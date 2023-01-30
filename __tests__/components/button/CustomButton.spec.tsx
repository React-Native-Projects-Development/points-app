import React from 'react';
import {Text} from 'react-native';

import {fireEvent, render, screen} from '@testing-library/react-native';
import {describe, expect, it, jest} from '@jest/globals';

import {CustomButton} from '../../../src/components/button/CustomButton';

const text = 'Hello';

describe('<CustomButton />', () => {
  it('displays the passed-in children', () => {
    render(
      <CustomButton onPress={() => jest.fn()}>
        <Text>{text}</Text>
      </CustomButton>,
    );
    expect(screen.getByText('Hello')).toBeVisible();
  });

  it('should press button on tap', async () => {
    const onPress = jest.fn();

    render(
      <CustomButton onPress={onPress}>
        <Text>{text}</Text>
      </CustomButton>,
    );

    const button = screen.getByText('Hello');

    fireEvent(button, 'press');

    expect(onPress).toHaveBeenCalled();
  });
});
