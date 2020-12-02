import React from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import {Colors} from '../services/constants';

import Logo from '../components/Logo';
import CustomHeaderButton from '../components/HeaderButton';

const Orders = (props) => {
    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.Container}>
                <Text>&nbsp;</Text>
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
    }
});

export default Orders;
