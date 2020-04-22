import React from 'react';
import DrawerNavigation from "./DrawerNavigation";

const DrawerNavigationHolder =()=>{
    return (<DrawerNavigation/>);
};

DrawerNavigationHolder.navigationOptions = {
    headerTitle:"Back To Login",
    headerTitleAlign:"Center",

    headerStyle:{
        backgroundColor:"#F79435",
    },
    headerTitleStyle: {
        color: 'white'
      },
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
};
export default DrawerNavigationHolder;