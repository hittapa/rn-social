import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AuthService from '../../../Services/API/AuthService';
import styles from './GenderSelectionScreenStyles';
import { useToast } from "react-native-toast-notifications";
import AppHeader from '../../../../components/AppHeader/AppHeader';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';


const GenderSelectionScreen = ({ navigation, route }) => {

    const [ActiveButton, setActiveButton] = React.useState(null);
    const gender = route && route.params ? route.params.gender : null;
    const toast = useToast();
    const [data, setData] = React.useState({
        disabledButton: true,
        loading: false
    });

    useEffect(() => {
        if (gender) {
            setActiveButton(gender)
        }
    }, [])

    const checkPress = (value) => {
        setActiveButton(value);
        setData({
            ...data,
            disabledButton: false
        })
    }

    const handleContinue = async () => {
        if (ActiveButton.length == 0) {
            toast.show("Please select your gender.", {
                type: "warning",
                duration: 4000,
                placement: 'top'
            });
            return;
        }

        setData({
            ...data,
            loading: true
        })

        await AuthService.UpdateGender(ActiveButton)
            .then(async (response) => {
                if (response.status_code === 200) {
                    toast.show(response.message, {
                        type: "success",
                        duration: 4000,
                        placement: 'top'
                    });
                    if (gender) {
                        navigation.goBack();
                    } else navigation.navigate('InterestedPersonScreen')
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

        setData({
            ...data,
            loading: false
        })
    }


    return (

        <View style={styles.container}>

            <AppHeader
                navigation={navigation}
                isBack={true}
                isSkip={false}
            />

            <View style={styles.header}>
                <Text style={styles.headerText}>I am a</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                <View style={styles.fadeInAction}>
                    <Text
                        onPress={() => checkPress(2)}
                        style={[styles.normalButton, ActiveButton === 2 ? styles.activeButton : null]} >
                        WOMEN
                    </Text>
                    <Text
                        onPress={() => checkPress(1)}
                        style={[styles.normalButton, ActiveButton === 1 ? styles.activeButton : null]}>
                        MAN
                    </Text>
                    <Text
                        onPress={() => checkPress(3)}
                        style={[styles.normalButton, ActiveButton === 3 ? styles.activeButton : null]}>
                        OTHER
                    </Text>
                </View>

                <ContinueButton
                    buttonText={gender ? 'Save' : 'Continue'}
                    loading={data.loading}
                    handleContinue={handleContinue}
                    disabledButton={data.disabledButton}
                />

            </Animatable.View>
        </View>
    );
};

export default GenderSelectionScreen;
