import React from 'react';

import OffersProvider from './OffersContext';
import UserProvider from './UserContext';

const ContextProvider = ({ children }) => {
  return (
    <OffersProvider>
      <UserProvider>{children}</UserProvider>
    </OffersProvider>
  );
};

export default ContextProvider;
