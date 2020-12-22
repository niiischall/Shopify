import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Button from './Button';

import {Colors} from '../services/constants';

const ProfileConfirmation = (props) => {
    return(
        <View style = {styles.Container}>
            <Image 
                source = {require('../assets/confirm-order.png')}
                style  = {styles.Image}
            />
            <View style = {styles.TextContainer}>
                <Text style = {styles.heading}>
                    You're in!
                </Text>
                <Text style = {styles.subheading}>
                    We're so glad you're here.
                </Text>
            </View>
            <Button 
                title = "Go to shop"
                onPress = {() => {
                    props.navigation.navigate('Home')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: 275,
        height: 175
    },
    TextContainer: {
        width:'100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        marginBottom: 5,
        color: Colors.colorPrimaryTheme
    },
    subheading: {
        fontFamily: 'Roboto',
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.colorHeadingText
    }
})

export default ProfileConfirmation;