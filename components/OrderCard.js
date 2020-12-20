import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {Colors} from '../services/constants';

const OrderCard = (props) => {

    const [detailsMode, setDetailsMode] = useState(false);

    const toggleDetailMode = () => {
        setDetailsMode(detailsModeState => !detailsModeState);
    }

    return(
        <View style = {styles.Container}>
            <View style = {styles.BillContainer}>
                <View style = {styles.BillComponent}>
                    <Text style = {styles.BillText}>
                        Purchased On: 
                    </Text>
                    <Text style = {styles.BillText}>
                        {props.orderDetails.details.dateOfPurchase}
                    </Text>
                </View>
                <View style = {styles.BillComponent}>
                    <Text style = {styles.BillText}>
                        Total Bill: 
                    </Text>
                    <Text style = {styles.BillText}>
                        ${props.orderDetails.cart.totalBill}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity = {0.8}
                style = {styles.Button}
                onPress = {toggleDetailMode}
            >
                {
                    detailsMode 
                    ? <Text style = {styles.BtnText}>
                        Hide Orders
                      </Text>
                    : <Text style = {styles.BtnText}>
                        See Orders
                      </Text>
                }
            </TouchableOpacity>
            {
                detailsMode && 
                <View style = {styles.ProductList}>
                    {
                        props.orderDetails.cart.cartItems.map(item => {
                            return(
                                <View 
                                    key = {item.id}
                                    style = {styles.ItemContainer}
                                >
                                    <Image 
                                        source = {{uri: item.image}}
                                        style = {styles.Image}
                                    />
                                    <View style = {{flex: 1}}>
                                        <Text style = {styles.itemText}>
                                            {item.title}
                                        </Text>
                                        <Text style = {styles.itemText}>
                                            $ {item.price}
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: Colors.colorHeadingText,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 5,
        borderRadius: 5,
        width: '90%',
        shadowColor: Colors.colorHeadingText,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    BillContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    BillComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 5
    },
    Button: {
        marginVertical: 10,
        width: 125,
        padding: 5,
        borderWidth: 2,
        borderColor: Colors.colorWhite,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: Colors.colorSalmon,
        shadowColor: Colors.colorHeadingText,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    BtnText: {
        color: Colors.colorWhite,
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
    BillText: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorWhite
    },
    ProductList: {
        width: '80%',
        marginVertical: 10
    },
    ItemContainer: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: Colors.colorWhite,
        marginVertical: 5,
        padding: 5,
        shadowColor: Colors.colorHeadingText,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    itemText: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    }
})

export default OrderCard;