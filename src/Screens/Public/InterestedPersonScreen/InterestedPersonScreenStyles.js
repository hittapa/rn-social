import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        paddingBottom: hp('6.25%')
    },
    fadeInUpBig: {
        flex: 3
    },
    fadeInAction: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('5%'),
        color: "white",
        textAlign: "left",
        position: "absolute",
        top: hp('8.5%'),
        left: wp('5%')
    },
    normalButton: {
        borderRadius: 50,
        width: wp('78%'),
        height: hp('8.5%'),
        marginBottom: hp('3.7%'),
        paddingTop: hp('1.8'),
        color: "white",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "white",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('3.1%'),
    },
    activeButton: {
        color: "#4DF8FF",
        borderColor: "#4DF8FF",
    }
};