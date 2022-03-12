import React from 'react';
import {
    View,
    Text
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AuthService from '../../../Services/API/AuthService';
import styles from './BirthDateScreenStyles';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { useToast } from "react-native-toast-notifications";
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AppHeader from '../../../../components/AppHeader/AppHeader';


const BirthDateScreen = ({ navigation }) => {

    const [date, setDate] = React.useState('');

    const toast = useToast();
    const [data, setData] = React.useState({
        disabledButton: true,
        loading: false
    });

    const handleContinue = async () => {

        if (date.length == 0) {
            toast.show("Date of Birth field cannot be empty.", {

                type: "warning",
                duration: 4000,
                placement: 'top'
            });
            return;
        }

        let birthDate = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
        let difference = moment().diff(birthDate, 'years');
        if (difference < 18) {
            toast.show("You should be 18 or above in order to create an account on StarStuded!", {
                type: "warning",
                duration: 4000,
                placement: 'top'
            });
            return;
        } else if (difference > 100) {
            toast.show("You should be 100 or below in order to create an account on StarStuded!", {
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

        await AuthService.UpdateDateOfBirth(birthDate)
            .then(async (response) => {
                if (response.status_code === 200) {
                    toast.show(response.message, {
                        type: "success",
                        duration: 4000,
                        placement: 'top'
                    });
                    navigation.navigate('GenderSelectionScreen')
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
                <Text style={styles.headerText}>My {"\n"}Birthday</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                <View style={styles.fadeInAction}>
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={date}
                        mode="date"
                        placeholder="Select Date"
                        format="DD/MM/YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => {
                            setDate(date);
                            setData({
                                ...data,
                                disabledButton: false
                            })
                        }}
                        customStyles={styles.customDateStyle}

                    />
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

export default BirthDateScreen;
