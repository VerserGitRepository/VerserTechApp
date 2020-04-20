import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import {ProfileScreen} from './screens/ProfileScreen';
import {Reports} from './screens/Reports';
import {SSNLookUp} from './screens/SSNLookUp';
import {SerialNumber} from './screens/SerialNumber';
import JobDetails from './screens/JobDetails';
import {RiskAssessment} from './screens/RiskAssessment';
import {RateJob} from './screens/RateJob';
import LoginScreen from "./screens/LoginScreen";
import DrawerNavigationHolder from "./screens/DrawerNavigationHolder";

const Render = createStackNavigator({
     Login:LoginScreen,
     Drawer:DrawerNavigationHolder
 });

        ProfileScreen: {
    {


export default createAppContainer(Render);
