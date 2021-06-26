import api from './api';

export const getAllOffers = async () => await api.get('/offers');

export const getAllTags = async () => await api.get('/tags');
