import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async(key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    }
    catch (error) {
        console.log(error);
    }
}

export const getData = async(key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(value !== null){
        return value;
      }
    }
    catch(error){
        console.log(error);
    }
}

export const removeData = async() => {
    try {
      await AsyncStorage.removeItem('userID');
      await AsyncStorage.removeItem('IDToken');
      await AsyncStorage.removeItem('email');
    }
    catch (err) {
      console.log(err);
    }
}