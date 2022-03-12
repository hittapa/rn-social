import { Platform } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        // justifyContent: 'center',
        backgroundColor: '#1F1F1F',
        // padding: 8,
        marginTop: Platform.OS === 'ios' ? 50 : 0
    },
    paragraph: {
        margin: 24,
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    newMatchesText: {
        color: "white",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        left: 15,
        top: 20,
        marginTop: 20
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
        height: 35,
        alignSelf: 'center',
        zIndex: 1,
    },
    chatImageStyle: {
        width: 60,
        height: 60,
        zIndex: 1,
        borderRadius: 30,
        marginBottom: 20
    },
    chatTitle: {
        color: "white",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
    },
    about_me: {
        color: "white",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: wp('70%')
    },
    chatTitle2: {
        color: "white",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 17
    },
    chatText: {
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        paddingBottom: 20
    },
    chatStyle: {
        width: 124,
        height: 124,
        marginRight: 20,
        borderRadius: 62,
        alignSelf: "center"

    },
    chatStyle1: {
        resizeMode: 'contain',
        width: 131,
        height: 124,
        alignSelf: 'center',
        marginRight: 20
    },
    chatStyle2: {
        resizeMode: 'contain',
        width: 131,
        height: 124,
        alignSelf: 'center',
        marginRight: 20
    },
    chatHeader: {
        flexDirection: "row",
        top: 50,
        margin: 5,
        height: 200,
        paddingLeft: 20,
        paddingRight: 20
    },
    messageText: {
        color: "white",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        left: 15,

        marginTop: "10%",
        marginBottom: "5%"

    },
    closeImageStyle: {
        width: 40,
        height: 40,
    },
    verifyLogo: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        alignSelf: 'center',
        left: 5,
        flexDirection: "row"
    },
    verifyLogoImage: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },
    liveChatName: {
        flexDirection: "row"
    },
    activityIndicator: {
        backgroundColor: "black",
        height: "100%"
    },
    swipeList: {
        marginLeft: wp('2%')
    }
};
