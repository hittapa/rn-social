import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Alert,
    Image,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AuthService from '../../../Services/API/AuthService';
import AuthLogic from '../../../Utils/AuthLogic';
import styles from './SchoolNameScreenStyles';
import { useToast } from "react-native-toast-notifications";
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AppHeader from '../../../../components/AppHeader/AppHeader';


const SchoolNameScreen = ({ navigation }) => {

    const toast = useToast();

    const [data, setData] = React.useState({
        schoolName: '',
        check_textInputChange: false,
        disabledButton: true,
        loading: false
    });

    const textInputChange = (val) => {

        if (val !== '' && val !== undefined && val !== null)
            setData({
                ...data,
                schoolName: val,
                check_textInputChange: true,
                disabledButton: false
            });
        else
            setData({
                ...data,
                schoolName: val,
                check_textInputChange: false,
                disabledButton: true
            });

    }

    const handleContinue = async () => {
        if (data.schoolName.length == 0) {
            toast.show("School name field cannot be empty.", {
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

        await AuthService.UpdateSchoolName(data.schoolName)
            .then(async (response) => {
                if (response.status_code === 200) {
                    toast.show(response.message, {
                        type: "success",
                        duration: 4000,
                        placement: 'top'
                    });
                    navigation.navigate('EmailScreen')
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
                isSkip={true}
                nextScreen={"EmailScreen"}
            />

            <View style={styles.header}>
                <Text style={styles.headerText}>My {"\n"}School is</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                <View style={styles.fadeInAction}>
                    <TextInput
                        placeholder="School Name"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
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

export default SchoolNameScreen;
