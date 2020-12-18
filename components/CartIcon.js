import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {
    useSelector
} from 'react-redux';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import {Colors} from '../services/constants';
import CustomHeaderButton from './HeaderButton';

const CartIcon = (props) => {
    const cartItems = useSelector(store => store.ShopReducer.cart.cartItems);

    return (
        <HeaderButtons
            HeaderButtonComponent = {CustomHeaderButton}
        >
        <Item 
            iconName = "md-cart"
            title    = "CART"
            onPress  = {props.onPress}    
        />
        {
            cartItems.length > 0 &&
            <View style = {styles.Quantity} >
                <Text>&nbsp;</Text>
            </View>
        }
    </HeaderButtons>
    )
}

const styles = StyleSheet.create({
    Quantity: {
        width:10,
        height:10,
        borderRadius: 9,
        backgroundColor: Colors.colorRed,
        position: 'absolute',
        top: 0,
        right: 8
    }
})

export default CartIcon;