import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../services/constants';

const catalogue = (props, catalogue) => {
    return catalogue.map(catalogueItem => {
        let card = null;
        if(!catalogueItem.categoryId){
            card = (
                <View
                    style = {styles.category}
                    key = {catalogueItem.id}
                >
                    <Text style = {styles.categoryHeadline}>
                        {catalogueItem.title}
                    </Text>
                </View>
            )
        }else{
            card = (
                <View 
                    style = {styles.Product}
                    key   = {catalogueItem.id}
                >
                    <Image 
                        source = {{uri: catalogueItem.image}}
                        style  = {styles.ProductImage}
                    />
                    <View style = {styles.ProductDetails}>
                        <Text style = {styles.ProductText}>
                            {catalogueItem.title}
                        </Text>
                        <Text style = {{
                            ...styles.ProductText,
                            textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid',
                            fontStyle: 'italic'
                        }}>
                            $ {Math.round(catalogueItem.price + 20)}
                        </Text>
                        <Text style = {styles.ProductText}>
                            $ {catalogueItem.price}
                        </Text>
                        <View 
                            style = {styles.ButtonContainer}
                        >
                            <TouchableOpacity
                            activeOpacity = {0.8}
                            onPress = {
                            () => props.navigation.navigate ('Product', {
                            productId: catalogueItem.id,
                            productName:catalogueItem.title 
                            })
                            }
                                style = {{
                                    flexDirection: "row",
                                    borderWidth: 2,
                                    borderColor: Colors.colorPrimaryTheme,
                                    paddingVertical: 2,
                                    paddingHorizontal: 6,
                                    borderRadius: 5
                                }}
                            >
                                <Text 
                                    style = {styles.ButtonText}
                                >
                                    View Details
                                </Text>
                                <Ionicons 
                                    name  = "arrow-forward"
                                    size  = {20}
                                    color = {Colors.    colorPrimaryTheme}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
        return card;
    });
}

const styles = StyleSheet.create({
    Product: {
        backgroundColor: Colors.colorBackgroundContent,
        borderRadius: 5,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        height: 125,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: Colors.colorShadow,
        shadowOffset: {
	        width: 0,
	        height: 1,
            },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1
    },
    ProductDetails: {
        height: '100%',
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-around'
    },
    ProductText: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    },
    ProductImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: Colors.colorPrimaryTheme
    },
    categoryCard: {
        padding: 5,
        marginVertical: 10
    },
    category: {
        width: '100%',
        borderWidth: 2,
        borderColor: Colors.colorWhite,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: Colors.colorPrimaryTheme,
        elevation: 2
    },
    categoryHeadline: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: Colors.colorWhite
    },
    ButtonContainer: {
        padding: 3,
        alignItems: 'flex-end'
    },
    ButtonText: {
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    }
})

export default catalogue;