//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors } from '../../theme/colors';
interface TextInputType {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

// create a component
const IrisTextInput: React.FC<TextInputType> = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            underlineColorAndroid="transparent"
            placeholder={placeholder}
            style={styles.textinput}
            value={value}
            onChangeText={onChangeText} />
    );
};

// define your styles
const styles = StyleSheet.create({
    textinput: {
        width: '100%',
        height: 50,
        marginVertical: 8,
        borderRadius: 26,
        paddingHorizontal: 20,
        backgroundColor: Colors.inputBackground,
        color: Colors.placeholder,


    },
});

//make this component available to the app
export default IrisTextInput;
