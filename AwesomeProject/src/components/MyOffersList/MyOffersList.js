import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';
import Text from '../Text';
import { useOffersContext, useUserContext } from '../../context';
import OffersListHeader from './OffersListHeader';
import palette from '../../style/palette';

const MyOffersList = () => {
  const { me } = useUserContext();
  const { offers } = useOffersContext();

  const renderOffer = ({ item, index, separators }) => {
    const offer = offers.find(o => o.id === item);
    return <ListItem offer={offer} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={me.selectedOffers}
        renderItem={renderOffer}
        ListEmptyComponent={<Text>No Offers selected :(</Text>}
        ListHeaderComponent={() => <OffersListHeader totalAmount={399.99} />}
        keyExtractor={offerId => offerId}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  separator: {
    width: '100%',
    height: 10,
  },
});

export default MyOffersList;
