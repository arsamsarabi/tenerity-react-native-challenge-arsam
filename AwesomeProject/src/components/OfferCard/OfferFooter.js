import React from 'react';
import { View, StyleSheet } from 'react-native';

const OfferFooter = ({ children, ...rest }) => {
  return (
    <View style={styles.footer} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
  },
});

OfferFooter.propTypes = View.PropTypes;

export default OfferFooter;
