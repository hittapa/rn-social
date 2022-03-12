import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        flex: 1,
        backgroundColor: '#B9124C',
    },
    header: {
        flex: 1,
        paddingBottom: hp('6.25%')
    },
    fadeInUpBig: {
        flex: 3,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('20%'),
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
    headerText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 24,
        color: "white",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        textAlign: 'center',
        lineHeight: 36,
        paddingHorizontal: wp('5%'),
    },
    button: {
        width: wp('70%'),
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ffffff', 
        position: "absolute",
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4DF8FF'
    },
    buttonText: {
        fontFamily: 'AvenirLTStd-Black',
        fontSize: 28,
        color: "black",
        alignSelf: "center",
    },
    checkCircleSize: hp('2.5%')
};
