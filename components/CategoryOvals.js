import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {Colors} from '../services/constants';

const categoryOvals = (props) => {
    return props.categories.map((category) => {
        return (
            <View style = {styles.categoryOvalContainer}>
                <TouchableOpacity 
                    activeOpacity = {0.8}
                    style = {styles.categoryOval}
                    onPress = {() => props.onClick(category)}
                >
                    <Image 
                        source = {{uri: category.image}}
                        style  = {styles.Image}
                    />
                </TouchableOpacity>
                <Text style = {styles.categoryOvalText}>        
                    {category.title}
                </Text>
            </View>
        )
    })
}

const styles = StyleSheet.create({
    categoryOvalContainer: {
        alignItems: 'center',
        paddingVertical: 3
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    categoryOvalText: {
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme
    },
    categoryOval: {
        backgroundColor: Colors.colorBackgroundContent,
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: Colors.colorPrimaryTheme,
        marginHorizontal: 5,
        marginBottom: 3,
        overflow: 'hidden'
    }
})

export default categoryOvals;
