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
        alignItems: 'center',
        paddingTop: hp('4.5%'),
        paddingBottom: hp('2%'),
    },
    fadeInUpBig: {
        alignItems: 'center'
    },
    textHead: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('5%'),
        color: "white",
    },
    textHead2: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('2.5%'),
        color: "white",
        marginTop:hp('1%')
    }
};
