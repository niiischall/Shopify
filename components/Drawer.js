import React from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../services/constants';

const Drawer = (props) => {
    const email = useSelector(store => store.ProfileReducer.email);
    const splitEmail = email.split("@");

    const navigate = (inputRoute) => {
        const navigateAction = NavigationActions.navigate({
            routeName: inputRoute
        });
        if(props.activeItemKey === inputRoute){
            props.navigation.toggleDrawer();
        }else{
            props.navigation.dispatch(navigateAction);
        }
    }


    return(
    <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.DrawerContainer}>
            <ScrollView 
                style = {styles.DrawerList}
                contentContainerStyle = {{
                    flex: 1,
                    justifyContent: 'space-between'
                }}
            >
                <View style = {styles.DrawerListItem}>
                    <View 
                        style = {
                            props.activeItemKey === 'Shop'   
                            ? styles.SelectedDrawerItem
                            : styles.DrawerItem
                        } 
                            onTouchStart = {() => navigate('Shop')}   
                    >
                        <Text 
                            style = {
                                props.activeItemKey === 'Shop'   
                                ? styles.SelectedDrawerItemText
                                : styles.DrawerItemText
                            }
                        >Shop</Text>
                    </View>
                    <View 
                        style = {
                            props.activeItemKey === 'Logout'   
                            ? styles.SelectedDrawerItem
                            : styles.DrawerItem
                        }
                        onTouchStart = {
                            () => navigate('Logout')
                        }
                    >
                        <Text 
                            style = {
                                props.activeItemKey === 'Logout'   
                                ? styles.SelectedDrawerItemText
                                : styles.DrawerItemText
                            }
                        >Logout</Text>
                    </View>
                </View>
                <View style = {styles.DrawerListItem}>
                    {
                        email !== '' &&
                        <View style = {{
                            ...styles.DrawerItem,
                            justifyContent: "center",
                            paddingBottom: 20
                        }}>
                            <Ionicons 
                                name  = "person-circle-outline"
                                size  = {50}
                                color = {Colors.colorWhite}
                            />
                            <Text 
                                style = {{
                                    ...styles.DrawerItemText,
                                    marginLeft: 10
                                }}
                            >{splitEmail[0]}</Text>
                        </View>
                    }
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    DrawerContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 83,
        backgroundColor: Colors.colorPrimaryTheme
    },
    DrawerList: {
        width: '100%'
    },
    DrawerListItem: {
        padding: 0
    },
    SelectedDrawerItem: {
        backgroundColor: Colors.colorWhite,
        padding: 15,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    DrawerItem: {
        padding: 15,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    SelectedDrawerItemText: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme,
        textTransform: 'capitalize'
    },
    DrawerItemText: {
        flexWrap: 'wrap',
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorWhite
    }
})

export default Drawer;