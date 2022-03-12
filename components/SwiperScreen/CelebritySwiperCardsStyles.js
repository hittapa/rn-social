import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        borderRadius: 20,
        overflow: "hidden",
        flex:1
    },
    flatList: {
        height: hp("78%"),
        borderRadius: 10
    },
    child: {
        width: wp('92%'),
        justifyContent: 'flex-end'
    },
    image: {
        resizeMode: 'cover',
        width: wp('100%'),
        position: 'absolute',
        height: hp('75%'),
        top: 0,
        alignSelf: 'center',
    },
    defaultImage: {
        resizeMode: 'contain',
        width: wp('50%'),
        position: 'absolute',
        height: hp('85%'),
        alignSelf: 'center',
    },
    linearGradient: {
        bottom: hp('0%'),
        width: wp('92%'),
    },
    footer: {
        left: wp('4%'),
        paddingTop: hp('5%'),
        paddingBottom: hp('12%'),
    },
    name: {
        fontSize: hp('3%'),
        fontFamily: 'AvenirLTStd-Book',
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    },
    verified: {
        width: wp('8%'),
        height: hp('4%'),
        left:wp('2%'),
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        borderRadius: 20,
    },
    info: {
        width: wp('66%')
    },
    infoText: {
        fontSize: hp('2.5%'),
        fontFamily: 'AvenirLTStd-Book',
        color: 'white',
        paddingTop: hp('1%')
    },
    report: {
        marginRight: wp('10%'),
        height: wp('10%'),
        width: wp('10%')
    },
    moreWrapper: {
        marginRight: wp('10%'),
        height: wp('10%'),
        width: wp('10%'),
        top: hp('4%')        
    },
    shadowStyle: {
        top: hp('19.5%'),
        width: wp('100%'),
        height: hp('20%'),
      }
}
