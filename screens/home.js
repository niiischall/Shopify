import React, { useState } from 'react';
import { 
    SafeAreaView,
    ScrollView,
    FlatList,
    TouchableOpacity,
    View,
    Image,
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
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../services/constants';
import Logo from '../components/Logo';
import CustomInput from '../components/Input';
import CustomHeaderButton from '../components/HeaderButton';


const Home = (props) => {
    const [searchedProduct, onSearching] = useState('');

    const categories = useSelector(store => store.ShopReducer.categories);
    const products = useSelector(store => store.ShopReducer.products);

    const categoryOvals = categories.map((category) => {
        return (
            <View style = {styles.categoryOval}>
                <Image 
                    source = {{uri: category.image}}
                    style  = {styles.Image}
                />
            </View>
        )
    });

    const productCards = (product) => {
        return(
            <View style = {styles.Product}>
                <Text>&nbsp;</Text>
            </View>
        )
    }

    const categoryCards = (category) => {
        const selectedProducts = products.filter(product => product.categoryId.includes(category.item.id));
        return(
            <View 
                style = {styles.categoryCard}
                key   = {category.id}
            >
                <View
                    style = {styles.category}
                >
                    <Text style = {styles.categoryHeadline}>
                        {category.item.title}
                    </Text>
                </View>
                <FlatList
                    data  = {selectedProducts}
                    keyExtractor = {(item) => item.id}
                    renderItem = {productCards}
                    showsVerticalScrollIndicator = {false}
                />
            </View>
        )
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.Container}>
                <View style = {styles.searchBar}>
                    <CustomInput 
                        onChange    = {onSearching}
                        value       = {searchedProduct}
                        placeholder = "Search for products..."
                    />
                    <TouchableOpacity 
                        activeOpacity = {0.7}
                        style = {styles.searchButton}
                        onPress = {() => console.log("SEARCH")}
                    >
                        <Ionicons 
                            name  = "md-search"
                            size  = {24}
                            color = {Colors.colorPrimaryTheme}
                        />
                    </TouchableOpacity>
                </View>
                <View style = {{flex: 1, width: '100%'}}>
                    <View 
                        style = {styles.TopCategoriesContainer}
                    >
                        <View
                            style = {styles.TopCategory}
                        >
                            <Text style = {styles.categoryText}>
                                Top Categories
                            </Text>
                        </View>
                        <ScrollView 
                            horizontal = {true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {categoryOvals}
                        </ScrollView>
                    </View>
                    <FlatList 
                        style = {styles.CategoryList}
                        data  = {categories}
                        keyExtractor = {(item) => item.id}
                        renderItem = {categoryCards}
                        showsVerticalScrollIndicator = {false}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

Home.navigationOptions = (navData) => {
    return {
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerTitle: () => <Logo />,
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
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorWhite
    },
    searchBar: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        height: 40,
        width: '10%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorBackgroundContent
    },
    TopCategoriesContainer: {
        height: 150
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    TopCategory: {
        padding: 5,
        marginHorizontal: 5
    },
    categoryOval: {
        backgroundColor: Colors.colorBackgroundContent,
        width: 100,
        height: 100,
        borderRadius:50,
        borderWidth: 3,
        borderColor: Colors.colorPrimaryTheme,
        marginHorizontal: 5,
        overflow: 'hidden'
    },
    CategoryList: {
        width: '100%',
        paddingHorizontal: 5
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
    categoryText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: Colors.colorPrimaryTheme
    },
    categoryHeadline: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: Colors.colorWhite
    },
    Product: {
        backgroundColor: Colors.colorBackgroundContent,
        marginVertical: 10,
        borderRadius: 5,
        padding: 5,
        height: 125
    }
});

export default Home;
