import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {format} from 'date-fns'
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';

import Modal from '../components/Modal';
import {checkoutValidation} from '../services/validate';
import * as actions from "../store/actions/actionShop";
import {Colors} from '../services/constants';

const Contact = (props) => {

    const dispatch = useDispatch();
    const cart     = useSelector(store => store.ShopReducer.cart);
    const loading  = useSelector(store => store.ShopReducer.loading);
    const error  = useSelector(store => store.ShopReducer.error);
    const ordered  = useSelector(store => store.ShopReducer.ordered);
    const userID   = useSelector(store => store.ProfileReducer.userID);
    
    const [errors, setErrors]             = useState({});
    const [SubmitForm, setSubmitForm]     = useState(false);

    const goToOrders = () => {
        props.navigation.popToTop();
        props.navigation.navigate('Orders');
    }

    const goToShop = () => {
        props.navigation.popToTop();
        props.navigation.navigate('Shop');
    }

    const orderHandler = (orderDetail) => {
        const updatedOrderDetail = {
            userID: userID,
            cart: cart,
            contact: {
                ...orderDetail
            },
            dateOfPurchase: format(new Date(), 'dd/MM/yyyy')
        }
        dispatch(actions.placeOrder(updatedOrderDetail));
    }

    const validationHandler = (values) => {
        const errors = checkoutValidation(values);

        if(Object.keys(errors).length === 0)
            setSubmitForm(true);
        else if(Object.keys(errors).length > 0)
            setSubmitForm(false)
        setErrors(errors);
        return errors;
    }

    return(
        <View style = {styles.Container}>
            {   loading &&
                <View style = {styles.Spinner}>
                    <ActivityIndicator 
                        size="small" 
                        color= {Colors.colorWhite}
                        animating = {loading}
                    />
                </View>
            }
            {
                !loading && ordered &&
                <Modal 
                    modalVisible = {ordered} 
                    moveToOrders = {goToOrders}
                    moveToShop   = {goToShop}
                    error        = {error}
                />
            }
            <View style = {styles.TopBar}>
                <TouchableOpacity
                    activeOpacity = {0.8}
                    onPress = {
                        () => props.navigation.goBack()
                    }
                >
                    <Ionicons 
                        name  = "md-arrow-back"
                        size  = {24}
                        color = {Colors.colorPrimaryTheme}
                    />  
                </TouchableOpacity>
            </View>
            <View style = {styles.Content}>
                <View style = {styles.Header}>
                    <Text style = {styles.Heading}>
                        Add your address
                    </Text>
                </View> 
                <View style = {styles.formContainer}> 
                    <Formik
                        initialValues={{ 
                            name: '',
                            phone: '',
                            address: '',
                            pin: '',
                            city: '' 
                        }}
                        validate = {validationHandler}
                        onSubmit = {orderHandler}
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
                                flex: 1,
                                alignItems: 'center'
                            }}
                            >
                            <ScrollView 
                                style = {{
                                    width: '100%'
                                }}
                                contentContainerStyle = {{
                                    alignItems: 'center'
                                }}
                                showsVerticalScrollIndicator = {false}
                            >
                                <Text 
                                    style = {styles.InputLabels}
                                >
                                    Contact Details
                                </Text>
                                <TextInput
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    placeholder = "Name*"
                                    style = {styles.Input}
                                    placeholderTextColor = {Colors.colorPrimaryTheme}
                                />
                                {
                                   errors.name && 
                                   <Text style = {styles.error}>*{errors.name}.</Text>
                                }
                                <TextInput
                                    onChangeText={handleChange('phone')}
                                    onBlur={handleBlur('phone')}
                                    value={values.phone}
                                    placeholder = "Mobile No.*"
                                    style = {styles.Input}
                                    placeholderTextColor = {Colors.colorPrimaryTheme}
                                    keyboardType = "number-pad"
                                />
                                {
                                    errors.phone &&
                                    <Text style = {styles.error}>*{errors.phone}.</Text>
                                }
                                <Text 
                                    style = {styles.InputLabels}
                                >
                                    Address
                                </Text>
                                <TextInput
                                    onChangeText={handleChange('address')}
                                    onBlur={ handleBlur('address')}
                                    value={values.address}
                                    placeholder = "Complete Address*"
                                    style={styles.Input}
                                    placeholderTextColor = {Colors.colorPrimaryTheme}
                                />
                                {
                                    errors.address &&
                                    <Text style = {styles.error}>*{errors.address}.</Text>
                                }
                                <TextInput
                                    onChangeText={handleChange('pin')}
                                    onBlur={handleBlur('pin')}
                                    value={values.pin}
                                    placeholder = "PIN Code*"
                                    style = {styles.Input}
                                    placeholderTextColor = {Colors.colorPrimaryTheme}
                                    keyboardType = "number-pad"
                                />
                                {
                                    errors.pin &&
                                    <Text style = {styles.error}>*{errors.pin}.</Text>
                                }
                                <TextInput
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                    placeholder = "City*"
                                    style = {styles.Input}
                                    placeholderTextColor = {Colors.colorPrimaryTheme}
                                />
                                {
                                    errors.city &&
                                    <Text style = {styles.error}>*{errors.city}.</Text>
                                }
                            </ScrollView>
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
                                    Place your order
                                </Text>
                            </TouchableOpacity>
                        </View>
                        )
                    }
                    </Formik>
                </View>
            </View>
        </View>
    )
}

Contact.navigationOptions = (navData) => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.colorWhite
    },
    TopBar: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        paddingLeft: 20
    },
    Content: {
        flex: 1,
        width: '100%'
    },
    Header: {
        paddingVertical: 5,
        paddingLeft: 20
    },
    Heading: {
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    },
    formContainer: {
        flex: 1,
        marginVertical: 10
    },
    InputLabels: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        marginVertical: 7.5,
        color: Colors.colorHeadingText
    },  
    Input: {
        flexDirection: 'row',
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: Colors.colorBackgroundContent,
        width: '85%',
        height: 40, 
        padding: 10,
        fontSize: 16,
        textDecorationLine: 'none',
        color: Colors.colorPrimaryTheme,
        fontFamily: 'Roboto-Bold'
    },
    ButtonSubmit: {
        borderRadius: 5,
        width: '75%',
        alignItems: 'center',
        marginVertical: 5,
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
        overflow: 'hidden'
    },
    ButtonText: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorWhite
    },
    error: {
        alignSelf: 'flex-start',
        color: Colors.colorSalmon,
        paddingLeft: 40,
        fontSize: 14,
        fontFamily: 'Roboto-Bold'
    },
    Spinner: {
        position: 'absolute',
        top: '45%',
        zIndex: 1,
        backgroundColor: Colors.colorPrimaryTheme,
        marginVertical: 20,
        width: 75,
        padding: 5,
        borderRadius: 100
    }
})

export default Contact;