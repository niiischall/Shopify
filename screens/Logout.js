import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import {authLogout} from '../store/actions/actionProfile';
import {Colors} from '../services/constants';
import Button from '../components/Button';
import CartIcon from '../components/CartIcon';
import CustomHeaderButton from '../components/HeaderButton';

const Logout = (props) => {
    const dispatch = useDispatch();

    const userID = useSelector(store => store.ProfileReducer.userID);

    const logoutHandler = () => {
        dispatch(authLogout());
        props.navigation.navigate('Shop');
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            {
                userID !== '' 
                ? <View style = {styles.Container}>
                    <Image 
                        source = {require('../assets/log-out.png')}
                        style = {styles.Image}
                    />
                    <View style = {styles.TextContainer}>
                        <Text style = {styles.heading}>
                            Confirm Your Logout.
                        </Text>
                        <Text style = {styles.subheading}>
                            "By Logging out, you won't be able to place orders/see your previous orders on Shopify."
                        </Text>
                        <Button 
                            title = "Logout"
                            onPress = {logoutHandler}
                        />
                    </View>
                 </View>
                : <View style = {styles.Container}>
                    <Image 
                        source = {require('../assets/access-denied.png')}
                        style = {styles.Image}
                    />
                    <View style = {styles.TextContainer}>
                        <Text style = {styles.heading}>
                            Login Or Sign Up.
                        </Text>
                        <Text style = {styles.subheading}>
                            "It seems you're not registered
                            at the moment. Head over to the profile section to Log In or Signing Up."
                        </Text>
                        <Button 
                            title = "Login/Sign Up"
                            onPress = {() => props.navigation.navigate('Profile')}
                        />
                    </View>
                  </View>
            }
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
        width: '75%',
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'center',
        color: Colors.colorHeadingText
    }
});

export default Logout;