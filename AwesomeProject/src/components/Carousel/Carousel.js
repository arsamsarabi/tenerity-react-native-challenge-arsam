import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { useOffersContext } from '../../context';
import palette from '../../style/palette';
import Text from '../Text';
import CarouselItem from './CarouselItem';

const windowWidth = Dimensions.get('window').width;

const AppCarousel = () => {
  const { offers } = useOffersContext();

  return (
    <View style={styles.container}>
      <Text style={styles.carouselTitle}>Exclusive Deals!</Text>

      <Carousel
        data={offers}
        renderItem={({ item, index }) => (
          <CarouselItem key={`${index}-${item.id}`} offer={item} />
        )}
        sliderWidth={windowWidth * 0.9}
        itemWidth={windowWidth * 0.9}
        containerCustomStyle={styles.sliderContainer}
        layout="stack"
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 360,
    marginTop: 16,
  },
  carouselTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: palette.primary,
  },
  sliderContainer: {
    padding: 8,
    overflow: 'hidden',
  },
});

export default AppCarousel;
