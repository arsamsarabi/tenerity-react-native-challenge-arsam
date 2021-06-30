import React, { createContext, useContext, useState } from 'react';

const initialState = {
  me: null,
};

const UserContext = createContext({
  ...initialState,
});

const UserProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const value = {
    ...state,
    setMyUser: user => setState({ me: user }),
    addOffer: offerId =>
      setState({
        me: {
          ...state.me,
          selectedOffers: [...new Set([...state.me.selectedOffers, offerId])],
        },
      }),
    removeOffer: offerId =>
      setState({
        me: {
          ...state.me,
          selectedOffers: state.me.selectedOffers.filter(
            oid => oid !== offerId
          ),
        },
      }),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
export const useUserContext = () => useContext(UserContext);
