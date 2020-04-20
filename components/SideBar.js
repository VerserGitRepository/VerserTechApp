import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

export default SideBar = props => (
    <ScrollView>
        <ImageBackground
            source={require("../assets/background.png")}
            style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
            <Image source={require("../assets/Verserlogo.jpg")} style={styles.profile}  />
            <Text style={styles.name}>VERSER TECHAPP</Text>

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.followers}></Text>                
            </View>
        </ImageBackground>

        <View style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 135,
        height: 80,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4
    }
});
