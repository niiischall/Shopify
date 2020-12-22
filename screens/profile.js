import React, { useState, useEffect } from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    Keyboard,
    Animated,
    Easing,
    KeyboardAvoidingView,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../store/actions/actionProfile';
import {profileValidation} from '../services/validate';
import {Colors} from '../services/constants';
import CartIcon from '../components/CartIcon';
import CustomHeaderButton from '../components/HeaderButton';
import ProfileError from '../components/ProfileError';
import ProfileForm from '../components/ProfileForm';
import ProfileConfirmation from '../components/ProfileConfirm';

const Profile = (props) => {
    const dispatch = useDispatch();
    const userID = useSelector(store => store.ProfileReducer.userID);
    const error = useSelector(store => store.ProfileReducer.error);
    const loading = useSelector(store => store.ProfileReducer.loading);

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

    const formSubmitHandler = (values, method) => {
        dispatch(actions.authentication(values, method));
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            <KeyboardAvoidingView 
                style = {styles.Container}
                behavior='margin'
            >
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
                    userID !== '' && 
                    <ProfileConfirmation {...props} />
                }
                {   userID === '' && error === '' &&
                    <ProfileForm 
                        scaling           = {scaling}
                        errors            = {errors}
                        SubmitForm        = {SubmitForm}
                        validationHandler = {validationHandler}
                        formSubmitHandler = {formSubmitHandler}
                    />
                } 
                {
                    userID === '' && error !== '' && <ProfileError error = {error} />
                }    
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
    Spinner: {
        backgroundColor: Colors.colorPrimaryTheme,
        marginVertical: 20,
        width: 75,
        padding: 5,
        borderRadius: 100
    }
});

export default Profile;