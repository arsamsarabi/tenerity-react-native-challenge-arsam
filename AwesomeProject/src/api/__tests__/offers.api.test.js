import MockAdapter from 'axios-mock-adapter';

import api from '../api';
import { getAllOffers, getAllTags } from '../offers.api';

describe('getAllOffers', () => {
  test('Should return expected result', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onGet('/offers').reply(201, {
      foo: 'bar',
    });
    const response = await getAllOffers();
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(201);
    expect(response.data).toEqual({ foo: 'bar' });
  });

  test('Should return expected error', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onGet('/offers').reply(500);
    const response = await getAllOffers();
    expect(response.ok).toBeFalsy();
    expect(response.status).toBe(500);
    expect(response.data).toBeNull();
  });
});

describe('getAllTags', () => {
  test('Should return expected result', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onGet('/tags').reply(201, {
      foo: 'bar',
    });
    const response = await getAllTags();
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(201);
    expect(response.data).toEqual({ foo: 'bar' });
  });

  test('Should return expected error', async () => {
    const mock = new MockAdapter(api.axiosInstance);
    mock.onGet('/tags').reply(500);
    const response = await getAllTags();
    expect(response.ok).toBeFalsy();
    expect(response.status).toBe(500);
    expect(response.data).toBeNull();
  });
});
