import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    modalView: {
        alignItems: "center",
        width: 383,
        height: hp("45%"),
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        height: 50,
        marginTop: 6,
    },
    popupButton: {
        alignItems: 'center'
    },
    buttonView: {
        alignItems: 'center',
        marginTop: 50
    },
    activityIndicator: {
        marginTop: 25
    },
}