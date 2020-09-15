import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransaction from './screens/fb';
import searchScreen from './screens/insta';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends Component {
  render(){


  return (
    <Appcontainer></Appcontainer>
  );
}
}
const TabNavigator =createBottomTabNavigator({
  facebook:{screen:BookTransaction},
  sinstagram:{screen:searchScreen}
})
const Appcontainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
