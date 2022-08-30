import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllBreeds from './src/screens/AllBreeds/index';
import Portfolio from './src/screens/Portfolio/index';
import FotoFavourites from './src/screens/FotoFavourites/index';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllBreeds" component={AllBreeds} />
      <Stack.Screen name="Portfolio" component={Portfolio} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'AllBreeds') {
            iconName = focused ? 'md-home' : 'md-home';
          } else if (route.name === 'FotoFavourites') {
            iconName = focused ? 'md-heart' : 'md-heart';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5533EA',
        tabBarInactiveTintColor: '#BDBDBD',
      })}>
      <Tab.Screen name="AllBreeds" component={MainStack} />
      <Tab.Screen name="FotoFavourites" component={FotoFavourites} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
