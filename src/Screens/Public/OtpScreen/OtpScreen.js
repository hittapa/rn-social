import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import AuthService from '../../../Services/API/AuthService';
import AuthLogic from '../../../Utils/AuthLogic';
import styles from './OtpScreenStyles';
import { useToast } from "react-native-toast-notifications";
import AppHeader from '../../../../components/AppHeader/AppHeader';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';


const OtpScreen = ({ navigation, route }) => {

    const toast = useToast();
    const { phoneNumber, countryCode } = route.params;

    const [data, setData] = React.useState({
        otpCode: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        disabledButton: true,
        loading: false
    });

    const textInputChange = (val) => {
        if (val !== '' && val !== undefined && val !== null)
            setData({
                ...data,
                otpCode: val,
                check_textInputChange: true,
                disabledButton: false
            });
        else
            setData({
                ...data,
                otpCode: val,
                check_textInputChange: false,
                disabledButton: true
            });
    }


    const verifyOTP = async () => {

        if (data.otpCode.length == 0) {
            toast.show("Otp field cannot be empty.", {
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
        await AuthService.VerifyOTP(phoneNumber, countryCode, data.otpCode)
            .then(async (response) => {
                console.log(response);
                if (response.status_code === 200) {
                    toast.show(response.message, {
                        type: "success",
                        duration: 4000,
                        placement: 'top'
                    });
                    await AuthLogic.SetUser(JSON.stringify(response.data.id));
                    await AuthLogic.SetLoggedIn(response.data.token);

                    if (response.data.is_new_account) {
                        await AuthLogic.SetUserFlowScreen("FirstNameScreen");
                        navigation.navigate('FirstNameScreen')
                    } else {
                        navigation.navigate('CelebrityScreen')
                    }

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
                <Text style={styles.headerText}>Verify Phone{"\n"}Number</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                <View style={styles.fadeInAction}>
                    <TextInput
                        keyboardType="numeric"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        placeholder='Enter Code'
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                            style={{ justifyContent: 'center' }}
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={styles.checkCircleSize}
                            />
                        </Animatable.View>
                        : null}
                </View>

                <ContinueButton
                    loading={data.loading}
                    handleContinue={verifyOTP}
                    buttonText={"VERIFY OTP"}
                    disabledButton={data.disabledButton}
                />
            </Animatable.View>
        </View>
    );
};

export default OtpScreen;

