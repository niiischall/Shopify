import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {Colors} from '../services/constants';

import CustomButton from './Button';

const orders = (props) => {
    return(
        <View style = {styles.Container}>
            <Image 
                source = {require('../assets/shopping-bag.png')}
                style = {styles.Image}
            />
            <Text style = {styles.headline}>
                No orders placed
            </Text>
            <Text style = {styles.subHeadline}>
                You have not ordered anything yet.
            </Text>
            <CustomButton 
                title   = "Back to Shopping"
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorWhite
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    Image: {
        width: 200,
        height: 200,
        marginBottom: 50
    },
    headline: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        marginBottom: 5,
        color: Colors.colorBlack
    },
    subHeadline: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: Colors.colorHeadingText
    }
})

export default orders;