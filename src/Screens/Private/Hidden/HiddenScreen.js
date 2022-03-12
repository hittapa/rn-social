import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Alert,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import AuthService from '../../../Services/API/AuthService';
import AuthLogic from '../../../Utils/AuthLogic';
import styles from './HiddenScreenStyles';


const HiddenScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />

            <View style={styles.header}>
                <Image
                    style={styles.snapchatImage}
                    source={require('../../../../assets/snapchat.png')}></Image>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer]}
            >
                <View>
                    <Text style={{ color: "#000000", fontSize: 50, textAlign: "center", marginTop: 35 }}>
                        Hidden
                </Text>
                </View>

                <View>
                    <Text style={{ color: "#747474", fontSize: 23, textAlign: "center", marginTop: 35 }}>
                        Nobody can see your profile anymore, unhide to continue using StarStuded
                </Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.unHideButton}
                        onPress={() => { handleUnhide() }}
                    >
                        <LinearGradient
                            colors={['#4DF8FF', '#4DF8FF']}
                            style={styles.unHideButton}
                        >
                            <Text style={[styles.textSign, {
                                color: '#000'
                            }]}>UNHIDE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.logoutBtn}
                        onPress={() => { handleLogout() }}
                    >
                        <LinearGradient
                            colors={['#FFFF', '#FFFF']}
                            style={styles.logout}
                        >
                            <Text style={[styles.textSign, {
                                color: '#747474'
                            }]}>LOGOUT</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default HiddenScreen;

