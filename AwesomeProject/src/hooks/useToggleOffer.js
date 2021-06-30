import { useState } from 'react';

import { selectOffer, deleteSelectedOffer } from '../api';
import { useUserContext } from '../context';

export const useToggleOffer = (offerId, isSelected) => {
  const [loading, setLoading] = useState(false);
  const { me, addOffer, removeOffer } = useUserContext();

  const removeSelectOffer = async () => {
    try {
      await deleteSelectedOffer(offerId, me);
      removeOffer(offerId);
    } catch (error) {
      console.log(error);
    }
  };

  const addSelectedOffer = async () => {
    try {
      await selectOffer(offerId, me);
      addOffer(offerId);
    } catch (error) {
      console.log(error);
    }
  };

  const toggle = () => {
    setLoading(true);
    isSelected && removeSelectOffer();
    !isSelected && addSelectedOffer();
    setLoading(false);
  };

  return {
    loading,
    isSelected,
    toggle,
  };
};
