import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text,
    Image,
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
                <View style = {styles.contentContainer}>
                    <Image
                        source = {{uri: props.itemData.item.image}}
                        style  = {styles.Image}
                    />
                    <View style = {styles.TextContainer}>
                        <Text style = {styles.Text}>
                            {props.itemData.item.title}
                        </Text>
                    </View>
                </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        elevation: 5
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    Image: {
        width: 150,
        height: 150,
        borderWidth: 3,
        borderRadius: 100,
        marginBottom: 5,
        borderColor: Colors.colorPrimaryTheme
    },
    TextContainer: {
        width: 150,
        alignItems: 'center',
        borderRadius: 15,
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