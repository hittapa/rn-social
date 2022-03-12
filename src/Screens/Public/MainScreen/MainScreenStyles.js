import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        flex: 1,
        backgroundColor: '#009387',
        alignItems: 'center',
    },
    googleSignIn: {
        width: wp('80%'),
        height: hp('6%'),
        backgroundColor: 'white',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp('7%')
    },
    googleSignInText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
        fontFamily: 'AvenirLTStd-Black'
    },
    backgroundImage: {
        width: wp("100%"),
        height: hp("100%"),
        position: "absolute"
    },
    appLogo: {
        marginTop: hp('-23%'),
        height: hp('50%'),
        width: wp("50%")
    },
    privacy: {
        color: "white",
        textAlign: "center",
        marginTop: hp('-15%'),
        fontWeight: "bold",
        width: wp('95%')
    },
    privacyText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 12,
        fontFamily: 'AvenirLTStd-Book'
    },
    appStoreLogo: {
        width: wp('50%'),
        marginTop: hp('10%')
    },
    continuePhoneNumber: {
        marginTop: hp('5%'),
        width: wp('71%'),
        alignSelf: 'center'
    },
    googleLogo: {
        width: wp('10%'),
        height: hp('4%'),
        resizeMode: 'contain'
    },
    orLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('7%')
    },
    textStyle: {
        color: '#4df8ff',
        textAlign: "center",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('2.5%'),
        fontWeight: "bold",
        fontFamily: 'AvenirLTStd-Book'
    },
    line: {
        width: wp('20%'),
        height: hp('.4%'),
        backgroundColor: '#4df8ff',
        marginLeft: wp('6%'),
        marginRight: wp('6%'),
        marginTop: wp('1%')
    },
    images: {
        resizeMode: 'contain',
        width: wp('15%'),
        height: hp('15%'),
        alignSelf: 'center',
        zIndex: 1,
        marginTop: hp('5%'),
    },
    appleButton: {
        width: 200,
        height: 60,
        margin: 10,
    },
};
