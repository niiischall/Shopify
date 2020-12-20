import React, { useState, useEffect } from 'react';
import { 
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    View,
    Text,
    TextInput,
    Keyboard,
    Animated,
    Easing,
    Image,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';
import { Formik } from 'formik';

import {profileValidation} from '../services/validate';
import {Colors} from '../services/constants';
import CartIcon from '../components/CartIcon';
import CustomHeaderButton from '../components/HeaderButton';

const Profile = (props) => {
    const [scaling, setScaling] = useState(1);
    const imageHeight           = new Animated.Value(175);

    const [errors, setErrors]             = useState({});
    const [SubmitForm, setSubmitForm]     = useState(false);

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

    const handleKeyboardShow = (event) => {
        Animated.timing(imageHeight, {
            duration: event.duration,
            toValue: 125,
            useNativeDriver: true,
            easing: Easing.linear
        }).start();
        setScaling(0.75);
    }

    const handleKeyboardHide = (event) => {
        Animated.timing(imageHeight, {
            duration: event.duration,
            toValue: 175,
            useNativeDriver: true,
            easing: Easing.linear
        }).start();
        setScaling(1);
    }

    
    const validationHandler = (values) => {
        const errors = profileValidation(values);
        if(Object.keys(errors).length === 0)
            setSubmitForm(true);
        else if(Object.keys(errors).length > 0)
            setSubmitForm(false)
        setErrors(errors);
        return errors;
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            <KeyboardAvoidingView 
                style = {styles.Container}
                behavior='margin'
            >
            <ScrollView 
                style={{width: '100%'}}
                contentContainerStyle = {{
                    justifyContent: 'flex-start', 
                    alignItems: 'center'
                }}
                showsVerticalScrollIndicator = {false}
            >
                { 
                    <Animated.Image 
                        source={require('../assets/user-placeholder.png')} 
                        style={[
                         {
                            width: 275,
                            height: 175
                         },
                         {
                            transform: [
                              {
                                scale: scaling
                              },
                            ],
                          },
                        ]} 
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
                        validate = {validationHandler}
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
                            {
                                errors.email && 
                                <Text style = {styles.error}>
                                    *{errors.email}.
                                </Text>
                             }
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
                                secureTextEntry={true}
                            />
                            { errors.password && 
                                <Text style = {styles.error}>
                                    *{errors.password}.
                                </Text>
                            }
                            <TouchableOpacity 
                                onPress={handleSubmit} 
                                activeOpacity = {0.8}
                                style = {{
                                    ...styles.ButtonSubmit,
                                    backgroundColor: 
                                    SubmitForm 
                                    ? Colors.colorPrimaryTheme
                                    : Colors.colorHeadingText
                                }}
                                disabled = {!SubmitForm}
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
        backgroundColor: Colors.colorWhite
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    },
    AuthContainer: {
        justifyContent: 'center',
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
    },
    error: {
        alignSelf: 'flex-start',
        color: Colors.colorSalmon,
        paddingLeft: 15,
        fontSize: 14,
        fontFamily: 'Roboto-Bold'
    }
});

export default Profile;