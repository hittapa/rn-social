import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './SawProfileScreenStyles';
import AuthLogic from '../../../Utils/AuthLogic';
import ProfileSaw from '../../../../components/ProfileSawPage/ProfileSaw';
const SawProfileScreen = ({ navigation }) => {
    const [showTab, setShowTab] = React.useState(false)

    const showAndHideTab = () => {
        setShowTab(true)
    }

    const profileShowData = {
        text1: {
            upperText: "Upgrade to Stellar",
            lowerText: "To see who saw your profile",
            upperStyle: {
                color: "white",
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 17,
                marginTop: 70,
                left: 120
            },
            lowerStyle: {
                color: "white",
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 17,
                bottom: 70,
                left: 80
            }
        },
        text2: {
            text: "STAR SAW YOUR PROFILE",
            style: {
                color: "#4DF8FF",
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 22,
                textAlign: "center",
                left: 60
            }
        },
        buttonStyle: {
            text: "SEE WHO SAW YOU",
            style: {

            }
        }
    }

    const profileShowDataUpdate = {
        text1: {
            upperText: "Upgrade to Stellar",
            lowerText: "To see who liked you",
            upperStyle: {
                color: "white",
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 17,
                marginTop: 70,
                left: 120
            },
            lowerStyle: {
                color: "white",
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 17,
                bottom: 70,
                left: 110
            }
        },
        text2: {
            text: "STAR LIKED YOU",
            style: {
                color: "#4DF8FF",
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 22,
                textAlign: "center",
                left: 110,
                marginTop: -30
            }
        },
        buttonStyle: {
            text: "SEE WHO LIKED YOU",
            style: {}
        }
    }

    return (
        <View style={styles.container}>
            <ProfileSaw navigation={navigation} tabVisible={showTab} profileShowData={showTab === true ? profileShowDataUpdate : profileShowData} isStarShowTab={() => showAndHideTab()} />
        </View>
    );
};



export default SawProfileScreen;
