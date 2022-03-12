import React from 'react';
import { View, Text } from 'react-native';
import styles from './TextPopupModalStyles';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../ContinueButton/ContinueButton'

const TextPopupModal = ({ visible, popupDetail, handleContinue }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <LinearGradient
                    colors={popupDetail && popupDetail.modalStyle && popupDetail.modalStyle.gradientColors ? popupDetail.modalStyle.gradientColors : ['#4df8ff', '#2E2E2E', '#2E2E2E']}
                    locations={[0, 0.30, 1]}
                    style={{ borderRadius: 50 }}
                >
                    <View style={styles.modalView}>
                        <Animatable.Image
                            animation="bounceIn"
                            duraton="1500"
                            source={popupDetail && popupDetail.logo === "black" ? require('../../../assets/starBlack.png') : require('../../../assets/starWhite.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={
                            [styles.modalText, popupDetail && popupDetail.text1 ? popupDetail.text1.style : ""]}
                        >
                            {popupDetail && popupDetail.text1 ? popupDetail.text1.text : ""}
                        </Text>
                        <Text style={
                            [styles.modalText, { marginTop: 40 }, popupDetail && popupDetail.text2 ? popupDetail.text2.style : ""]}
                        >
                            {popupDetail && popupDetail.text2 ? popupDetail.text2.text : ""}
                        </Text>
                        <Text style={
                            [styles.modalText, popupDetail && popupDetail.text3 ? popupDetail.text3.style : ""]}
                        >
                            {popupDetail && popupDetail.text3 ? popupDetail.text3.text : ""}
                        </Text>
                        <Text style={
                            [styles.modalText, popupDetail && popupDetail.text4 ? popupDetail.text4.style : ""]}
                        >
                            {popupDetail && popupDetail.text4 ? popupDetail.text4.text : ""}
                        </Text>
                        <Text style={
                            [styles.modalText, popupDetail && popupDetail.text5 ? popupDetail.text5.style : ""]}
                        >
                            {popupDetail && popupDetail.text5 ? popupDetail.text5.text : ""}
                        </Text>
                        <View style={styles.popupButton}>
                            <ContinueButton
                                handleContinue={handleContinue}
                                style={{ width: 250 }}
                                buttonColor={popupDetail && popupDetail.buttonStyle && popupDetail.buttonStyle.color ? popupDetail.buttonStyle.color : null}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </Modal>
    );
};

export default TextPopupModal;
