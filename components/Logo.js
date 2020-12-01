import React from 'react';
import { 
    SafeAreaView,
    View,
    Text, 
    StyleSheet
} from 'react-native';

import {Colors} from '../services/constants';

const Logo = (props) => {
    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.Container}>
                <Text style = {styles.Text}>
                    Shopify
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    Text: {
        marginLeft: 5,
        fontFamily: 'Pacifico',
        fontSize: 20,
        color: Colors.colorPrimaryTheme
    }
});

export default Logo;