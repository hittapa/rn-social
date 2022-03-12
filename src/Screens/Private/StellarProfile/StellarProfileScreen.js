import React from 'react';
import { View } from 'react-native';
import styles from './StellarProfileScreenStyles';
import AuthLogic from '../../../Utils/AuthLogic';
import StellarProfile from '../../../../components/StellarProfilePage/StellarProfile';

const StellarProfileScreen = () => {
    const [showTab, setShowTab] = React.useState(false)

    const showAndHideTab = () => {
        setShowTab(true)
    }

    const profileShowData = {
        text2: {
            text: "STAR SAW YOUR PROFILE",
            style: {
                color: "#4DF8FF",
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 22,
                textAlign: "center",
                left: 80,
                top: 80
            }
        }
    }

    const profileShowDataUpdate = {
        text2: {
            text: "STAR LIKED YOU",
            style: {
                color: "#4DF8FF",
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 22,
                textAlign: "center",
                left: 130,
                top: 80
            }
        }
    }

    return (
        <View style={styles.container}>
            <StellarProfile profileShowData={showTab === true ? profileShowDataUpdate : profileShowData} isStarShowTab={() => showAndHideTab()} />
        </View>
    );
};



export default StellarProfileScreen;
