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

export const categoryOvals = (categories) => {
    return categories.map((category) => {
        return (
            <View style = {styles.categoryOvalContainer}>
                <TouchableOpacity 
                    activeOpacity = {0.8}
                    style = {styles.categoryOval}
                    onPress = {() => console.log("Categories")}
                >
                    <Image 
                        source = {{uri: category.image}}
                        style  = {styles.Image}
                    />
                </TouchableOpacity>
                <Text style = {styles.categoryOvalText}>        
                    {category.title}
                </Text>
            </View>
        )
    })
}

export const categoryCards = (catalogue) => {
    let card = null;

    if(!catalogue.item.categoryId){
        card = (
            <View
                style = {styles.category}
                key = {catalogue.item.id}
            >
                <Text style = {styles.categoryHeadline}>
                    {catalogue.item.title}
                </Text>
            </View>
        )
    }else{
        card = (
            <View 
                style = {styles.Product}
                key   = {catalogue.item.id}
            >
                <Image 
                    source = {{uri: catalogue.item.image}}
                    style  = {styles.ProductImage}
                />
                <View style = {styles.ProductDetails}>
                    <Text style = {styles.ProductText}>
                        {catalogue.item.title}
                    </Text>
                    <Text style = {styles.ProductText}>
                        $ {catalogue.item.price}
                    </Text>
                    <View 
                        style = {styles.ButtonContainer}
                    >
                        <TouchableOpacity
                            activeOpacity = {0.8}
                            onPress = {() => console.log("PRODUCT DETAILS")}
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


    return(
        <View 
            style = {styles.categoryCard}
            key   = {Math.random()}
        >
            {card}
        </View>
    )
}

const styles = StyleSheet.create({
    categoryOvalContainer: {
        alignItems: 'center',
        paddingVertical: 3
    },
    categoryOval: {
        backgroundColor: Colors.colorBackgroundContent,
        width: 100,
        height: 100,
        borderRadius:50,
        borderWidth: 3,
        borderColor: Colors.colorPrimaryTheme,
        marginHorizontal: 5,
        marginBottom: 3,
        overflow: 'hidden'
    },
    categoryOvalText: {
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    Product: {
        backgroundColor: Colors.colorBackgroundContent,
        borderRadius: 5,
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
        elevation: 2
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
        backgroundColor: Colors.colorPrimaryTheme
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