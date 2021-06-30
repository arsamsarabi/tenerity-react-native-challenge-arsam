import MockAdapter from 'axios-mock-adapter';

import api from '../api';
import { getMyUser, selectOffer, deleteSelectedOffer } from '../user.api';

const MOCK_OFFER_ID = 1;
const MOCK_USER = {
  id: 1,
  selectedOffers: [1, 2, 3],
};

describe('getMyUser', () => {
  test('Should return expected result', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onGet('/users/1').reply(201, {
      foo: 'bar',
    });
    const response = await getMyUser();
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(201);
    expect(response.data).toEqual({ foo: 'bar' });
  });

  test('Should return expected error', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onGet('/users/1').reply(500);
    const response = await getMyUser();
    expect(response.ok).toBeFalsy();
    expect(response.status).toBe(500);
    expect(response.data).toBeNull();
  });
});

describe('deleteSelectedOffer', () => {
  test('Should return expected result', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onPut('/users/1').reply(201, {
      foo: 'bar',
    });
    const response = await deleteSelectedOffer(MOCK_OFFER_ID, MOCK_USER);
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(201);
    expect(response.data).toEqual({ foo: 'bar' });
  });

  test('Should return expected error', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onPut('/users/1').reply(500);
    const response = await deleteSelectedOffer(MOCK_OFFER_ID, MOCK_USER);
    expect(response.ok).toBeFalsy();
    expect(response.status).toBe(500);
    expect(response.data).toBeNull();
  });
});

describe('selectOffer', () => {
  test('Should return expected result', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onPut('/users/1').reply(201, {
      foo: 'bar',
    });
    const response = await selectOffer(MOCK_OFFER_ID, MOCK_USER);
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(201);
    expect(response.data).toEqual({ foo: 'bar' });
  });

  test('Should return expected error', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onPut('/users/1').reply(500);
    const response = await selectOffer(MOCK_OFFER_ID, MOCK_USER);
    expect(response.ok).toBeFalsy();
    expect(response.status).toBe(500);
    expect(response.data).toBeNull();
  });
});
