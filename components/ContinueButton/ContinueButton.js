import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from 'react-native-navbar';
import styles from './ContinueButtonStyles';


const ContinueButton = ({ loading, disabledButton, handleContinue, buttonText, style, buttonColor, textColor }) => {
    return (

        loading ?
            <ActivityIndicator size="large" style={styles.activityIndicator} color="#4df8ff" /> :

            <View style={styles.continueButtonView}>
                <TouchableOpacity
                    style={[styles.continueButton, style]}
                    disabled={disabledButton}
                    onPress={handleContinue}
                >
                    <LinearGradient
                        colors={disabledButton ? ['gray', 'gray'] : buttonColor ? [buttonColor, buttonColor] : ['#4DF8FF', '#4DF8FF']}
                        style={[styles.continueButton,]}
                    >
                        <Text style={[styles.continueText, { color: textColor ? textColor : 'white' }]}>
                            {buttonText ? buttonText : "Continue"}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
    )
}

export default ContinueButton;
