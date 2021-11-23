import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  DetailScreen,
  HomeScreen,
  ProfileScreen,
  StreamScreen,
} from '../screens';
import {screenName} from '../utils/constant';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={screenName.Home} component={HomeScreen} />
      <Tab.Screen name={screenName.Stream} component={StreamScreen} />
      <Tab.Screen name={screenName.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default RootNavigation;
