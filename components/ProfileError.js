import React from 'react';
import { useDispatch } from 'react-redux';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Button from './Button';
import {authLogout} from '../store/actions/actionProfile';

import {Colors} from '../services/constants';

const ProfileError = (props) => {
    const dispatch = useDispatch();
    return(
        <View style = {styles.Container}>
            <Image 
                source = {require('../assets/access-denied.png')}
                style  = {styles.Image}
            />
            <View style = {styles.TextContainer}>
                <Text style = {styles.heading}>
                    {props.error}.
                </Text>
                <Text style = {styles.subheading}>
                    That's incorrect information.
                </Text>
            </View>
            <Button 
                title = "Go Back"
                onPress = {() => dispatch(authLogout())}
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
        width: 250,
        height: 250
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
        color: Colors.colorPrimaryTheme,
        textTransform: 'capitalize'
    },
    subheading: {
        fontFamily: 'Roboto',
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.colorHeadingText
    }
})

export default ProfileError;