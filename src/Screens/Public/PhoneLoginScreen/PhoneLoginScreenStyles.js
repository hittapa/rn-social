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
        flex: 3,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('18.5%'),
    },
    phoneCode: {
        flexDirection: 'row',
        marginTop: hp('1.25%'),
        width: wp('19%'),
        float: "left",
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },
    phoneNumber: {
        width: wp('65%'),
        float: "left",
        flexDirection: 'row',
        marginTop: hp('1.25%'),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    textInput: {
        flex: 1,
        paddingLeft: wp('2.5%'),
        color: '#ffff',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('2.45%')
    },
    errorMsg: {
        color: '#FF0000',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('2%'),
        top: hp('1%')
    },
    enterPhoneNumber: {
        flexDirection: "row",
        justifyContent: "space-around"
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
    picker: {
        height: hp('6.25%'),
        width: wp('50%'),
        color: '#4DF8FF',
        textAlign: "center"
    },
    countryCode: {
        color: '#fff'
    },
    checkCircleSize: hp('2.5%')
};
