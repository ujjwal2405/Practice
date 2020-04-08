import  React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Components/Home'
import MyCart from './Components/MyCart';
import Camera from './Components/Camera'
import Account from './Components/Account'
import Test from "./Components/Test"


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'MyCart') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        ;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Cart" component={MyCart} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Test" component={Test} />
    
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