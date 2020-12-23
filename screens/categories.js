import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { 
    SafeAreaView,
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import Category from '../components/Category';
import {Colors} from '../services/constants';
import CartIcon from '../components/CartIcon';
import CustomInput from '../components/Input';
import CustomHeaderButton from '../components/HeaderButton';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Categories = (props) => {
    const fetchedCategories = useSelector(store => store.ShopReducer.categories);

    const [categories, setCategories] = useState([]);
    const [searchedCategory, onSearching] = useState('');

    useEffect(() => {
        setCategories(fetchedCategories);
    }, []);

    useEffect(() => {
        const filteredCategories = fetchedCategories.filter(category => category.title.includes(searchedCategory));
        setCategories(filteredCategories);
    }, [searchedCategory]);

    const searchHandler = (query) => {
        onSearching(query);
    }

    const CategoryItem = (itemData) => {
        return <Category 
            itemData = {itemData}
            onClick  = {
                () => props.navigation.navigate('Category', {
                    categoryId: itemData.item.id,
                    categoryName: itemData.item.title
                })
            }
        />;
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.Container}>
                <View style = {styles.searchBar}>
                    <CustomInput 
                        onChange    = {searchHandler}
                        value       = {searchedCategory}
                        placeholder = "Search for categories..."
                    />
                    <Ionicons 
                        name  = "md-search"
                        size  = {24}
                        color = {Colors.colorPrimaryTheme}
                    />
                </View>
                <FlatList 
                    data         = {categories}
                    numColumns   = {2}
                    renderItem   = {CategoryItem}
                    keyExtractor = {(item) => item.id}
                    style        = {{width: '100%'}}
                    showsVerticalScrollIndicator = {false}
                />
            </View>
        </SafeAreaView>
    )
}

Categories.navigationOptions = (navData) => {
    return {
        headerTitleStyle: {
            alignSelf: 'left'
        },
        headerTitle: () => (
            <Text style = {styles.heading}>
                Listed Categories
            </Text>
        ),
        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent = {CustomHeaderButton}
            >
                <Item 
                    iconName = "ios-menu"
                    title    = "DRAWER"
                    onPress  = {() => navData.navigation.toggleDrawer()
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
    Container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.colorWhite
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    searchBar: {
        width: '100%',
        height: 50,
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
    }
});

export default Categories;
