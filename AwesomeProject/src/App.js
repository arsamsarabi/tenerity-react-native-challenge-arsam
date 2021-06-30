import React from 'react';

import AppNavigator from './navigation';
import AppProvider from './utils/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
