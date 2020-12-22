import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as actions from '../store/actions/actionShop';
import CheckoutPlaceholder from '../components/Checkout';
import Cart from '../components/Cart';
import {getData} from '../services/asyncFunctions';
import {Colors} from '../services/constants';

const Checkout = (props) => {
    const dispatch = useDispatch();

    const [goToCheckout, setCheckoutRoute ] = useState(false);

    const cartItems = useSelector(store => store.ShopReducer.cart.cartItems);
    const cartPrice = useSelector(store => store.ShopReducer.cart.cartPrice);
    const delivery  = useSelector(store => store.ShopReducer.cart.delivery);
    const totalBill = useSelector(store => store.ShopReducer.cart.totalBill);
    const userID    = useSelector(store => store.ProfileReducer.userID);

    const deleteFromCart = (productId) => {
        dispatch(actions.deleteFromCart(productId));
    }

    useEffect(() => { 
        if(userID)
            setCheckoutRoute(true)
        else
            setCheckoutRoute(false)
    }, [userID]);

    let content = null;

    if(cartItems.length === 0){
        content = <CheckoutPlaceholder {...props}/>
    }

    if(cartItems.length > 0){
        content = (
            <Cart 
                {...props}
                items={cartItems} 
                price={cartPrice}
                delivery={delivery}
                totalBill={totalBill}
                goToCheckout={goToCheckout}
                delete={deleteFromCart} 
            />
        )
    }

    return(
    <View style={styles.Container}>
        <View style = {styles.TopBar}>
            <TouchableOpacity
                activeOpacity = {0.8}
                onPress = {
                    () => props.navigation.navigate('Shop')
                }
            >
                <Ionicons 
                    name  = "md-close"
                    size  = {24}
                    color = {Colors.colorPrimaryTheme}
                />  
            </TouchableOpacity>
        </View>
        {content}
    </View>
)}

Checkout.navigationOptions = (navData) => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        backgroundColor: Colors.colorWhite
    },
    TopBar: {
        width: '100%',
        flex: .10,
        justifyContent: 'center',
        paddingLeft: 20
    }, 
})

export default Checkout;
