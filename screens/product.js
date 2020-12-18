import React, {useState, useEffect} from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import CustomButton from '../components/Button';
import CartIcon from '../components/CartIcon';
import {Colors} from '../services/constants';
import * as actions from '../store/actions/actionShop';

const Product = (props) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const productId = props.navigation.getParam('productId');
    
    const dispatch  = useDispatch();
    const Products  = useSelector(store => store.ShopReducer.products);
    const cartItems = useSelector(store => store.ShopReducer.cart.cartItems);

    let Product = Products.find(product => product.id === productId);

    useEffect(() => {
        if(Product){
            let isAddedToCart = cartItems.some(cartItem => cartItem.id === Product.id);
            setIsAddedToCart(isAddedToCart);
        }
    })

    const handleAddToCart = (productId) => {
        dispatch(actions.addToCart(productId));
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.Container}>
                <View style = {styles.ImageContainer}>
                    <Image 
                        source = {{uri : Product.image}}
                        style  = {styles.Image}
                    />  
                </View>
                <View style = {styles.TextContainer}>
                    <View style = {styles.HeadingContainer}>
                        <Text style = {styles.title}>
                            {Product.title}
                        </Text>
                        <Text style = {styles.price}>
                            $ {Product.price} Only
                        </Text>                    
                    </View>
                    <View style = {styles.ButtonContainer}>
                        {
                            !isAddedToCart 
                            ?<CustomButton 
                                title   = "Add to cart"
                                onPress = { () =>
                                    handleAddToCart(Product.id)
                                }
                                ButtonContainerStyle = {{
                                    marginTop: 0
                                }}
                            />
                            :<CustomButton 
                                title   = "Go to cart"
                                onPress = { () =>
                                    props.navigation.navigate('Checkout')
                                }
                                ButtonContainerStyle = {{
                                    marginTop: 0
                                }}
                                ButtonContainer = {{
                                    backgroundColor: Colors.colorHeadingText
                                }}
                            />
                        }
                    </View>
                    <View style = {styles.DetailsContainer}>
                        <Text style = {styles.Details}>     
                            "{Product.description}"
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

Product.navigationOptions = (navData) => {
    return {
        headerTitleStyle: {
            alignSelf: 'left'
        },
        headerTitle: () => (
            <Text>
                &nbsp;
            </Text>
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
        flex: 1,
        justifyContent: 'flex-start',
        padding: 0,
        alignItems: 'center',
        backgroundColor: Colors.colorWhite
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    ImageContainer: {
        width: '100%',
        height: '40%',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: 200,
        height: 200,
        borderRadius: 5
    },
    TextContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    HeadingContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 0.30,
        width: '100%'
    },
    title: {
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    },
    price: {
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        color: Colors.colorHeadingText
    },
    ButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 0.20
    },
    DetailsContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        padding: 5,
        flex: 0.60,
        width: '100%'
    },
    Details: {
        width: '85%',
        fontSize: 16,
        color: Colors.colorHeadingText,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'italic'
    }
});

export default Product;