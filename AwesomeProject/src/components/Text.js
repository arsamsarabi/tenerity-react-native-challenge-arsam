import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import palette from '../style/palette';

const AppText = ({ children, style, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : 'Roboto',
    fontSize: 16,
    color: palette.text.dark,
  },
});

AppText.propTypes = Text.PropTypes;

export default AppText;
