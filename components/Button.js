import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

import {Colors} from '../services/constants';

const Button = (props) => {

    let CustomButton = TouchableOpacity;

    if(Platform.OS === 'android'){
        CustomButton = TouchableNativeFeedback;
    }

    return(
        <View style = {{
            ...styles.ButtonContainer,
            ...props.ButtonContainerStyle
        }}>
            <CustomButton 
                activeOpacity = {0.8}
                onPress       = {props.onPress}
            >
                <View 
                    style = {{
                        ...styles.Button,
                        ...props.ButtonContainer
                    }}
                >
                    <Text style = {{
                        ...styles.ButtonText,
                        ...props.ButtonText
                    }}>
                        {props.title}
                    </Text>
                </View>
            </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonContainer: {
        marginTop: 40,
        borderRadius: 5,
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
    Button: {
        paddingVertical: 10,
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorPrimaryTheme
    },
    ButtonText: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorWhite
    }
});

export default Button;