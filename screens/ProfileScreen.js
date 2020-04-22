import React from 'react';
import {View,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';
import Screen from './Screen';
import ProfileScreenTabbedContainer from './ProfileScreenTabbedContainer';
import { FontAwesome5 } from "@expo/vector-icons";

const ProfileScreen =({navigation}) => {
    
        return (
            <View style={styles.container}>
            
                <SafeAreaView style={{ flex: 1 }}>
                
                    <TouchableOpacity
                        style={{ alignItems: "flex-end", margin: 16 }}
                        onPress={navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                       
                    </View>
                </SafeAreaView>
            </View>
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
});
export default ProfileScreen;





 