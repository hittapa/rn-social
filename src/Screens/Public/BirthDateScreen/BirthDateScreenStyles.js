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
        flexDirection: 'row'
    },
    datePickerStyle: {
        width: wp('91%'),
        left: 0

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
    customDateStyle: {
        dateInput: {
            borderColor: "white",
            alignItems: "center",
            borderWidth: 0,
            borderBottomWidth: 1,
        },
        placeholderText: {
            fontFamily: 'AvenirLTStd-Book',
            fontSize: hp('3.7%'),
        },
        dateText: {
            fontFamily: 'AvenirLTStd-Book',
            fontSize: hp('3.7%'),
            color: "white"
        },
        dateIcon: {
            width: 0,
            height: 0
        }
    }
};
