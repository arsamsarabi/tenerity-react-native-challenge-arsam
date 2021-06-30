import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routes from './routes';
import Home from '../screens/Home';
import MyOffers from '../screens/MyOffers';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME}
      headerMode="none"
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name={routes.MY_OFFERS}
        component={MyOffers}
        options={{
          title: 'My Offers',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
