import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from './screenLinking';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={screens.Products.name} component={screens.Products.component} />
        <Tab.Screen name={screens.Cart.name} component={screens.Cart.component} />
        <Tab.Screen name={screens.Favorites.name} component={screens.Favorites.component} />
        <Tab.Screen name={screens.Profile.name} component={screens.Profile.component} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
