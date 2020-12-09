import React from 'react';
import { 
    View,
    TextInput,
    StyleSheet 
} from 'react-native';

import {Colors} from '../services/constants';

const Input = (props) => {
  return (
    <View 
        style = {{
        ...styles.Container,
        ...props.searchContainerStyle, 
    }}>
        <TextInput
            style = {{
                ...styles.Input,
                ...props.searchStyle
            }}
            onChangeText = {text => props.onChange(text)}
            value = {props.value}
            placeholder = {props.placeholder}
            placeholderTextColor = {Colors.colorPrimaryTheme}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    Container: {
        width: '85%',
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Input: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: Colors.colorBackgroundContent,
        height: 40, 
        padding: 10,
        fontSize: 16,
        textDecorationLine: 'none',
        color: Colors.colorPrimaryTheme,
        fontFamily: 'Roboto-Bold'
    }
})

export default Input;