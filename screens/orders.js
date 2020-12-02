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
import CustomButton from '../components/Button';
import CustomHeaderButton from '../components/HeaderButton';

const Orders = (props) => {
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
                    title = "Back to Shopping"
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
                        () => console.log("CART")
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
        backgroundColor: Colors.colorBackgroundContent
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    Image: {
        width: 150,
        height: 180,
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
