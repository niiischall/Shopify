import React from 'react';
import { 
    SafeAreaView,
    View,
    Text, 
    StyleSheet
} from 'react-native';

const Items = (props) => {
    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.Container}>
                <Text style = {styles.Text}>
                    I'm the Items Page!
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Items;