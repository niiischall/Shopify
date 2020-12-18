import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../services/constants';

const Contact = (props) => {
    return(
        <View style = {styles.Container}>
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
        flex: .10,
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
    }
})

export default Contact;