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
    fadeInAction: {
        flexDirection: 'row',
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
    headerText:{
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('5%'),
        color: "white",
        textAlign: "left",
        position: "absolute",
        top: hp('8.5%'),
        left: wp('5%')
    },
    checkCircleSize: hp('2.5%')
};
