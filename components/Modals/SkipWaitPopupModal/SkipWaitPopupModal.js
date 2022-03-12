import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './SkipWaitPopupModalStyles';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import Clipboard from '@react-native-community/clipboard';
import { useToast } from 'react-native-toast-notifications';

const SkipWaitPopupModal = ({ visible, popupDetail, handleClose, handleContinue }) => {

    const toast = useToast();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={{ backgroundColor: "black", borderRadius: 50, borderWidth: 2, borderColor: 'white', overflow: "hidden" }}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={handleClose}>
                            < Animatable.Image
                                animation="bounceIn"
                                duraton="1500"
                                source={require('../../../assets/closeGrey.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text style={popupDetail && popupDetail.text1 ? popupDetail.text1.style : ''}>{popupDetail && popupDetail.text1 ? popupDetail.text1.text : ''}</Text>
                        <View style={[styles.popupButton, popupDetail && popupDetail.logo ? '' : { marginTop: 50 }]}>
                            <View style={styles.buttonView}>
                                <TouchableOpacity
                                    disabled={popupDetail && popupDetail.button1 && popupDetail.button1.disable ? popupDetail.button1.disable : ''}
                                    style={popupDetail && popupDetail.button1 && popupDetail.button1.buttonStyle ? popupDetail.button1.buttonStyle : ''}
                                    onPress={handleContinue}
                                >
                                    <Text style={popupDetail && popupDetail.button1 && popupDetail.button1.textStyle ? popupDetail.button1.textStyle : ''}>
                                        {popupDetail && popupDetail.button1 && popupDetail.button1.text ? popupDetail.button1.text : ''}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.buttonView, { marginTop: 40 }]}>
                                <TouchableOpacity
                                    style={popupDetail && popupDetail.button2 && popupDetail.button2.buttonStyle ? popupDetail.button2.buttonStyle : ''}
                                    onPress={() => {
                                        Clipboard.setString(popupDetail && popupDetail.button1 && popupDetail.button1.text ? popupDetail.button1.text : '')
                                        toast.show("Text Copied", {
                                            type: "success",
                                            duration: 4000,
                                            placement: 'top'
                                        });
                                        handleContinue()
                                    }}
                                >
                                    <Text style={popupDetail && popupDetail.button2 && popupDetail.button2.textStyle ? popupDetail.button2.textStyle : ''}>
                                        {popupDetail && popupDetail.button2 && popupDetail.button2.text ? popupDetail.button2.text : ''}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {
                                popupDetail && popupDetail.button3 &&
                                <Text style={popupDetail.button3.style}>
                                    {popupDetail.button3.text}
                                </Text>
                            }
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    );
};

export default SkipWaitPopupModal;
