import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import ProfileScreen from './ProfileScreen';
import {Reports} from './Reports';
import {SSNLookUp} from './SSNLookUp';
import {SerialNumber} from './SerialNumber';
import JobDetails from './JobDetails';
import {RiskAssessment} from './RiskAssessment';
import {RateJob} from './RateJob';
import ProfileScreenTabbedContainer from './ProfileScreenTabbedContainer';


import SideBar from "../components/SideBar";
const DrawerNavigator = createDrawerNavigator(
    {
        Jobs: {
            screen: ProfileScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Feather name="code" size={16} color={tintColor} />
            }
        },
        Reports: {
            screen: Reports,
            navigationOptions: {
                title: "Reports",
                drawerIcon: ({ tintColor }) => <Feather name="clipboard" size={16} color={tintColor} />
            }
        },
        SSNLookUp: {
            screen: SSNLookUp,
            navigationOptions: {
                title:"SSNLookUp",
                drawerIcon: ({ tintColor }) => <Feather name="search" size={16} color={tintColor} />
            }
        },
        SerialNumber: {
            screen: SerialNumber,
            navigationOptions: {
                title: "SerialNo",
                drawerIcon: ({ tintColor }) => <Feather name="list" size={16} color={tintColor} />
            }
        },
        JobDetails: {
            screen: JobDetails,
            navigationOptions: {
                title: "Jobs",
                drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={16} color={tintColor} />
            }
        },
        RiskAssessment: {
            screen: RiskAssessment,
            navigationOptions: {
                title: "RiskAssessment",
                drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />
            }
        },
        RateJob: {
            screen: RateJob,
            navigationOptions: {
                title: "Sign Out",
                drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
            }
        }
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
    }
);

export default createAppContainer(DrawerNavigator);
