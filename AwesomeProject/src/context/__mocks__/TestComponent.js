import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useFetchInitialData } from '../../hooks';
import { useUserContext, useOffersContext } from '../';

import offers from './mockOffers';
import tags from './mockTags';
import users from './mockUser';

const TestComponent = () => {
  const { me, addOffer, removeOffer, setMyUser } = useUserContext();
  const { setOffers, setTags, setState: setOfferState } = useOffersContext();

  const handleAddOffer = () => {
    addOffer(offers[0].id);
  };

  useEffect(() => {
    setMyUser(users[0]);
  }, []);

  return (
    <View>
      <TouchableOpacity
        testID="set-offers-button"
        onPress={() => setOffers(offers)}
      >
        Set Offers to state
      </TouchableOpacity>
      <TouchableOpacity testID="set-tags-button" onPress={() => setTags(tags)}>
        Set tags to state
      </TouchableOpacity>
      <TouchableOpacity testID="add-offer-button" onPress={handleAddOffer}>
        Add one offer to myOffers
      </TouchableOpacity>

      <View testID="my-offers-container">
        {me?.selectedOffers.length &&
          me?.selectedOffers.map(offerId => {
            return (
              <View testID="my-offer-wrapper" key={`my-offer-${offerId}`}>
                <Text>{offers.find(o => o.id === offerId).title}</Text>
              </View>
            );
          })}
      </View>

      <View testID="all-offers-container">
        {offers.length &&
          offers.map(({ id, title }) => {
            return (
              <View testID="offer-wrapper" key={`my-offer-${id}`}>
                <View testID={`offer-${id}`}>
                  <Text testID={`offer-${id}-title}`}>{title}</Text>
                </View>
              </View>
            );
          })}
      </View>

      <View testID="all-tags-container">
        {tags.length &&
          tags.map(({ id, text }) => {
            return (
              <View testID="tag-wrapper" key={`tag-${id}`}>
                <View testID={`tag-${id}`} key={`tag-${id}`}>
                  <Text testID={`tag-${id}-text}`}>{text}</Text>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default TestComponent;
