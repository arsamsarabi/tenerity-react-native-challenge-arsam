import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ContextProvider from '../context';

const AppProvider = ({ children }) => (
  <ContextProvider>
    <NavigationContainer>{children}</NavigationContainer>
  </ContextProvider>
);

export default AppProvider;
