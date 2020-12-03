import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Platform
} from 'react-native';

import {Colors} from '../services/constants';

const Category = (props) => {
    let Component = TouchableOpacity;

    if(Platform.OS === 'android'){
        Component = TouchableNativeFeedback;
    }

    return(
        <View style = {styles.CategoryTile}>
            <Component 
                activeOpacity = {0.8}
                onPress       = {props.onClick}
                style         = {{flex: 1}}
            >
                <ImageBackground
                    source = {{uri: props.itemData.item.image}}
                    style  = {styles.Image}
                >
                    <View style = {styles.TextContainer}>
                        <Text style = {styles.Text}>
                            {props.itemData.item.title}
                        </Text>
                    </View>
                </ImageBackground>
            </Component>
        </View>
    )
}

const styles = StyleSheet.create({
    CategoryTile: {
        padding: 0,
        flex: 1,    
        height: 200,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        overflow: 'hidden',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 4.65,
        shadowColor: Colors.shadowColor,
        shadowOpacity: 0.29,
        elevation: 5 
    },
    Image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: Colors.colorShadow
    },
    TextContainer: {
        backgroundColor: Colors.colorPrimaryTheme,
        padding: 5
    },
    Text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: Colors.colorWhite
    }
});

export default Category;