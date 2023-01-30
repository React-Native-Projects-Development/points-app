import React from 'react';

import {beforeEach, describe, expect, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';

import {AppNavigator} from '../../../src/navigation/root_navigator/AppNavigator';

describe('<ProductDetailsScreen />', () => {
  beforeEach(() => {
    render(<AppNavigator />);
  });

  test('should render correctly', async () => {
    const toClick = await screen.findByText('Recycled Plastic Tuna');

    fireEvent(toClick, 'press');

    const header = await screen.findByText('Recycled Plastic Tuna');
    const body = await screen.findByText('Detalles del producto:');
    const img = await screen.findByLabelText('image');

    expect(img).toBeOnTheScreen();
    expect(header).toBeOnTheScreen();
    expect(body).toBeOnTheScreen();
  });

  test("should go back when pressing 'Aceptar' button", async () => {
    const tileBtn = await screen.findByText('Recycled Plastic Tuna');

    fireEvent(tileBtn, 'press');

    const acceptBtn = await screen.findByText('Aceptar');

    fireEvent(acceptBtn, 'press');

    const header = await screen.findByText('Bienvenido de vuelta!');
    const body = await screen.findByText('Tus Movimientos');
    const points = await screen.findByText('457,924 pts');

    expect(points).toBeOnTheScreen();
    expect(header).toBeOnTheScreen();
    expect(body).toBeOnTheScreen();
  });
});
