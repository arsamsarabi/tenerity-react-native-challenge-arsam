import api from './api';

const MY_USER_ID = 1;

export const getMyUser = async () => await api.get(`/users/${MY_USER_ID}`);

export const selectOffer = async (offerId, user) =>
  await api.put(`/users/${user.id}`, {
    ...user,
    selectedOffers: [...user.selectedOffers, offerId],
  });

export const deleteSelectedOffer = async (offerId, user) =>
  await api.put(`/users/${user.id}`, {
    ...user,
    selectedOffers: user.selectedOffers.filter(oid => oid !== offerId),
  });
