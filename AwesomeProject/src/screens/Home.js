import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Shine,
  Fade,
} from 'rn-placeholder';

import { Screen, Carousel, Text } from '../components';
import LogoImage from '../assets/logo.png';
import { useFetchInitialData } from '../hooks';

const Home = () => {
  const loading = useFetchInitialData();

  if (loading) {
    return (
      <Screen>
        <Text>Loading ...</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.logoWrapper} testID="logo-wrapper">
        <Image source={LogoImage} style={styles.logoImage} />
      </View>

      <View style={styles.topPlaceholderWrapper}>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </View>

      <Carousel />

      <View style={styles.bottomPlaceholderWrapper}>
        <Placeholder Animation={Shine} Left={PlaceholderMedia}>
          <PlaceholderLine />
          <PlaceholderLine width={90} />
        </Placeholder>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoImage: {
    width: 160,
    height: 55,
  },
  topPlaceholderWrapper: {
    marginTop: 16,
  },
  bottomPlaceholderWrapper: {
    marginTop: 32,
  },
});

export default Home;
