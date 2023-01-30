import * as React from 'react';

import {beforeEach, describe, expect, jest, test} from '@jest/globals';
import {render} from '@testing-library/react-native';

import {AppNavigator} from '../../src/navigation/root_navigator/AppNavigator';

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<AppNavigator />', () => {
  let component: any;

  beforeEach(() => {
    component = render(<AppNavigator />);
  });

  test('screen renders correctly', () => {
    expect(component).toBeDefined();
  });
});
