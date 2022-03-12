import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import styles from './RoundStatusScreenStyles';

const RoundStatusScreen = ({ navigation, route }) => {

    const { complete, likeId } = route.params;

    const handleContinue = (value) => {
        if (value) {
            navigation.navigate('QuestionScreen', { initialMinutes: 1, initialSeconds: 0, retest: 1, likeId })
        } else navigation.navigate('WaitScreen')
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
                <Image style={styles.stopWatch} source={require('../../../../assets/stopwatch.png')} />
                <Text style={{ color: '#4DF8FF', marginTop: 15, fontSize: 35 }}>SPEED ROUND</Text>
                <Text style={{ color: 'white', fontSize: 38 }}>{complete ? 'Complete' : 'Incomplete'}</Text>
                {
                    complete ?
                        <>
                            <Text style={{ color: 'white', marginTop: 58, fontSize: 25, textAlign: 'center' }}>They will look over your</Text>
                            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>profile and answers and get</Text>
                            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>back to you soon.</Text>
                            <ContinueButton
                                buttonText={'Continue'}
                                textColor={'black'}
                                handleContinue={() => handleContinue()}
                                style={{ width: 277, marginTop: 75 }}
                            />
                        </> :
                        <>
                            <Text style={{ color: 'white', marginTop: 58, fontSize: 25, textAlign: 'center' }}>Unfortunalety you didn’t</Text>
                            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>answer all three questions.</Text>
                            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>You can try again with your</Text>
                            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>next celebrity figure!</Text>
                            <TouchableOpacity style={{ marginTop: 65 }} onPress={() => handleContinue(true)}>
                                <Image style={styles.reload} source={require('../../../../assets/reload.png')} />
                            </TouchableOpacity>
                            <ContinueButton
                                buttonText={'Skip'}
                                textColor={'white'}
                                buttonColor={'transparent'}
                                handleContinue={() => handleContinue(false)}
                                style={{ width: 277, marginTop: 10, borderWidth: 1, borderColor: 'white' }}
                            />
                        </>
                }
            </View>
        </View>
    );
};

export default RoundStatusScreen;