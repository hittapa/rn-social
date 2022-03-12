import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    BackHandler,
    Linking,
    Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './MainScreenStyles';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import AuthService from '../../../Services/API/AuthService';
import { useToast } from 'react-native-toast-notifications';
import AuthLogic from '../../../Utils/AuthLogic';
import { appleAuth, appleAuthAndroid, AppleButton } from '@invertase/react-native-apple-authentication';
import { v4 as uuid } from 'uuid';

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '86385105432-cdm7r6k2scinpcnm95kni4iong6k5biq.apps.googleusercontent.com',
    offlineAccess: true,
    hostedDomain: '',
    forceCodeForRefreshToken: true,
    accountName: '',
    iosClientId: '86385105432-5qaqbhe688rdo2gje4k6bhd4o036v56q.apps.googleusercontent.com',
    googleServicePlistPath: '',
    openIdRealm: '',
    profileImageSize: 120
});

const MainScreen = ({ navigation }) => {
    const toast = useToast();

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                return true;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, []),
    );

    const onSignInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo.user);
            if (userInfo.user) {
                let formData = {
                    email: userInfo.user.email,
                    first_name: userInfo.user.givenName,
                    google_id: userInfo.user.id
                };
                await AuthService.handleGoogleLogin(formData)
                    .then(async (response) => {
                        console.log("Login success!!!");
                        console.log(response);
                        if (response.status_code === 200) {

                            await AuthLogic.SetUser(JSON.stringify(response.data.user.id));
                            await AuthLogic.SetLoggedIn(response.data.token);

                            if (response.data.user.is_new_account) {
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
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    const onSignInWithApple = async () => {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        console.log("Apple Login !!!!!!!!!!!!!!!!!!!!");
        console.log(appleAuthRequestResponse);

        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
        console.log("Apple Login @@@@@@@@@@@@@@@@@@@@");
        console.log(credentialState);

        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated
            try {
                if (appleAuthRequestResponse.user) {
                    if (appleAuthRequestResponse.email === null) {
                        toast.show("Your apple id is not authorized.", {
                            type: "danger",
                            duration: 4000,
                            placement: 'top'
                        });
                        return;
                    }
                    let formData = {
                        email: appleAuthRequestResponse.email,
                        first_name: appleAuthRequestResponse.fullName.givenName,
                        apple_id: appleAuthRequestResponse.user
                    };
                    await AuthService.handleAppleLogin(formData)
                        .then(async (response) => {
                            console.log("Login success!!!");
                            console.log(response);
                            if (response.status_code === 200) {

                                await AuthLogic.SetUser(JSON.stringify(response.data.user.id));
                                await AuthLogic.SetLoggedIn(response.data.token);

                                if (response.data.user.is_new_account) {
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
                }
            } catch (error) {
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // user cancelled the login flow
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    // operation (e.g. sign in) is in progress already
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    // play services not available or outdated
                } else {
                    // some other error happened
                }
            }
        }
    }

    const onSignInWithAppleAndroid = async () => {
        // const rawNonce = uuid();
        // const state = uuid();

        try {
            appleAuthAndroid.configure({
                // The Service ID you registered with Apple
                clientId: 'com.starstuded.app',

                // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
                // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
                redirectUri: 'https://app.starstuded.com/__auth/handler',

                // The type of response requested - code, id_token, or both.
                responseType: appleAuthAndroid.ResponseType.ALL,

                // The amount of user information requested from Apple.
                scope: appleAuthAndroid.Scope.ALL,

                // // Random nonce value that will be SHA256 hashed before sending to Apple.
                // nonce: rawNonce,

                // // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
                // state,
            });

            // Open the browser window for user sign in
            const response = await appleAuthAndroid.signIn();
            console.log("Android Apple Login");
            console.log(response);
            console.log('Android Apple Login');

            if (response) {
                // const decodedIdToken = jwt_decode(response.id_token);
                // appleId = decodedIdToken.sub;
                // appleToken = response.id_token;
                // appleEmail = decodedIdToken.email;
                if (response.user) {
                    if (response.email === null) {
                        toast.show("Your apple id is not authorized.", {
                            type: "danger",
                            duration: 4000,
                            placement: 'top'
                        });
                        return;
                    }
                    let formData = {
                        email: response.user.email,
                        first_name: response.user.name?.firstName,
                        apple_id: response.user.email
                    };
                    await AuthService.handleAppleLogin(formData)
                        .then(async (response) => {
                            console.log("Login success!!!");
                            console.log(response);
                            if (response.status_code === 200) {

                                await AuthLogic.SetUser(JSON.stringify(response.data.user.id));
                                await AuthLogic.SetLoggedIn(response.data.token);

                                if (response.data.user.is_new_account) {
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
                }
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <Image source={require('../../../../assets/appback.png')} style={styles.backgroundImage} />
            <Image
                source={require('../../../../assets/swipe-star.png')}
                style={styles.images}
            />
            <View style={{ alignItems: 'center' }}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../../../assets/logo.png')}
                    style={styles.appLogo}
                    resizeMode="contain"
                />
                <Text style={styles.privacy}>
                    <Text style={styles.privacyText}>By tapping Log In, you agree with our </Text>
                    <Text
                        style={{ textDecorationLine: 'underline' }}
                        onPress={() => Linking.openURL('https://www.starstuded.com/terms')}
                    >
                        Terms of Services
                    </Text>
                    <Text> and </Text>
                    <Text
                        style={{ textDecorationLine: 'underline' }}
                        onPress={() => Linking.openURL('https://www.starstuded.com/privacypolicy')}
                    >
                        Privacy Policy.
                    </Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.googleSignIn} onPress={onSignInWithGoogle}>
                <Image
                    style={styles.googleLogo}
                    source={require('../../../../assets/google_logo.png')}
                />
                <Text style={styles.googleSignInText}>Continue with Google</Text>
            </TouchableOpacity>
            {/* <View style={styles.googleSignIn}>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={onSignIn}
                />
            </View> */}
            <View style={styles.orLine}>
                <View style={styles.line}></View>
                <Text style={styles.textStyle}>or</Text>
                <View style={styles.line}></View>
            </View>

            <TouchableOpacity
                style={styles.continuePhoneNumber}
                onPress={() => navigation.navigate('PhoneLoginScreen')}
            >

                <Text style={styles.textStyle}>Continue with Phone Number</Text>
            </TouchableOpacity>
            <View>
                {/* <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../../../assets/appstore.png')}
                    style={styles.appStoreLogo}
                    resizeMode="contain"
                /> */}
                {
                    (appleAuth.isSupported && Platform.OS === 'ios') && (
                        <AppleButton
                            style={{ ...styles.appleButton, ...styles.appStoreLogo }}
                            cornerRadius={30}
                            buttonStyle={AppleButton.Style.WHITE}
                            buttonType={AppleButton.Type.CONTINUE}
                            onPress={onSignInWithApple}
                        />
                    )
                }
                {
                    (Platform.OS === 'android' && appleAuthAndroid.isSupported) && (
                        <AppleButton
                            style={{ ...styles.appleButton, ...styles.appStoreLogo }}
                            cornerRadius={30}
                            buttonStyle={AppleButton.Style.WHITE}
                            buttonType={AppleButton.Type.CONTINUE}
                            onPress={onSignInWithAppleAndroid}
                        />
                    )
                }
            </View>
        </View>
    );
};

export default MainScreen;
