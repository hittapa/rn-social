import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    imageBackground: {
    },
    avatar: {
        alignItems: 'center',
        margin: wp('1.3%'),
    },
    avatarImage: {
        height: hp('16%'),
        width: wp('27.3%'),
        overflow: 'hidden',
        borderRadius: 10,
    },
    addButton: {
        height: hp('3.7%'),
        width: wp('8%'),
        borderRadius: 50,
        position: 'absolute',
        right: wp('-0.5%'),
        bottom: hp('-0.4%'),
    },
    addButtonIcon: {
        height: hp('3.5%'),
        width: wp('8%'),
    }
};
