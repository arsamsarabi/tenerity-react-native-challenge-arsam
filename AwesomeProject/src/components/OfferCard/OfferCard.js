import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import palette from '../../style/palette';
import OfferTitle from './OfferTitle';
import OfferText from './OfferText';
import OfferTags from './OfferTags';
import OfferFooter from './OfferFooter';
import OfferPrice from './OfferPrice';
import OfferSelectButton from './OfferSelectButton';
import OfferPropTypes from './OfferPropTypes';

const propTypes = {
  ...View.PropTypes,
  bgUri: PropTypes.string.isRequired,
};

const OfferCard = ({ bgUri, children, ...rest }) => {
  return (
    <View style={styles.offerCard} {...rest}>
      <ImageBackground source={{ uri: bgUri }} style={styles.bgImage}>
        <View style={styles.contentWrapper}>{children}</View>
        <View style={styles.overlay} />
      </ImageBackground>
    </View>
  );
};

OfferCard.propTypes = propTypes;

OfferCard.Title = OfferTitle;
OfferCard.Text = OfferText;
OfferCard.Tags = OfferTags;
OfferCard.Footer = OfferFooter;
OfferCard.Price = OfferPrice;
OfferCard.SelectButton = OfferSelectButton;
OfferCard.OfferPropTypes = OfferPropTypes;

const styles = StyleSheet.create({
  offerCard: {
    width: '90%',
    height: '100%',
    borderRadius: 5,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    zIndex: 1,
    height: '100%',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    zIndex: 0,
  },
});

export default OfferCard;
