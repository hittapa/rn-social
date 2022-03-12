import React, { useEffect } from 'react';
import {
    View,
    StatusBar,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { getNavigationData } from '../../../Redux/Action';
import AuthLogic from '../../../Utils/AuthLogic';
import styles from './SplashScreenStyles';


const SplashScreen = ({ navigation }) => {

    let dispatch = useDispatch();

    useEffect(() => {
        setTimeout(async () => {

            if (await AuthLogic.IsLoggedIn()) {

                 if (await AuthLogic.IsFlowPending()) {
                     navigation.navigate('FirstNameScreen')
                 } else {
                     navigation.navigate('CelebrityScreen')
                 }
            }
            else navigation.navigate('MainScreen')
            dispatch(getNavigationData(navigation))
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <Image source={require('../../../../assets/appback.png')} style={styles.backgroundImage} />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

        </View>
    );
};

export default SplashScreen;