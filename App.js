import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <View style = {styles.Container}>
        <Ionicons 
          name  = 'cart-sharp'
          size  = {42} 
          color = {"#FFFFFF"}
        />
        <Text style = {styles.Text}>Shopify</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99cc00'
  },
  Text:{
    marginLeft: 2,
    fontSize: 40,
    fontFamily: 'Pacifico',
    letterSpacing: 2,
    color: '#FFFFFF'
  }
});

export default App;
