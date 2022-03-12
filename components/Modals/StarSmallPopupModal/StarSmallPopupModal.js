import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './StarSmallPopupModalStyles';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../ContinueButton/ContinueButton'

const StarSmallPopupModal = ({ visible, popupDetail, handleContinue }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={{ backgroundColor: "white", borderRadius: 50, overflow: "hidden" }}>
                    <Image style={{ height: "100%", position: "absolute" }} source={require('../../../assets/popupGradient.png')} />
                    <View style={styles.modalView}>
                        <Animatable.Image
                            animation="bounceIn"
                            duraton="1500"
                            source={
                                popupDetail && popupDetail.logoPink ? require('../../../assets/starPinkShadow.png') : require('../../../assets/starBlackShadow.png')
                            }
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={
                            [{ bottom: 10 }, popupDetail && popupDetail.text1 ? popupDetail.text1.style : ""]}
                        >
                            {popupDetail && popupDetail.text1 ? popupDetail.text1.text : ""}
                        </Text>
                        <Text style={
                            [{ marginTop: 15 }, popupDetail && popupDetail.text2 ? popupDetail.text2.style : ""]}
                        >
                            {popupDetail && popupDetail.text2 ? popupDetail.text2.text : ""}
                        </Text>
                        <View style={styles.popupButton}>
                            <ContinueButton
                                handleContinue={handleContinue}
                                style={{ width: 250 }}
                                buttonText={popupDetail && popupDetail.buttonStyle && popupDetail.buttonStyle.text ? popupDetail.buttonStyle.text : null}
                                buttonColor={popupDetail && popupDetail.buttonStyle && popupDetail.buttonStyle.color ? popupDetail.buttonStyle.color : null}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    );
};

export default StarSmallPopupModal;
