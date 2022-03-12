import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './NoMatchesScreenStyles';

const NoMatchesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Header-Icon*/}
            <View style={{ flex: 1, alignItems: 'flex-start' }} >
                <View style={{ textAlign: "center" }}>
                    <Text style={{ color: "#4DF8FF", fontSize: 25, left: "30%" }}>STARSTUDED</Text></View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 20, position: 'absolute', bottom: Platform.OS === 'ios' ? 40 : 20, zIndex: 2000 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Image
                            source={require('../../../../assets/star.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Image
                            source={require('../../../../assets/matcheschat.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Image
                            source={require('../../../../assets/user.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                </View >

                <View>
                    <Image
                        style={{ top: 150, left: 70 }}
                        source={require('../../../../assets/matchesImage.png')}>
                    </Image>
                </View>
                <Text style={{ color: "white", fontSize: 31, margin: 80, top: 100 }}>No Matches Yet</Text>
            </View>
        </View>
    );
};

export default NoMatchesScreen;
