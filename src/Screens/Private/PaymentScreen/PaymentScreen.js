import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Alert,
    Image,
    Linking,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import AuthService from '../../../Services/API/AuthService';
import AuthLogic from '../../../Utils/AuthLogic';
import styles from './PaymentScreenStyles';


const PaymentScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = (val) => {
        setData({
            ...data,
            email: val,
            cardNumber: val,
            expiry: val,
            cvc: val,
            check_textInputChange: true,
        });
    }

    const handleContinue = async () => {

        const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegEx.test(data.email)) {
            toast.show("Wrong Input!', 'Enter vaild email.", {
                type: "warning",
                duration: 4000,
                placement: 'top'
            });
            return;
        }

        if (data.email.length == 0) {
            
            toast.show("Email field cannot be empty.", {
                type: "warning",
                duration: 4000,
                placement: 'top'
            });
            return;
            
            // var response = await AuthService.UpagradeStellar(package, stripeToken, stripeEmail);
            // if (response.status_code === 200) {
            //     toast.show(response.message, {
            //         type: "success",
            //         duration: 4000,
            //         placement: 'top'
            //     });
            //     navigation.navigate('CelebrityScreen')
            // } else {
            //     toast.show(response.message, {
            //         type: "danger",
            //         duration: 4000,
            //         placement: 'top'
            //     });
            // }
        }
        
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <Image source={require('../../../../assets/appback.png')} style={styles.backgroundImage} />
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.closeButton}
                        source={require('../../../../assets/close1.png')}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <Image
                    style={styles.starImage}
                    source={require('../../../../assets/swipe-star.png')}></Image>
                <View style={{ textAlign: "center" }}>
                    <Text style={styles.starStuded}>STARSTUDED</Text></View>
                <Text style={styles.starLikes}>Get Star Likes</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer]}
            >
                <View style={styles.action}>
                    <Text style={styles.email}>Email</Text>
                    <TextInput
                        placeholder="Email Address"
                        placeholderTextColor="#666666"
                        textAlign="center"
                        style={[styles.textInput
                        ]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.cardNumber}>Card</Text>
                    <TextInput
                        placeholder="Card Number"
                        placeholderTextColor="#666666"
                        textAlign="center"
                        style={[styles.textInput
                        ]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.expiryField}>Exp</Text>
                    <TextInput
                        placeholder="01/22"
                        placeholderTextColor="#666666"
                        textAlign="center"
                        style={[styles.textInput
                        ]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    <Text style={styles.cvcField}>CVC</Text>
                    <TextInput
                        placeholder="111"
                        placeholderTextColor="#666666"
                        textAlign="center"
                        style={[styles.textInput
                        ]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                </View>

                <View style={styles.termsOfServices}>
                    <TouchableOpacity
                        onPress={() => { Linking.openURL('https://www.starstuded.com/terms') }}
                    >
                        <Text style={styles.terms}>You can review our <Text style={styles.services}>Terms of Services</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.upgradeButton}
                        onPress={() => { handleContinue() }}
                    >
                        <LinearGradient
                            colors={['#4DF8FF', '#4DF8FF']}
                            style={styles.upgradeButton}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>UPGRADE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default PaymentScreen;
