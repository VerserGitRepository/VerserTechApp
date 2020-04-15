import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";

import {
    ProfileScreen,
    Reports,
    SSNLookUp,
    SerialNumber,
    Jobs,
    RiskAssessment,
    RateJob
} from "./screens";

import SideBar from "./components/SideBar";

const DrawerNavigator = createDrawerNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
            }
        },
        Message: {
            screen: Reports,
            navigationOptions: {
                title: "Reports",
                drawerIcon: ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />
            }
        },
        Activity: {
            screen: SSNLookUp,
            navigationOptions: {
                title:"SSNLookUp",
                drawerIcon: ({ tintColor }) => <Feather name="activity" size={16} color={tintColor} />
            }
        },
        List: {
            screen: SerialNumber,
            navigationOptions: {
                title: "SerialNumber",
                drawerIcon: ({ tintColor }) => <Feather name="list" size={16} color={tintColor} />
            }
        },
        Report: {
            screen: Jobs,
            navigationOptions: {
                title: "Jobs",
                drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={16} color={tintColor} />
            }
        },
        Statistic: {
            screen: RiskAssessment,
            navigationOptions: {
                title: "RiskAssessment",
                drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />
            }
        },
        SignOut: {
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
