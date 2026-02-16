//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';

// create a component
const Fab = ({ onPress = () => { } }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={{fontSize:33,color: Colors.whiteText}}>+</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        right: 20,
        bottom: 90,
        backgroundColor: Colors.primaryDark,
        borderRadius: '100%',
        height:60,width:60,
        justifyContent:'center',
        alignItems:'center'
    },
});

//make this component available to the app
export default Fab;
