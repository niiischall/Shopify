import React, {useState} from 'react';
import {
    View,
    Modal,
    Alert,
    Text,
    StyleSheet
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../services/constants'
import Button from './Button';

const CustomModal = (props) => {
    return(
    <View style={styles.Container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Ionicons 
                name  = "md-checkmark-circle"
                size  = {42}
                color = {Colors.colorPrimaryTheme}
              />
              <Text style={styles.modalText}>
                Your Order is Successful
              </Text>
              <Text style={styles.modalSubtitleText}>
                Thank you for shopping with us.
              </Text>
              <View style = {styles.ButtonContainer}>
                <Button 
                    ButtonContainerStyle = {styles.BtnContainerOne}
                    ButtonContainer = {styles.BtnOne}
                    ButtonText = {styles.BtnText}
                    title = "Orders"
                    onPress = {props.moveToOrders}
                />
                <Button 
                    ButtonContainerStyle = {styles.BtnContainerTwo}
                    title = "Shop"
                    onPress = {props.moveToShop}
                />
              </View>
            </View>
          </View>
        </Modal>
    </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        position: 'absolute'
    },
    centeredView: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'transparent'
      },
    modalView: {
        width: 350,
        height: 200,
        margin: 20,
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        shadowColor: Colors.colorShadow,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        opacity: 1
    },
    modalText:{
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: Colors.colorBlack
    }, 
    modalSubtitleText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        marginBottom: 10,
        color: Colors.colorHeadingText
    },
    ButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    BtnContainerOne: {
        marginTop: 0,
        borderWidth: 2,
        elevation: 0,
        borderColor: Colors.colorPrimaryTheme,
    },
    BtnContainerTwo: {
        marginTop: 0,
        elevation: 0,
        borderWidth: 2,
        borderColor: Colors.colorPrimaryTheme
    },
    BtnOne: {
        backgroundColor: Colors.colorWhite,
        color: Colors.colorPrimaryTheme
    },
    BtnText: {
        color: Colors.colorPrimaryTheme
    }

})

export default CustomModal;
