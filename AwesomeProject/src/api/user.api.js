import api from './api';

export const getMyOffers = async () => await api.get('/myOffers');
