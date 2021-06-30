import React from 'react';
import { StyleSheet } from 'react-native';

import { useToggleOffer, useIsSelected } from '../../hooks';
import assets from '../../assets';
import palette from '../../style/palette';
import OfferCard from '../OfferCard';

const propTypes = {
  offer: OfferCard.OfferPropTypes,
};

const ListItem = ({
  offer: { id, title, description, tagIds, image, price },
}) => {
  const isSelected = useIsSelected(id);
  const { loading, toggle } = useToggleOffer(id, isSelected);

  return (
    <OfferCard bgUri={image} style={styles.offerCard}>
      <OfferCard.Title>{title}</OfferCard.Title>
      <OfferCard.Text numberOfLines={8}>{description}</OfferCard.Text>
      <OfferCard.Tags tagIds={tagIds} />
      <OfferCard.Footer>
        <OfferCard.Price>£{price}</OfferCard.Price>
        {isSelected ? (
          <OfferCard.SelectButton
            text="Unselect"
            image={assets.crossCircle}
            onPress={toggle}
            disabled={loading}
            color={palette.danger}
          />
        ) : (
          <OfferCard.SelectButton
            text="Select"
            image={assets.checkmarkCircle}
            onPress={toggle}
            disabled={loading}
            color={palette.success}
          />
        )}
      </OfferCard.Footer>
    </OfferCard>
  );
};

const styles = StyleSheet.create({
  offerCard: {
    height: 350,
    borderRadius: 4,
    overflow: 'hidden',
  },
});

ListItem.propTypes = propTypes;

export default ListItem;
