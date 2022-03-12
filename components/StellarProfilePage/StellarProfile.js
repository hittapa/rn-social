import React from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import styles from './StellarProfileStyles';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP } from 'react-native-responsive-screen';


const StellarProfile = ({ navigation, isStarShowTab, profileShowData, user }) => {
    return (
        <View style={styles.container}>

            {/* Header-Icon*/}
            <View style={{ top: Platform.OS === 'ios' ? -480 : -400, width: widthPercentageToDP('100%'), alignItems: 'center'}} >
                <View  style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={profileShowData && profileShowData.text2 ? profileShowData.text2.style : ''}>{profileShowData && profileShowData.text2 ? profileShowData.text2.text : ''}</Text>
                    <View>
                        <Image
                            source={{ uri: user.sender_image }}
                            style={styles.roundImageStyle}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.viewButton2}
                    onPress={() => { navigation.navigate("CelebrityScreen", { id: user.id }) }}
                >
                    <LinearGradient
                        colors={['#4DF8FF', '#4DF8FF']}
                        style={styles.viewButton}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>View</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>


            <Text style={styles.stellarFont}>
                STELLAR
            </Text>
            <Image
                style={{ bottom: Platform.OS === 'ios' ? 85 : 60, position: 'absolute', height: 75, width: 500, left: 0 }}
                source={require('../../assets/stellarGradient.png')}
            />
        </View>
    );
};



export default StellarProfile;
