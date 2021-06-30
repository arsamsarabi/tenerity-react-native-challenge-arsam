import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useTotalAmount } from '../../hooks';
import palette from '../../style/palette';
import Text from '../Text';

const OffersListHeader = () => {
  const totalAmount = useTotalAmount();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Offers</Text>
      <Text style={styles.amount}>Total amount: £{totalAmount || ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: palette.primary,
  },
  amount: {},
});

export default OffersListHeader;
