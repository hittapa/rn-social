import { Platform } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    backgroundImage: {
        width: wp("100%"),
        height: hp("100%"),
        position: "absolute"
    },
    skipText: {
        fontSize: hp('2.5%'),
        color: "gray",
        textAlign: "right",
        position: "absolute",
        bottom: hp('1.25%'),
        right: wp('5%'),
        fontFamily: 'AvenirLTStd-Book'
    },
    laterText: {
        fontSize: hp('2.5%'),
        color: "gray",
        textAlign: "right",
        position: "absolute",
        bottom: hp('1.25%'),
        right: wp('5%'),
        fontFamily: 'AvenirLTStd-Book'
    },
    backArrow: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('13%'),
        height: hp('6.25%'),
        marginTop: Platform.OS === 'ios' ? 40 : 20
    },
    backButton:{
        width: wp("6%"),
        height: hp("6%"),
    }
}