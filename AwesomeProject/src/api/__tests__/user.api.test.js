import MockAdapter from 'axios-mock-adapter';

import api from '../api';
import { getMyOffers } from '../user.api';

describe('getMyOffers', () => {
  test('Should return expected result', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onGet('/myOffers').reply(201, {
      foo: 'bar',
    });
    const response = await getMyOffers();
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(201);
    expect(response.data).toEqual({ foo: 'bar' });
  });

  test('Should return expected error', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onGet('/myOffers').reply(500);
    const response = await getMyOffers();
    expect(response.ok).toBeFalsy();
    expect(response.status).toBe(500);
    expect(response.data).toBeNull();
  });
});
