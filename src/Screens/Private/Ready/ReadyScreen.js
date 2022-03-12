import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import Popup from '../Home/Popup';
import styles from './ReadyScreenStyles';

const ReadyScreen = ({ navigation }) => {
    const [totalNotification, setTotalNotification] = useState(0);

    const handleContinue = () => {
        navigation.navigate('CelebrityScreen')
    };

    return (
        <View style={styles.container}>
            {/* Header-Icon*/}
            <View style={{ flex: 1 }} >
                <View style={styles.header}>
                    <Image
                        source={require('../../../../assets/header.png')}
                        style={styles.headerImage}
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", position: 'absolute', left: 0, bottom: Platform.OS === 'ios' ? 40 : 20, right: 0 }}>
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
                </View >
                <Image
                    source={require('../../../../assets/readyStar.png')}
                    style={styles.starImage}
                />
                <ContinueButton
                    buttonText='View'
                    style={{ width: 207, marginTop: 36 }}
                    handleContinue={() => handleContinue()}
                />
            </View>
            <Popup />
        </View>
    );
};

export default ReadyScreen;
