import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AuthService from '../../../Services/API/AuthService';
import styles from './SpeedRoundScreenStyles';

const SpeedRoundScreen = ({ navigation, route }) => {
    const toast = useToast();

    const [loading, setLoading] = useState(false);
    const likeId = route && route.params ? route.params.likeId : ''
    const handleContinue = async () => {
        setLoading(true)
        await AuthService.SpeedRound(likeId)
            .then(async (response) => {
                if (response.status_code === 200) {
                    toast.show(response.message, {
                        type: "success",
                        duration: 4000,
                        placement: 'top'
                    });
                    navigation.navigate('QuestionScreen', { initialMinutes: 1, initialSeconds: 0, retest: 0, questionArray: response.data.questions, likeId: likeId })
                } else {
                    toast.show(response.message, {
                        type: "danger",
                        duration: 4000,
                        placement: 'top'
                    });
                }
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
        setLoading(false)
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
                <Image style={styles.stopWatch} source={require('../../../../assets/stopwatch.png')} />
                <Text style={{ color: '#4DF8FF', marginTop: 15, fontSize: 35 }}>SPEED ROUND</Text>
                <Text style={{ color: 'white', marginTop: 58, fontSize: 34 }}>3 Questions</Text>
                <Text style={{ color: 'white', marginTop: 58, fontSize: 25, textAlign: 'center' }}>To get to know you better</Text>
                <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>and see if you’d be a match</Text>
                <ContinueButton
                    loading={loading}
                    buttonText={'START'}
                    textColor={'black'}
                    handleContinue={() => handleContinue()}
                    style={{ width: 277, marginTop: 75 }}
                />
            </View>
        </View>
    );
};

export default SpeedRoundScreen;