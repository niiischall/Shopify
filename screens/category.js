import React from 'react';
import {useSelector} from 'react-redux';
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../services/constants';
import CartIcon from '../components/CartIcon';
import Logo from '../components/Logo';
import CustomHeaderButton from '../components/HeaderButton';

const Category = (props) => {
    const Products = useSelector(store => store.ShopReducer.products)
    const categoryName = props.navigation.getParam('categoryName');
    const categoryId = props.navigation.getParam('categoryId')

    const selectedProducts = Products.filter(product => product.categoryId.includes(categoryId));

    return(
        <SafeAreaView style = {{flex: 1}}>
            <ScrollView 
                style = {styles.Container}
                contentContainerStyle = {styles.ContainerFlex}
                showsVerticalScrollIndicator = {false}
            >
                <View style = {styles.HeadingContainer}>
                    <Text style = {styles.Heading}>
                        Get the latest in {categoryName}
                    </Text>
                    <View 
                        style = {{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            width: '46%'
                        }}
                    >
                        <Text style = {styles.Heading}>
                            only on...
                        </Text>
                        <Logo />
                    </View>
                </View>
                {
                    selectedProducts.map(product => {
                    return(
                    <View 
                        style = {styles.Product}
                        key   = {product.id}
                    >
                        <Image 
                            source = {{uri: product.image}}
                            style  = {styles.ProductImage}
                        />
                        <View style = {styles.ProductDetails}>
                            <Text 
                                style = {styles.ProductText}
                            >
                                {product.title}
                            </Text>
                            <Text 
                                style = {{
                                    ...styles.ProductText,
                                    textDecorationLine: 'line-through',
                                    textDecorationStyle: 'solid',
                                    fontStyle: 'italic',
                                    color: Colors.colorPrimaryTheme
                                }}
                            >
                                $ {
                                    Math.round(product.price + 20)
                                }
                            </Text>
                            <Text 
                                style = {styles.ProductText}
                            >
                                $ {product.price}
                            </Text>
                            <View 
                                style = {styles.ButtonContainer}
                            >
                                <TouchableOpacity
                                    activeOpacity = {0.8}
                                    onPress = {
                                        () => props.navigation.navigate ('Product', {
                                            productId: product.id,
                                            productName: product.title 
                                        })
                                    }
                                    style = {
                                        styles.ButtonBox
                                    }
                                >
                                    <Text 
                                        style = {styles.ButtonText}
                                    >
                                        View Details
                                    </Text>
                                    <Ionicons 
                                        name  = "arrow-forward"
                                        size  = {20}
                                        color = {Colors.colorPrimaryTheme}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    )
                    })
                }
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>
                        That's all folks...
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

Category.navigationOptions = (navData) => {
    const categoryName = navData.navigation.getParam('categoryName');

    return {
        headerTitleStyle: {
            alignSelf: 'left'
        },
        headerTitle: () => (
            <Text style = {styles.heading}>
                {categoryName}
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
        backgroundColor: Colors.colorWhite,
        padding: 10
    },
    HeadingContainer: {
        height: 100,
        backgroundColor: Colors.colorWhite,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Heading: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 17,
        color: Colors.colorHeadingText
    },
    Product: {
        backgroundColor: Colors.colorBackgroundContent,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        height: 150,
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
        width: 125,
        height: 125,
        borderRadius: 2,
        borderWidth: 3,
        borderColor: Colors.colorPrimaryTheme
    },
    ButtonContainer: {
        padding: 3,
        alignItems: 'flex-end'
    },
    ButtonBox: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: Colors.colorPrimaryTheme,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 3
    },
    ButtonText: {
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    footer: {
        marginVertical: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        textAlign: 'center',
        fontStyle: 'italic',
        color: Colors.colorHeadingText
    }
});

export default Category;