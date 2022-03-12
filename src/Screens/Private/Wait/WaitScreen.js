import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AuthService from '../../../Services/API/AuthService';
import Popup from '../Home/Popup';
import styles from './WaitScreenStyles';

const WaitScreen = ({ navigation }) => {

    const [currentTime, setCurrentTime] = useState(null);
    const [handlePermiumPopup, setHandlePermiumPopup] = useState(false);
    const [handleskipPopup, setHandleskipPopup] = useState(false);
    const [totalNotification, setTotalNotification] = useState(0);
    const handlePremiumClose = () => {
        setHandlePermiumPopup(false)
    };
    const handleSkipClose = () => {
        setHandleskipPopup(false)
    }

    useEffect(async () => {
        await AuthService.GetCelebrityProfile()
            .then(async (response) => {
                console.log(response);
                if (response.status_code === 200) {
                    if (response.data.lastLikedUser) {
                        var timer = parseInt(response.data.timeCounterDifference), hours, minutes, seconds;
                    } else {
                        setData([response.data])
                    }
                }
                setInterval(() => {
                    hours = parseInt((timer / 3600) % 24, 10)
                    minutes = parseInt((timer / 60) % 60, 10)
                    seconds = parseInt(timer % 60, 10);

                    hours = hours < 10 ? "0" + hours : hours;
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    setCurrentTime(hours + ":" + minutes + ":" + seconds);

                    --timer;
                }, 1000);
            })
            .catch((err) => {
                if (err.message) {
                    toast.show(err.message, {
                        type: "danger",
                        duration: 3000,
                        placement: 'top'
                    });
                } else {
                    toast.show("Something went wrong, Please try again.", {
                        type: "danger",
                        duration: 3000,
                        placement: 'top'
                    });
                }
            })
    }, []);

    return (
        <View style={styles.container}>
            {/* Header-Icon*/}
            <View style={{ flex: 1, alignItems: 'center' }} >
                <Text style={{ color: "#4DF8FF", fontSize: 25 }}>STARSTUDED</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", position: 'absolute', bottom: Platform.OS === 'ios' ? 40 : 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("CelebrityScreen")}>
                        <Image
                            source={require('../../../../assets/swipe-star.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("SawProfileScreen")}>
                        <Text style={{ color: "white", backgroundColor: "#E3004F", borderRadius: 50, width: 20, position: "absolute", left: 20, bottom: 17, textAlign: "center" }}>{totalNotification ? totalNotification : 0}</Text>
                        <Image
                            source={require('../../../../assets/diamond.png')}
                            style={{...styles.imageStyle, tintColor: '#c2cdd3'}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("MatchesChatScreen")}>
                        <Image
                            source={require('../../../../assets/chat.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
                        <Image
                            source={require('../../../../assets/greyUser.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: '#C2CDD3', fontSize: 28, marginTop: 160 }}>Time Left</Text>
                <Text style={{ color: '#4DF8FF', fontSize: 65, marginTop: 20 }}>{currentTime}</Text>
                <ContinueButton
                    handleContinue={() => navigation.navigate('GameScreen')}
                    buttonText={'Skip the Wait'}
                    style={{ width: 277, marginTop: 20 }}
                    textColor={'black'}
                />
                <TouchableOpacity onPress={() => setHandlePermiumPopup(true)}>
                    <Image
                        source={require('../../../../assets/reload.png')}
                        style={styles.reload}
                    />
                </TouchableOpacity>
            </View>
            <Popup
                premiumPopup={{ visible: handlePermiumPopup, handleClose: handlePremiumClose }}
                skipWait={{ visible: handleskipPopup, handleClose: handleSkipClose }}
            />
        </View>
    );
};

export default WaitScreen;