import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import {ProfileScreen} from './ProfileScreen';
import ProfileScreenTabbedContainer from './ProfileScreenTabbedContainer';

const ProfileScreenStackNavigator = createStackNavigator({
     Profile:ProfileScreen,
     ProfileTab:ProfileScreenTabbedContainer
 },
 
 {
    initialRouteName:'ProfileTab',
 // headerMode: 'none',
  navigationOptions: {
  //  headerVisible: false,
  }
 });

       


export default createAppContainer(ProfileScreenStackNavigator);