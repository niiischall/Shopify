import React from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import {Colors} from '../services/constants';
import Button from '../components/Button';
import CartIcon from '../components/CartIcon';
import CustomHeaderButton from '../components/HeaderButton';

const Logout = (props) => {
    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.Container}>
                <Image 
                    source = {require('../assets/log-out.png')}
                    style = {styles.Image}
                />
                <View style = {styles.TextContainer}>
                    <Text style = {styles.heading}>
                       Hey, You're leaving too early..
                     </Text>
                    <Text style = {styles.subheading}>
                        We're sad to see you go.
                    </Text>
                </View>
                <Button 
                    title = "Logout"
                    onPress = {() => dispatch(authLogout())}
                />
            </View>
        </SafeAreaView>
    )
}

Logout.navigationOptions = (navData) => {
    return {
        headerTitleStyle: {
            alignSelf: 'left'
        },
        headerTitle: () => (
            <Text style = {styles.heading}>
                Logout
            </Text>
        ),
        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent = {CustomHeaderButton}
            >
                <Item 
                    iconName = "ios-menu"
                    title    = "DRAWER"
                    onPress  = {
                        () => navData.navigation.toggleDrawer()
                    }    
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <CartIcon 
                onPress  = {
                    () => navData.navigation.navigate('Checkout')
                } 
            />
        )
    } 
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
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
        height: 200
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
});

export default Logout;