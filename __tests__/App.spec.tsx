import React from 'react';

import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
  it('should render content correctly', () => {
    const component = render(<App />);

    expect(component).toBeDefined();
  });
});
