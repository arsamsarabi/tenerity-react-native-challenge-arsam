import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

import Screen from '../Screen';

describe('<Screen />', () => {
  const renderComponent = () => {
    return render(
      <Screen>
        <View testID="test-view" />
      </Screen>
    );
  };

  it('Should render children correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('test-view')).toBeDefined();
  });
});
