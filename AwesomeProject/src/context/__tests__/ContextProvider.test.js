import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import ContextProvider from '../';
import TestComponent from '../__mocks__/TestComponent';
import mockOffers from '../__mocks__/mockOffers';
import mockTags from '../__mocks__/mockTags';

describe('<ContextProvider />', () => {
  let props;

  beforeEach(() => {
    props = {
      offers: mockOffers,
      tags: mockTags,
    };
  });
  const renderComponent = () => {
    return render(
      <ContextProvider>
        <TestComponent {...props} />
      </ContextProvider>
    );
  };

  describe('User Context', () => {
    it('Should initialise with an empty array of myOffers', () => {
      const { getByTestId } = renderComponent();
      expect(() => getByTestId('my-offer-wrapper')).toThrow();
    });

    it('Should fire addOffer correctly', async () => {
      const { getByTestId, getAllByTestId } = renderComponent();

      expect(() => getByTestId('my-offer-wrapper')).toThrow();

      const setOffersButton = getByTestId('set-offers-button');
      const addOfferButton = getByTestId('add-offer-button');

      fireEvent.press(setOffersButton);
      fireEvent.press(addOfferButton);

      const allMyOffers = getAllByTestId('my-offer-wrapper');
      expect(allMyOffers).toBeDefined();
      expect(allMyOffers.length).toEqual(1);
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
