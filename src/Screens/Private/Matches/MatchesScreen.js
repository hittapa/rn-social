import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './MatchesScreenStyles';
import LinearGradient from 'react-native-linear-gradient';

const MatchesScreen = ({ navigation, route }) => {

    const { sender_image, } = route.params
    const isSendMessage = () => {
        navigation.navigate("MatchesChatScreen")
    }
    const isKeepGoing = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }} >
                <View style={{ textAlign: "center" }}>
                    <Text style={{ color: "#4DF8FF", fontSize: 25, left: "30%" }}>STARSTUDED</Text>
                </View>
                <Text style={{ color: "white", fontSize: 43, top: 100 }}>You have a Match!</Text>
                <View>
                    <Image
                        source={require('../../../../assets/matchesWomen.png')}
                        style={styles.matchesWomen}
                    />
                </View>
                <View>
                    <Image
                        source={require('../../../../assets/matchesStar.png')}
                        style={styles.matchesStar}
                    />
                </View>
                <View>
                    <Image
                        source={{ uri: sender_image }}
                        style={styles.matchesMan}
                    />
                </View>
                <TouchableOpacity
                    style={styles.sendMessage2}
                    onPress={() => { isSendMessage() }}
                >
                    <LinearGradient
                        colors={['#4DF8FF', '#4DF8FF']}
                        style={styles.sendMessage}
                    >
                        <Text style={[styles.textSign, {
                            color: 'black'
                        }]}>Send Message</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.goingButton2}
                    onPress={() => { isKeepGoing() }}
                >
                    <LinearGradient
                        colors={['#0000', '#0000']}
                        style={styles.goingButton}
                    >
                        <Text style={[styles.textGoingButton, {
                            color: '#fff'
                        }]}>Keep Going</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default MatchesScreen;
