import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ActionSheetIOS,
    Button,
    Platform,
    TextInput
} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import AuthService from '../../../Services/API/AuthService';
import styles from './PhoneLoginScreenStyles';
import PhoneCodeData from '../../../../data.json'
import { useToast } from "react-native-toast-notifications";
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AppHeader from '../../../../components/AppHeader/AppHeader';

const PhoneLoginScreen = ({ navigation }) => {

    const [countryList, setCountryList] = useState([]);

    const toast = useToast();

    useEffect(() => {
        countrySet()
    }, [])

    const countrySet = () => {

        let optionList = ["Cancel"];
        PhoneCodeData.map((data) => {
            optionList.push(data.dial_code + "(" + data.code + ")")
        })
        optionList.push("Reset")
        setCountryList(optionList);
    }

    const [data, setData] = React.useState({
        mobileNumber: '',
        password: '',
        check_textInputChange: false,
        isValidMobileNumber: true,
        phoneCodeValue: '+1',
        disabledButton: true,
        loading: false
    });

    const validateMobile = (mobile_number) => {
        var mob_regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (mob_regex.test(mobile_number)) {
            return true;
        } else {
            return false;
        }
    }

    const textInputChange = (val) => {

        if (validateMobile(val)) {
            setData({
                ...data,
                mobileNumber: val,
                check_textInputChange: true,
                isValidMobileNumber: true,
                disabledButton: false
            });
        } else {
            setData({
                ...data,
                mobileNumber: val,
                check_textInputChange: false,
                isValidMobileNumber: false,
                disabledButton: true
            });
        }
    }

    const handleValidMobileNumber = (val) => {
        if (validateMobile(val)) {
            setData({
                ...data,
                isValidMobileNumber: true,
                disabledButton: false
            });
        } else {
            setData({
                ...data,
                isValidMobileNumber: false,
                disabledButton: true
            });
        }
    }

    const handleLogin = async () => {
        if (data.mobileNumber.length == 0) {
            toast.show("Mobile number field cannot be empty.", {
                type: "warning",
                duration: 4000,
                placement: 'top'
            });
            return;
        } else if (!data.isValidMobileNumber) {
            toast.show("Mobile number must be numeric.", {
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
        let phoneNumber = data.mobileNumber
        let countryCode = data.phoneCodeValue
        await AuthService.GetOTP(phoneNumber, countryCode)
            .then((response) => {
                if (response.status_code === 200) {

                    toast.show(response.message, {
                        type: "success",
                        duration: 3000,
                        placement: 'top'
                    });
                    navigation.navigate('OtpScreen', { phoneNumber, countryCode })
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

    const onPress = () =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: countryList,
                destructiveButtonIndex: 243,
                cancelButtonIndex: 0,
                userInterfaceStyle: 'light'
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    // cancel action
                } else if (buttonIndex === 243) {
                    setData({ ...data, phoneCodeValue: "+1" })
                } else {
                    let currentCountryCod = PhoneCodeData.find((data) => {
                        if ((data.index) === buttonIndex) {
                            return data.dial_code
                        }
                    })
                    setData({ ...data, phoneCodeValue: currentCountryCod.dial_code })
                }
            }
        );

    return (
        <View style={styles.container}>

            <AppHeader
                navigation={navigation}
                isBack={true}
                isSkip={false}
            />

            <View style={styles.header}>
                <Text style={styles.headerText}>My Phone{"\n"}Number</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                <View style={styles.enterPhoneNumber}>
                    <View style={styles.phoneCode}>
                        {Platform.OS === "ios" ?
                            <>
                                {data.phoneCodeValue !== "" ?
                                    <>
                                        <Text style={styles.countryCode} onPress={onPress}>{data.phoneCodeValue}</Text>
                                    </> :
                                    <Button onPress={onPress} title="Show Action Sheet" />}
                            </> :
                            <>
                                <Picker
                                    selectedValue={data.phoneCodeValue}
                                    style={styles.picker}
                                    onValueChange={(itemValue) => setData({ ...data, phoneCodeValue: itemValue })}
                                >
                                    {
                                        PhoneCodeData.map((data) => {
                                            return <Picker.Item key={data.dial_code} label={data.dial_code + " (" + data.code + ")"} value={data.dial_code} />
                                        })
                                    }
                                </Picker>
                            </>
                        }
                    </View>
                    <View style={styles.phoneNumber}>
                        <TextInput
                            keyboardType="numeric"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            placeholder='Enter Phone Number'
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e) => handleValidMobileNumber(e.nativeEvent.text)}
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

                </View>
                {
                    data.isValidMobileNumber || data.mobileNumber == "" ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Mobile Number must be numeric.</Text>
                        </Animatable.View>
                }

                <ContinueButton
                    loading={data.loading}
                    handleContinue={handleLogin}
                    disabledButton={data.disabledButton}
                />

            </Animatable.View >
        </View >
    );
};

export default PhoneLoginScreen;


