import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    continueButtonView: {
        alignItems: 'center',
        marginTop: hp('6%')
    },
    continueButton: {
        width: wp('73%'),
        height: hp('6.25%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    activityIndicator: {
        marginTop: hp('3%')
    },
    continueText: {
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
        fontFamily: 'AvenirLTStd-Book'
    }
}