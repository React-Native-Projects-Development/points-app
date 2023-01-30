import React from 'react';

import {beforeEach, describe, expect, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';

import HomeScreen from '../../../src/screens/home/HomeScreen';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockedNavigate}),
}));

describe('<ProductsScreen />', () => {
  beforeEach(() => {
    render(<HomeScreen />);
  });

  test('should show points loading indicator on load', async () => {
    await screen.getByTestId('points-loading-indicator');
    expect(screen.getByTestId('points-loading-indicator')).toBeOnTheScreen();
  });

  test('should display total points after load', async () => {
    await screen.findByText('457,924 pts');
    expect(screen.getByText('457,924 pts')).toBeVisible();
  });

  test('should display loading indicator on flatlist on first load', () => {
    expect(screen.getByTestId('loading-indicator')).toBeOnTheScreen();
  });

  test('should display flatlist content after load', async () => {
    await screen.findByText('Recycled Plastic Tuna');
    expect(screen.getByText('Recycled Plastic Tuna')).toBeVisible();
  });

  test("should show buttons 'Ganados' and 'Canjeados'", async () => {
    const ganadosBtn = await screen.findByText('Ganados');
    const canjeadosBtn = await screen.findByText('Canjeados');

    expect(ganadosBtn).toBeOnTheScreen();
    expect(canjeadosBtn).toBeOnTheScreen();
  });

  test("should change to 'Todos' button when pressing on 'Ganados' button", async () => {
    const ganadosBtn = await screen.findByText('Ganados');

    fireEvent(ganadosBtn, 'press');

    expect(screen.getByText('Todos')).toBeOnTheScreen();
  });

  test("should change to 'Todos' button when pressing on 'Canjeados' button", async () => {
    const canjeadosBtn = await screen.findByText('Canjeados');

    fireEvent(canjeadosBtn, 'press');

    expect(screen.getByText('Todos')).toBeOnTheScreen();
  });

  test("should show buttons 'Ganados' and 'Canjeados' when pressing on 'All' button", async () => {
    const canjeadosBtn = await screen.findByText('Canjeados');

    fireEvent(canjeadosBtn, 'press');

    const todosBtn = await screen.findByText('Todos');

    fireEvent(todosBtn, 'press');

    expect(screen.getByText('Ganados')).toBeOnTheScreen();
    expect(screen.getByText('Canjeados')).toBeOnTheScreen();
  });
});
