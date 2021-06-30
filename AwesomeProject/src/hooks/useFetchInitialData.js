import { useState, useEffect } from 'react';

import { getAllOffers, getAllTags, getMyUser } from '../api';
import { useOffersContext, useUserContext } from '../context';

export const useFetchInitialData = () => {
  const [loading, setLoadting] = useState(false);
  const { setState: setOffersState } = useOffersContext();
  const { me, setMyUser } = useUserContext();

  async function fetchData() {
    setLoadting(true);
    try {
      const offersResponse = await getAllOffers();
      const tagsResponse = await getAllTags();
      const myUserResponse = await getMyUser();

      setOffersState({
        offers: offersResponse.data,
        tags: tagsResponse.data,
      });
      setMyUser(myUserResponse.data);
    } catch (error) {
      console.log(error);
    }
    setLoadting(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return loading;
};
