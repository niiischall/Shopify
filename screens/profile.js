import React, { useState, useEffect } from 'react';
import { 
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    View,
    Text,
    TextInput,
    Keyboard,
    Image,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';
import { Formik } from 'formik';

import {Colors} from '../services/constants';
import CartIcon from '../components/CartIcon';
import CustomHeaderButton from '../components/HeaderButton';

const Profile = (props) => {
    
    const [keyboardPresent, setKeyboardPresence] = useState(false);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow",
        handleKeyboardShow);
        Keyboard.addListener("keyboardDidHide",
            handleKeyboardHide);
        return (() => {
            Keyboard.removeListener("keyboardDidShow", handleKeyboardShow);
            Keyboard.removeListener("keyboardDidHide",
            handleKeyboardHide);
        })
    })

    const handleKeyboardShow = () => {
        setKeyboardPresence(true);
    }

    const handleKeyboardHide = () => {
        setKeyboardPresence(false);
    }


    return(
        <SafeAreaView style = {{flex: 1}}>
            <KeyboardAvoidingView 
                style = {styles.Container}
                behavior="margin"
            >
                <ScrollView 
                    style = {{
                        width: '100%'
                    }}
                    contentContainerStyle = {{
                        alignItems: 'center'
                    }}
                >
                { !keyboardPresent &&   
                    <Image 
                        source = {
                            require('../assets/user-placeholder.png')}
                        style = {styles.Image}
                    />
                }
                <View style = {styles.AuthContainer}>
                    <Text style = {styles.AuthHeading}>
                        Welcome to Shopify
                    </Text>
                    <Text style = {styles.AuthSubHeading}>
                       Great Products. No nonsense.
                    </Text>
                    <Formik
                        initialValues={{ 
                            email: '',
                            password: '' 
                        }}
                        onSubmit={
                            values => console.log(values)
                        }
                    >
                    {
                        ({ 
                            handleChange, 
                            handleBlur, 
                            handleSubmit, 
                            values
                        }) => (
                        <View style = {{
                            width: '100%',
                            alignItems: 'center'
                        }}>
                            <TextInput
                                onChangeText={
                                    handleChange('email')
                                }
                                onBlur={
                                    handleBlur('email')
                                }
                                value={values.email}
                                placeholder = "Email"
                                style = {
                                    styles.Input
                                }
                                placeholderTextColor = {
                                    Colors.colorPrimaryTheme
                                }
                            />
                            <TextInput
                                onChangeText={
                                    handleChange('password')
                                }
                                onBlur={
                                    handleBlur('password')
                                }
                                value={values.password}
                                placeholder = "Password"
                                style = {
                                    styles.Input
                                }
                                placeholderTextColor = {
                                    Colors.colorPrimaryTheme
                                }
                            />
                            <TouchableOpacity 
                                onPress={handleSubmit} 
                                activeOpacity = {0.8}
                                style = {styles.ButtonSubmit}
                            >
                                <Text style = {
                                    styles.ButtonText
                                }>
                                    Login/Sign Up
                                </Text>
                            </TouchableOpacity>
                      </View>
                    )}
                    </Formik>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

Profile.navigationOptions = (navData) => {
    return {
        headerTitleStyle: {
            alignSelf: 'left'
        },
        headerTitle: () => (
            <Text style = {styles.heading}>
                Profile
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
        alignItems: 'center',
        backgroundColor: Colors.colorWhite,
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    Image: {
        width: 275,
        height: 175,
        marginVertical: 20
    },
    AuthContainer: {
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center',
        padding: 2,
        width: '70%'
    },
    AuthHeading: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        marginBottom: 5,
        color: Colors.colorPrimaryTheme
    },
    AuthSubHeading: {
        fontFamily: 'Roboto',
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.colorHeadingText
    },
    searchContainer: {
        marginVertical: 5,
        width: '95%',
        marginHorizontal: 0,
        alignItems: 'center'
    },
    ButtonContainerStyle: {
        marginTop: 10
    },
    Button: {
        paddingHorizontal: 20
    },
    ButtonText: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorWhite
    },
    ButtonSubmit: {
        borderRadius: 5,
        width: '55%',
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: Colors.colorShadow,
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        overflow: 'hidden',
        backgroundColor: Colors.colorPrimaryTheme
    },
    Input: {
        flexDirection: 'row',
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: Colors.colorBackgroundContent,
        width: '95%',
        height: 40, 
        padding: 10,
        fontSize: 16,
        textDecorationLine: 'none',
        color: Colors.colorPrimaryTheme,
        fontFamily: 'Roboto-Bold'
    }
});

export default Profile;