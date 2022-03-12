import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './VideoPopupModalStyles';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../ContinueButton/ContinueButton'
import VideoPlayer from 'react-native-video-player';

const VideoPopupModal = ({ visible, popupDetail, handleContinue }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={{ backgroundColor: "black", overflow: "hidden" }}>
                    <View style={styles.modalView}>
                        <View style={{ position: 'absolute', alignSelf: 'flex-end', zIndex: 1 }}>
                            <TouchableOpacity onPress={() => handleContinue()}>
                                <Image
                                    source={require('../../../assets/closeGrey.png')}
                                    resizeMode='contain'
                                    style={{ width: 40, height: 40 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <VideoPlayer
                                video={{ uri: popupDetail ? popupDetail : '' }}
                                autoplay={true}
                                resizeMode='contain'
                                videoHeight={400}
                                videoWidth={400}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    );
};

export default VideoPopupModal;
