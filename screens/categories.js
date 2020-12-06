import React from 'react';
import {useSelector} from 'react-redux';
import { 
    SafeAreaView,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import Category from '../components/Category';
import {Colors} from '../services/constants';
import CustomInput from '../components/Input';
import CustomHeaderButton from '../components/HeaderButton';

import Ionicons from 'react-native-vector-icons/Ionicons';

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
                    <CustomInput 
                        placeholder = "Search for categories..."
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
