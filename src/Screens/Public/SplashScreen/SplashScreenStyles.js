import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: wp('70%'),
        height: hp('70%'),
    },
    backgroundImage: {
        width: wp("100%"),
        height: hp("100%"),
        position: "absolute",
    }
};