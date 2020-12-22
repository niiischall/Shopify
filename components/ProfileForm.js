import React from 'react';
import {
    TouchableOpacity,
    ScrollView,
    View,
    Text,
    TextInput,
    Animated,
    StyleSheet
} from 'react-native';
import { Formik } from 'formik';

import {Colors} from '../services/constants';

const ProfileForm = (props) => {
    return(
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
                source = { 
                    require('../assets/user-placeholder.png')
                } 
                style={[
                 {
                    width: 275,
                    height: 175
                 },
                 {
                    transform: [
                      {
                        scale: props.scaling
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
                validate = {props.validationHandler}
            >
            {
                ({ 
                    handleChange, 
                    handleBlur,
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
                        props.errors.email && 
                        <Text style = {styles.error}>
                            *{props.errors.email}.
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
                    { props.errors.password && 
                        <Text style = {styles.error}>
                            *{props.errors.password}.
                        </Text>
                    }
                    <View style = {{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent:'space-evenly',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity 
                            onPress={
                                () => props.formSubmitHandler(values, "Log In")
                            } 
                            activeOpacity = {0.8}
                            style = {{
                                ...styles.ButtonSubmit,
                                backgroundColor: 
                                props.SubmitForm 
                                ? Colors.colorPrimaryTheme
                                : Colors.colorHeadingText
                            }}
                            disabled = {!props.SubmitForm}
                        >
                            <Text 
                                style = {styles.ButtonText}
                            >
                                Log In
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={
                                () => props.formSubmitHandler(values, "Sign Up")
                            } 
                            activeOpacity = {0.8}
                            style = {{
                                ...styles.ButtonSubmit,
                                backgroundColor: 
                                props.SubmitForm 
                                ? Colors.colorPrimaryTheme
                                : Colors.colorHeadingText
                            }}
                            disabled = {!props.SubmitForm}
                        >
                            <Text 
                                style = {styles.ButtonText}
                            >
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}       
            </Formik>
        </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
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
        width: '40%',
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
})


export default ProfileForm;



