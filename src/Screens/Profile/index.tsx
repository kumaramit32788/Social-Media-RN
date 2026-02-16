//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { useDispatch } from 'react-redux';
import { removeToken } from '../../Store/Slice/authSlice';

// create a component
const Profile = () => {

    const dispatch = useDispatch()

    const handleLogout = async () => {
      try {
        // await AsyncStorage.removeItem("token");
        dispatch(removeToken())
        console.log("Token removed");
        // RootNavigator will auto switch to AuthStack
      } catch (e) {
        console.log("Error removing token", e);
      }
    };
    return (
        <View style={styles.container}>
            {/* <Text>Profile</Text> */}
            <TouchableOpacity
            style={{backgroundColor: Colors.primary, padding: 16}}
             onPress={() => handleLogout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
});

//make this component available to the app
export default Profile;
