import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    SafeAreaView,
    ScrollView,
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import {Colors} from '../services/constants';
import {fetchOrder} from '../store/actions/actionShop';
import Logo from '../components/Logo';
import CartIcon from '../components/CartIcon';
import Button from '../components/Button';
import OrderCard from '../components/OrderCard';
import CustomHeaderButton from '../components/HeaderButton';
import OrderPlaceholder from '../components/Orders';

const Orders = (props) => {
    const dispatch = useDispatch();

    const placedOrders = useSelector(store => store.ShopReducer.orders);
    const loading = useSelector(store => store.ShopReducer.loading);
    const userID = useSelector(store => store.ProfileReducer.userID);

    useEffect(() => {
        if(userID)
            dispatch(fetchOrder());
    }, [userID]);

    let content = null;

    /*Not Logged In to see orders*/
    if(!loading && !userID){
        content = (
            <View style = {styles.CardContainer}>
                <Image 
                    source = {require('../assets/access-denied.png')}
                    style = {styles.Image}
                />
                <View style = {{alignItems: 'center'}}>
                    <Text 
                        style = {{
                            ...styles.Heading,
                            fontSize: 22,
                            color: Colors.colorSalmon
                        }}
                    >
                        We can't find your orders.
                    </Text>
                    <Text style = {styles.SubHeading}>
                        It seems you're not logged in.
                    </Text>
                </View>
                <Button 
                    title = "Login/Sign Up"
                    onPress = {() => props.navigation.navigate('Profile')}
                />
            </View>
        )
    }

    /*Fetching Orders*/
    if(loading && userID){
        content = (
            <View style = {styles.CardContainer}> 
                <Text>Fetching your orders..</Text>
            </View>
        )
    }

    /*No orders are placed.*/
    if(!loading && userID && placedOrders.length === 0)
        content = <OrderPlaceholder {...props} />;

    /*Placed Orders*/
    if(!loading && userID && placedOrders.length > 0){
        content = (
        <View style = {styles.CardContainer}>
            <Text style = {styles.Heading}>
               Your previous orders
            </Text>
            <View style = {styles.HeadingLogo}>
                <Text style = {styles.Heading}>
                    on...
                </Text>
                <Logo />
            </View>
            <ScrollView 
                style = {{width: '100%'}}
                contentContainerStyle = {{
                    alignItems: 'center'
                }}
                showsVerticalScrollIndicator = {false}
            >
            {
                placedOrders.map(order => {
                    return(
                        <OrderCard 
                            key = {order.orderId} 
                            orderDetails = {order} 
                        />
                    )
                })
            }
            </ScrollView>
        </View>
    )}

    return(
        <SafeAreaView style = {{flex: 1}}>
            <ScrollView 
                style = {styles.Container}
                contentContainerStyle = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {content}
            </ScrollView>
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
            <CartIcon 
                onPress = {
                    () => navData.navigation.navigate('Checkout')
                }
            />
        )
    } 
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    Container: {
        width: '100%',
        backgroundColor: Colors.colorWhite
    },
    CardContainer: {
        width: '100%',
        paddingVertical: 20,
        backgroundColor: Colors.colorWhite,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    HeadingContainer: {
        height: 100,
        backgroundColor: Colors.colorWhite,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    Heading: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 17,
        color: Colors.colorHeadingText
    },
    HeadingLogo: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '32.5%',
    },
    Image: {
        width: 250,
        height: 250
    },
    SubHeading: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: Colors.colorHeadingText
    }
});

export default Orders;
