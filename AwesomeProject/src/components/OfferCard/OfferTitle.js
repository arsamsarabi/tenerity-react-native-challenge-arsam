import React from 'react';
import { Text, StyleSheet } from 'react-native';

import palette from '../../style/palette';
import AppText from '../Text';

const OfferTitle = ({ children, ...rest }) => {
  return (
    <AppText style={styles.title} {...rest}>
      {children}
    </AppText>
  );
};

const styles = StyleSheet.create({
  title: {
    color: palette.text.light,
    fontSize: 22,
    marginBottom: 16,
    alignSelf: 'center',
    fontWeight: '700',
  },
});

OfferTitle.propTypes = Text.PropTypes;

export default OfferTitle;
