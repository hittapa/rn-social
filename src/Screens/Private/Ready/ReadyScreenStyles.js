import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
export default {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0D0D0D"
    },
    header: {
        alignItems: "center",
        marginTop: hp('5%')
    },
    headerImage: {
        resizeMode: 'contain',
        width: wp('100%'),
        height: 31,
        alignSelf: 'center',
        zIndex: 1,
    },
    imageStyle: {
        resizeMode: 'contain',
        width: 31,
        height: 31,
        alignSelf: 'center',
        zIndex: 1,
    },
    starImage: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 137
    }
};
