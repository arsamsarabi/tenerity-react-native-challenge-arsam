import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import PropTypes from 'prop-types';

import Text from '../Text';
import palette from '../../style/palette';

const propTypes = {
  ...TouchableOpacity.PropTypes,
  text: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.shape({ uri: PropTypes.string }),
    PropTypes.number,
  ]).isRequired,
  color: PropTypes.string,
};

const defaultProps = {
  color: palette.primary,
};

const OfferSelectButton = ({
  text,
  image,
  onPress,
  disabled,
  color,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <View style={styles.buttonInner}>
        <Text style={[styles.text, { color }]}>{text}</Text>
        <Image source={image} style={[styles.image, { tintColor: color }]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginRight: 8,
  },
  image: {
    width: 35,
    height: 35,
  },
});

OfferSelectButton.propTypes = propTypes;
OfferSelectButton.defaultProps = defaultProps;

export default OfferSelectButton;
