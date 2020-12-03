import React from 'react';
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
import CustomHeaderButton from '../components/HeaderButton';

const Categories = (props) => {
    const categories = useSelector(store => store.ShopReducer.categories);

    const CategoryItem = (itemData) => {
        return <Category 
            itemData = {itemData}
            onClick  = {() => console.log("CATEGORY")}
        />;
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.Container}>
                <View style = {styles.searchBar}>
                    <Text>&nbsp;</Text>
                </View>
                <FlatList 
                    data         = {categories}
                    numColumns   = {2}
                    renderItem   = {CategoryItem}
                    keyExtractor = {(item) => item.id}
                    style        = {{width: '100%'}}
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
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.colorBackgroundContent
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    searchBar: {
        width: '100%',
        height: 50
    }
});

export default Categories;
