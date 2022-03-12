import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import AuthService from '../../../Services/API/AuthService';
import styles from './EmailScreenStyles';
import { useToast } from "react-native-toast-notifications";
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AppHeader from '../../../../components/AppHeader/AppHeader';


const EmailScreen = ({ navigation }) => {

    const toast = useToast();

    const [data, setData] = React.useState({
        email: '',
        check_textInputChange: false,
        disabledButton: true,
        loading: false
    });

    const textInputChange = (val) => {
        if (val !== '' && val !== undefined && val !== null)
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                disabledButton: false
            });
        else
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                disabledButton: true
            });
    }

    const handleContinue = async () => {
        if (data.email.length == 0) {
            toast.show("Email field cannot be empty.", {
                type: "warning",
                duration: 4000,
                placement: 'top'
            });
            return;
        }

        const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegEx.test(data.email)) {
            toast.show("Enter vaild email.", {
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

        await AuthService.UpdateEmail(data.email)
            .then(async (response) => {
                if (response.status_code === 200) {
                    toast.show(response.message, {
                        type: "success",
                        duration: 4000,
                        placement: 'top'
                    });
                    navigation.navigate('TutorialScreen')
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
                isLater={true}
                nextScreen={"ReadyScreen"}
            />

            <View style={styles.header}>
                <Text style={styles.headerText}>Add Your Email</Text>
                <Text style={styles.headerText2}>Please enter your email{"\n"}     for added recovery </Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                <View style={styles.fadeInAction}>
                    <TextInput
                        placeholder="Email Address"
                        placeholderTextColor="#666666"
                        textAlign="center"
                        style={[styles.textInput
                        ]}
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
                    handleContinue={handleContinue}
                    disabledButton={data.disabledButton}
                />

            </Animatable.View>
        </View>
    );
};

export default EmailScreen;
