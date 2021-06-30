import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { getBottomTabIcon } from '../assets';
import { Text } from '../components';
import palette from '../style/palette';

const TabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.touchable,
              isFocused ? styles.touchableFocusedStyle : null,
            ]}
            key={route.key}
          >
            <Image
              source={getBottomTabIcon(route.name)}
              style={[styles.touchableIcon]}
            />
            <Text style={styles.touchableText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    backgroundColor: palette.secondary,
  },
  touchableFocusedStyle: {
    backgroundColor: palette.primary,
  },
  touchableText: {
    color: palette.text.light,
  },
  touchableIcon: {
    width: 25,
    height: 25,
    tintColor: palette.white,
    marginBottom: 8,
  },
});

export default TabBar;
