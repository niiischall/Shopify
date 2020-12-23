import React from 'react';
import { useDispatch } from 'react-redux';
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as actions from '../store/actions/actionShop';
import {Colors} from '../services/constants';
import CustomButton from '../components/Button';

const Cart = (props) => {
    const dispatch = useDispatch();

    const navigationHandler = () => {
        if(props.goToCheckout){
            dispatch(actions.prepareForOrder());
            props.navigation.navigate('Contact')
        } 
        else
            props.navigation.navigate('Profile')
    }

    return(
    <View style={styles.Container}>
        <View style = {styles.headlineContainer}>
            <Text style = {styles.headline}>
                Checkout
            </Text>
            <Text style = {styles.count}>
                {props.items.length}
            </Text>
        </View>
        <ScrollView 
            style = {styles.itemContainer}
            contentContainerStyle = {
                styles.itemContainerContent
            }
            showsVerticalScrollIndicator = {false}
        >
            {
                props.items.map(item => {
                    return(
                        <View 
                            key = {item.id}
                            style = {styles.ItemContainer}
                        >
                            <Image 
                                source = {{uri: item.image}}
                                style = {styles.image}
                            />
                            <View style = {styles.ItemDetail}>
                                <Text 
                                    style = {styles.itemTitle}
                                >{item.title}</Text>
                                <Text 
                                style = {styles.itemTitle}
                                >${item.price}/-</Text>
                            </View>
                            <TouchableOpacity 
                                style = {styles.IconContainer}
                                activeOpacity = {0.8}
                                onPress = {() => props.delete(item.id)}
                            >
                                <Ionicons 
                                    name = "trash"
                                    size = {22}
                                    color = {Colors.colorPrimaryTheme}
                                /> 
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
        <View style = {styles.billContainer}>
            <View style = {styles.billTextContainer}>
                <View style = {styles.BillTextView}>
                    <Text style = {styles.BillTextMain}>
                        Item Total
                    </Text>
                    <Text style = {styles.BillTextSecondary}>
                        ${props.price}
                    </Text>
                </View>
                <View style = {styles.BillTextView}>
                    <Text 
                        style = {styles.BillTextMain}
                    >
                        Delivery
                    </Text>
                    <Text style = {styles.BillTextSecondary}>
                        ${props.delivery}
                    </Text>
                </View>
                <View style = {styles.BillTextView}>
                    <Text style = {styles.BillTextMain}>
                        Grand Total
                    </Text>
                    <Text 
                        style = {styles.BillTextSecondary}
                    >
                        ${props.totalBill}
                    </Text>
                </View>
            </View>
            <CustomButton 
                title = "Place order" 
                ButtonContainerStyle = {{marginTop: 0}}
                onPress = {navigationHandler}
            />
        </View>
    </View>
)}

const styles = StyleSheet.create({
    Container: {
        flex: 1, 
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        backgroundColor: Colors.colorWhite
    },
    headlineContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 20
    },
    headline: {
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
        marginRight: 10,
        color: Colors.colorHeadingText
    },
    count: {
        backgroundColor: Colors.colorPrimaryTheme,
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: Colors.colorWhite
    },
    itemContainer: {
        width: '100%',
        paddingVertical: 10
    },
    itemContainerContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    billContainer: {
        width: "90%",
        paddingVertical: 5,
        paddingBottom: 20,
        borderTopWidth: 2,
        borderTopColor: Colors.colorBackgroundContent
    },
    billTextContainer: {
        marginVertical: 10,
    },
    BillTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    BillTextMain: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: Colors.colorHeadingText
    },
    BillTextSecondary: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorBlack
    },
    ItemContainer: {
        backgroundColor: Colors.colorBackgroundContent,
        borderRadius: 5,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 5,
        marginLeft: 5
    },
    ItemDetail: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTitle: {
        fontSize: 17,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    },
    IconContainer: {
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Cart;
