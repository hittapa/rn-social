import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import styles from './AppHeaderStyles';


const AppHeader = ({ navigation, isBack, isSkip, nextScreen, isLater }) => {

    return (

        <>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />

            <Image source={require('../../assets/appback.png')} style={styles.backgroundImage} />

            {isBack &&
                <TouchableOpacity
                    style={styles.backArrow}
                    onPress={() => navigation.goBack()}>
                    <Image
                    style={styles.backButton}
                    source={require('../../assets/back.png')}></Image>
                </TouchableOpacity>}

            {isSkip &&
                <View>
                    <Text
                        onPress={() => navigation.navigate(nextScreen)}
                        style={styles.skipText}>SKIP</Text>
                </View>}

            {isLater &&
                <View>
                    <Text
                        onPress={() => navigation.navigate(nextScreen)}
                        style={styles.laterText}>LATER</Text>
                </View>}
        </>
    )
}

export default AppHeader;
