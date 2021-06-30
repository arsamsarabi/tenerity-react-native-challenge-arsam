import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ContextProvider from '../';
import TestComponent from '../__mocks__/TestComponent';
import mockOffers from '../__mocks__/mockOffers';
import mockTags from '../__mocks__/mockTags';

describe('<ContextProvider />', () => {
  const renderComponent = () => {
    return render(
      <ContextProvider>
        <TestComponent />
      </ContextProvider>
    );
  };

  describe('User Context', () => {
    it('Should fire addOffer correctly', async () => {
      const { getByTestId, getAllByTestId } = renderComponent();

      const setOffersButton = getByTestId('set-offers-button');
      const addOfferButton = getByTestId('add-offer-button');

      fireEvent.press(setOffersButton);
      fireEvent.press(addOfferButton);

      const allMyOffers = getAllByTestId('my-offer-wrapper');
      expect(allMyOffers).toBeDefined();
      expect(allMyOffers.length).toEqual(2);
    });
  });

  describe('Offers Context', () => {
    it('Should set the Offers context correctly', () => {
      const { getByTestId, getAllByTestId } = renderComponent();

      expect(() => getByTestId('offer-wrapper')).toThrow();

      const setOffersButton = getByTestId('set-offers-button');

      fireEvent.press(setOffersButton);

      const allOffers = getAllByTestId('offer-wrapper');
      expect(allOffers).toBeTruthy();
      expect(allOffers.length).toEqual(mockOffers.length);
    });
  });

  describe('Tags Context', () => {
    it('Should set the Tags context correctly', () => {
      const { getByTestId, getAllByTestId } = renderComponent();

      expect(() => getByTestId('tag-wrapper')).toThrow();

      const setTagsButton = getByTestId('set-tags-button');

      fireEvent.press(setTagsButton);

      const allTags = getAllByTestId('tag-wrapper');
      expect(allTags).toBeTruthy();
      expect(allTags.length).toEqual(mockTags.length);
    });
  });
});
