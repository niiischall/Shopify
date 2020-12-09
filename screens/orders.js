import React from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {
    NavigationActions
} from 'react-navigation';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import {Colors} from '../services/constants';
import CustomButton from '../components/Button';
import CustomHeaderButton from '../components/HeaderButton';

const Orders = (props) => {
    console.log(props.navigation);

    const backToShopping = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home'})
            ]
          });
          props.navigation.dispatch(resetAction);
    }


    return(
        <SafeAreaView style = {{flex: 1}}>
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
        </SafeAreaView>
    )
}

Orders.navigationOptions = (navData) => {
    return {
        headerTitleStyle: {
            alignSelf: 'left'
        },
        headerTitle: () => (
            <Text style = {styles.heading}>
                My Orders
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
            <HeaderButtons
                HeaderButtonComponent = {CustomHeaderButton}
            >
                <Item 
                    iconName = "md-cart"
                    title    = "CART"
                    onPress  = {
                        () => navData.navigation.navigate('Checkout')
                    }    
                />
            </HeaderButtons>
        )
    } 
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
});

export default Orders;
