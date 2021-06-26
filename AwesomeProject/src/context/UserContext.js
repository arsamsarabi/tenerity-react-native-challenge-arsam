import React, { createContext, useContext, useState } from 'react';

const initialState = {
  myOffers: [],
};

const UserContext = createContext({
  ...initialState,
});

const UserProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const value = {
    ...state,
    setState: newState => setState({ ...state, ...newState }),
    addOffer: newOffer =>
      setState({ ...state, myOffers: [...state.myOffers, newOffer] }),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
export const useUserContext = () => useContext(UserContext);
