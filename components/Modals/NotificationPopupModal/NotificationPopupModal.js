import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './NotificationPopupModalStyles';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';


const NotificationPopupModal = ({ visible, popupDetail, handleContinue }) => {

    const { navigation } = useSelector((state) => state.data);

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(visible);
    }, [popupDetail])

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 7000);
    }, [show])

    const HandleCall = () => {
        setShow(false)
        if (popupDetail.notification_type === 'like') {
            navigation.navigate('SawProfileScreen',);
        } else if (popupDetail.notification_type === 'view') {
            navigation.navigate('SawProfileScreen');
        } else {
            navigation.navigate('MatchesScreen', { sender_image: popupDetail.sender_image });
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            style={{ top: 85 }}
            visible={show}
        >
            <View style={styles.centeredView}>
                <View style={{ backgroundColor: "#4DF8FF", borderWidth: 1, borderColor: 'white', overflow: "hidden", height: '14%' }}>
                    <TouchableOpacity style={{ right: -10, position: 'absolute', zIndex: 1 }} onPress={() => setShow(false)}>
                        < Animatable.Image
                            animation="bounceIn"
                            duraton="1500"
                            source={require('../../../assets/closeGrey.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => HandleCall()}>
                        <View style={styles.modalView}>
                            <Image
                                source={{ uri: popupDetail.sender_image }}
                                style={styles.userImage}
                                resizeMode='contain'
                            />
                            <Text>{popupDetail.sender_name}</Text>
                            <Text>{popupDetail.message}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal >
    );
};

export default NotificationPopupModal;
