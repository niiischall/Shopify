import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView,
    ScrollView,
    FlatList,
    TouchableOpacity,
    View,
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
import {categoryCards, categoryOvals} from '../components/Home';


const Home = (props) => {
    const [homeCatalogue, setHomeCatalogue] = useState([]);
    const [searchedProduct, onSearching]    = useState('');

    const [stickyIndices, setStickyIndices] = useState([0]);

    const categories = useSelector(store => store.ShopReducer.categories);
    const products = useSelector(store => store.ShopReducer.products);

    useEffect(() => {
        if(categories){
            let fetchedHomeCatalogue = [];
            categories.forEach(category => {
                fetchedHomeCatalogue.push(category);
                let selectedProducts = products.filter(product => product.categoryId.includes(category.id));
                fetchedHomeCatalogue = fetchedHomeCatalogue.concat(selectedProducts);
            });
            setHomeCatalogue(fetchedHomeCatalogue);
        }
    }, []);

    useEffect(() => {
        let arr = [];
        if(homeCatalogue.length > 0){
            homeCatalogue.forEach(obj => {
                if(!obj.categoryId){
                  arr.push(homeCatalogue.indexOf(obj));
                }
              });
            setStickyIndices(arr);
        }
    }, [homeCatalogue])

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
                <View 
                    style = {{flex: 1, width: '100%'}}
                >
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
                            {categoryOvals(categories)}
                        </ScrollView>
                    </View>
                    <FlatList 
                        style = {styles.CategoryList}
                        data  = {homeCatalogue}
                        keyExtractor = {
                            (item) => item.id
                        }
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
        height: 160
    },
    TopCategory: {
        padding: 5,
        marginHorizontal: 5
    },
    CategoryList: {
        width: '100%',
        paddingHorizontal: 5
    },
    categoryText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: Colors.colorPrimaryTheme
    }
});

export default Home;
