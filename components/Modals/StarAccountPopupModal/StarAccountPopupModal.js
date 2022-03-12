import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './StarAccountPopupModalStyles';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';

const StarAccountPopupModal = ({ visible, popupDetail, handleClose, handleContinue }) => {

    const [text, setText] = useState(null);

    return (
        <Modal
            animationType="slide"
            style={{ bottom: 22 }}
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={{ backgroundColor: "black", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderWidth: 1, borderColor: 'white', overflow: "hidden" }}>
                    <View style={{ alignItems: 'flex-end', left: 10 }}>
                        <TouchableOpacity onPress={() => handleClose()}>
                            < Animatable.Image
                                animation="bounceIn"
                                duraton="1500"
                                source={require('../../../assets/closeGrey.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalView}>
                        <Text style={popupDetail && popupDetail.text1 ? popupDetail.text1.style : ''}>{popupDetail && popupDetail.text1 ? popupDetail.text1.text : ''}</Text>
                        <Text style={popupDetail && popupDetail.text2 ? popupDetail.text2.style : ''}>{popupDetail && popupDetail.text2 ? popupDetail.text2.text : ''}</Text>
                        {
                            popupDetail && popupDetail.input ?
                                <TextInput
                                    placeholder="Your Username"
                                    placeholderTextColor="#666666"
                                    style={{
                                        paddingLeft: '2.5%',
                                        color: '#ffff',
                                        fontSize: 20,
                                        fontFamily: 'AvenirLTStd-Book',
                                        borderBottomWidth: 1,
                                        borderColor: 'white',
                                        width: 300
                                    }}
                                    autoCapitalize="none"
                                    onChangeText={(val) => setText(val)}
                                />
                                : null
                        }
                        {
                            popupDetail && popupDetail.button &&
                            <View style={[styles.buttonView]}>
                                <TouchableOpacity
                                    style={popupDetail.button.buttonStyle ? popupDetail.button.buttonStyle : ''}
                                    onPress={() => handleContinue(text)}
                                >
                                    <Text style={popupDetail.button.textStyle ? popupDetail.button.textStyle : ''}>
                                        {popupDetail.button.text ? popupDetail.button.text : ''}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </View>
            </View>
        </Modal >
    );
};

export default StarAccountPopupModal;
