import { Platform } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: "center",
        marginTop: Platform.OS === 'ios' ? hp('5%') : hp('5%')
    },
    scroll: {
        // flex: 1,
        width: 400,
        // backgroundColor: 'black',
        left: 5,

    },
    sawYouButton: {
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        bottom: 20,
    },
    textSign: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        fontWeight: 'bold'
    },
    mainText: {
        color: "white",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 17,
        marginTop: 70,
        left: 78
    },
    secondText: {
        color: "#4DF8FF",
        fontSize: 22,
        fontFamily: 'AvenirLTStd-Book',
        marginTop: 50,
        textAlign: "center",
        left: 55
    },
    imageStyle: {
        resizeMode: 'contain',
        width: 31,
        height: 31,
        alignSelf: 'center',
        zIndex: 1,
    },
    headerImage: {
        resizeMode: 'contain',
        width: wp('100%'),
        height: 31,
        alignSelf: 'center',
        zIndex: 1,
    },
    roundImageStyle: {
        height: 300,
        width: 300,
        borderRadius: 200,
        margin: 40,
    },
    likes: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        marginLeft: 30,
        color: '#CECECE',
        backgroundColor: "#1F1F1F",
    },
    selectedLike: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        marginLeft: 30,
        color: 'white',
        backgroundColor: "#1F1F1F",
    },
    views: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        marginRight: 40,
        color: '#CECECE',
        backgroundColor: "#1F1F1F",
    },
    selectedViews: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        marginRight: 40,
        color: 'white',
        backgroundColor: "#1F1F1F",
    },
    mainViewsAndLikes: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        top: 30,
        left: 80,
        zIndex: 5,
        paddingBottom: 30
    },
    chatImageStyle: {
        width: 40,
        height: 40,
        zIndex: 1,
        borderRadius: 20,
    },
    chatText: {
        marginLeft: 20,
        bottom: "3%"
    },
    chatTitle: {
        fontFamily: 'AvenirLTStd-Book',
        color: "white",
        fontSize: 15,
    },
    verifyLogoImage: {
        resizeMode: 'contain',
        width: 41,
        height: 41,
        alignSelf: 'center',
    },
    notification: {
        marginTop: 10,
        marginLeft: 10,

    }
};
