import React from 'react';
import { Text, View,Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Screen from './Screen';
import SideBar from "../components/SideBar";


const HomeScreen =  ({props}) =>  {
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Screen/>
        <Text>Home!</Text>
      </View>
    );
  }


  const SettingsScreen =  ({props}) => {
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Screen/>
        <Text>Settings!</Text>
      </View>
    );
  }


const ProfileScreenTabbedContainer = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
},
{
    contentComponent: props => <SideBar {...props} />,

    drawerWidth: Dimensions.get("window").width * 0.85,
    hideStatusBar: true,

    contentOptions: {
        activeBackgroundColor: "rgba(212,118,207, 0.2)",
        activeTintColor: "#53115B",
        itemsContainerStyle: {
            marginTop: 16,
            marginHorizontal: 8
        },
        itemStyle: {
            borderRadius: 4
        }
    }
});

export default createAppContainer(ProfileScreenTabbedContainer);