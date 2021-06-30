import React from 'react';
import { Text, StyleSheet } from 'react-native';

import palette from '../../style/palette';
import AppText from '../Text';

const OfferPrice = ({ children, ...rest }) => {
  return (
    <AppText style={styles.text} {...rest}>
      {children}
    </AppText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: palette.text.light,
    fontSize: 24,
    fontWeight: '700',
  },
});

OfferPrice.propTypes = Text.PropTypes;

export default OfferPrice;
