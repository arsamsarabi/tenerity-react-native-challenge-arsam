import React, { createContext, useContext, useState } from 'react';

const initialState = {
  offers: [],
  tags: [],
};

const OffersContext = createContext({
  ...initialState,
});

const OffersProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const value = {
    ...state,
    setState: newState => setState({ ...state, ...newState }),
    setOffers: newOffers => setState({ ...state, offers: newOffers }),
    setTags: newTags => setState({ ...state, tags: newTags }),
  };

  return (
    <OffersContext.Provider value={value}>{children}</OffersContext.Provider>
  );
};

export default OffersProvider;
export const useOffersContext = () => useContext(OffersContext);
