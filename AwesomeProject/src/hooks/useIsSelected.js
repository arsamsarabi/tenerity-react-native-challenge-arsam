import { useState, useEffect } from 'react';

import { useUserContext } from '../context';

export const useIsSelected = offerId => {
  const { me } = useUserContext();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(me.selectedOffers.some(oid => oid === offerId));
  }, [offerId, me.selectedOffers]);

  return isSelected;
};
