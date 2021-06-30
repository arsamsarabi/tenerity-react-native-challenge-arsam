import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import palette from '../style/palette';

const Screen = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentWrapper}>{children}</View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.gray.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: palette.white,
    width: windowWidth * 0.95,
    height: windowHeight * 0.95 - 120,
    borderWidth: 1,
    borderColor: palette.gray.light,
    borderRadius: 16,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: -16,
  },
});

export default Screen;
