import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from './LocationScreenStyles';


const LocationScreen = () => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />

            <View style={styles.header}>
                <Image
                    style={styles.locationImage}
                    source={require('../../../../assets/location.png')}></Image>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer]}
            >
                <View>
                    <Text style={{ color: "#000000", fontSize: 42, textAlign: "center", top: 90 }}>
                        Enable Location
                </Text>
                </View>
                <View>
                    <Text style={{ color: "#747474", fontSize: 23, textAlign: "center", top: 140 }}>
                    Location must be turned on to use StarStuded
                </Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.allowButton}
                        onPress={() => { handleUnhide() }}
                    >
                        <LinearGradient
                            colors={['#4DF8FF', '#4DF8FF']}
                            style={styles.allowButton}
                        >
                            <Text style={[styles.textSign, {
                                color: '#000'
                            }]}>Allow</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default LocationScreen;

