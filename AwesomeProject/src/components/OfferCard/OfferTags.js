import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import palette, { getTagColor } from '../../style/palette';
import { useOffersContext } from '../../context';
import Text from '../Text';

const propTypes = {
  tagIds: PropTypes.arrayOf(PropTypes.number),
};

const defaultProps = {
  tagIds: [],
};

const OfferTags = ({ tagIds }) => {
  const { tags } = useOffersContext();

  if (!tagIds.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {tagIds.map(tid => {
        const tag = tags.find(t => t.id === tid);
        return (
          <View
            key={tag.id}
            style={[
              styles.tagWrapper,
              { backgroundColor: getTagColor(tag.id) },
            ]}
          >
            <Text style={styles.tagText}>{tag.text}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 16,
    flex: 1,
  },
  tagWrapper: {
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  tagText: {
    color: palette.text.light,
  },
});

OfferTags.propTypes = propTypes;
OfferTags.defaultProps = defaultProps;

export default OfferTags;
