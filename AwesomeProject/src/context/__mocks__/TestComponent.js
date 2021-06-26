import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import { useUserContext, useOffersContext } from '../';

const propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      offerType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tagIds: PropTypes.arrayOf(PropTypes.number).isRequired,
      image: PropTypes.string.isRequired,
      pirce: PropTypes.shape({
        raw: PropTypes.number.isRequired,
        symbol: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const TestComponent = props => {
  const { myOffers, addOffer, setState: setUserState } = useUserContext();
  const {
    offers,
    tags,
    setOffers,
    setTags,
    setState: setOffersState,
  } = useOffersContext();

  const handleAddOffer = () => {
    addOffer(props.offers[0].id);
  };

  return (
    <View>
      <TouchableOpacity
        testID="set-offers-button"
        onPress={() => setOffers(props.offers)}
      >
        Set Offers to state
      </TouchableOpacity>
      <TouchableOpacity
        testID="set-tags-button"
        onPress={() => setTags(props.tags)}
      >
        Set tags to state
      </TouchableOpacity>
      <TouchableOpacity testID="add-offer-button" onPress={handleAddOffer}>
        Add one offer to myOffers
      </TouchableOpacity>

      <View testID="my-offers-container">
        {myOffers.length &&
          myOffers.map(offerId => {
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

TestComponent.propTypes = propTypes;
export default TestComponent;
