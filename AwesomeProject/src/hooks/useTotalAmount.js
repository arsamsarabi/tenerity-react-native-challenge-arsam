import { useState, useEffect } from 'react';

import { useOffersContext, useUserContext } from '../context';

export const useTotalAmount = () => {
  const [total, setTotal] = useState(false);
  const {
    me: { selectedOffers },
  } = useUserContext();
  const { offers } = useOffersContext();

  useEffect(() => {
    const amount = selectedOffers.reduce((acc, oId) => {
      const price = offers.find(o => o.id === oId).price;
      const currTotal = parseFloat(acc + price);
      return currTotal;
    }, 0);
    setTotal(amount);
  }, [selectedOffers, offers]);

  return total;
};
