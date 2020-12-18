import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../services/constants';
import CustomButton from './Button';

const Checkout = (props) => {
    return(
    <View style = {styles.Content}>
        <Image 
            source = {require('../assets/empty-cart.png')}
            style  = {styles.Image}
        />
        <View style = {styles.TextContent}>
            <Text style = {styles.Heading}>
                Hey, it feels so light.
            </Text>
            <Text style = {styles.subHeading}>
                There is nothing in your cart. Let's add some items.
            </Text>
        </View>
        <CustomButton 
            title   = "Back to Shopping"
            onPress = {
                () => props.navigation.navigate('Shop')
            }
        />
    </View>
    )
}

Checkout.navigationOptions = (navData) => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: Colors.colorWhite
    },
    TopBar: {
        width: '100%',
        flex: .10,
        justifyContent: 'center',
        paddingLeft: 20
    }, 
    Content: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Image: {
        width: 200,
        height: 200,
        marginVertical: 20
    },
    TextContent: {
        padding: 5,
        alignItems: 'center'
    },
    Heading: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        marginBottom: 5,
        color: Colors.colorBlack
    },
    subHeading: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: Colors.colorHeadingText
    }
})

export default Checkout;
