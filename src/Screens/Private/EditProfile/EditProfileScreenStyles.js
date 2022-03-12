import { Platform } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default {
    container: {
        flex: 1,
        backgroundColor: '#161616'
    },
    header: {
        flex: 1,
        position: "absolute",
        flexDirection: "row",
        zIndex: 1,
        top: Platform.OS === 'ios' ? 100 : 70,
        width: '100%',
        paddingHorizontal: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        color: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
    },
    action: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? 60 : 40,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 100
    },
    errorMsg: {
        color: '#FF0000',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 17,
        top: 7
    },
    screen: {
        flex: 1,
        marginTop: 40,
        padding: 0,
    },
    avtarDesign1: {
        flexDirection: "column",
    },
    doneText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        color: "white",
        textAlign: "left",
        color: "#4DF8FF",
        marginLeft: 15,
        marginTop: 5,
    },
    editInfoText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        color: "white",
        textAlign: "center",
        position: "absolute",
        marginLeft: widthPercentageToDP('38%')
    },
    normalText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        color: "white",
    },
    editText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        color: "white",
        marginRight: 20,
        width: '50%',
    },
    previewText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        color: "white",
        marginLeft: 20
    },
    instagramText: {
        color: "white",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        bottom: 90
    },
    instagramImage: {
        bottom: 72,
        height: 35,
        width: 35
    },
    connectText: {
        color: "white",
        bottom: 101,
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        left: 50,
    },
    instaIdText: {
        fontWeight: "bold",
        color: "#e3004f",
        bottom: 101,
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        left: 50
    },
    connectButton: {
        color: "#E3004F",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        bottom: 125,
        alignSelf: "flex-end",
        zIndex: 1,
    },
    requestButtonText: {
        color: "#4DF8FF",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
    },
    connectBtnText: {
        color: "#E3004F",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
    },
    verifyText: {
        color: "white",
        bottom: 95,
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        left: 5
    },
    requestButton: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        bottom: 120,
        left: 215,
        color: "#4DF8FF"
    },
    textInput: {
        paddingLeft: 10,
        color: '#05375a',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        color: "white",
        bottom: 65,
        textAlign: 'left',
        marginTop: 10,
        height: 50,
        marginLeft: -10,
        marginRight: -10,
        backgroundColor: 'black'
    },
    textInputAbout: {
        paddingLeft: 10,
        color: '#05375a',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        height: 50,
        color: "white",
        bottom: 90,
        textAlign: 'left',
        marginTop: 10,
        marginLeft: -10,
        marginRight: -10,
        backgroundColor: 'black'
    },
    aboutText: {
        color: "white",
        bottom: 90,
        fontFamily: 'AvenirLTStd-Black',
        fontSize: 18,
        left: 5
    },
    schoolText: {
        color: "white",
        bottom: 80,
        fontFamily: 'AvenirLTStd-Black',
        fontSize: 18,
        left: 5
    },
    livingInText: {
        color: "white",
        bottom: 70,
        fontFamily: 'AvenirLTStd-Black',
        fontSize: 18,
        left: 5
    },
    textInputSchool: {
        paddingLeft: 10,
        color: '#05375a',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        color: "white",
        bottom: 80,
        height: 50,
        marginTop: 10,
        marginLeft: -10,
        marginRight: -10,
        backgroundColor: 'black',
        textAlign: 'left'
    },
    textInputLivingIn: {
        paddingLeft: 10,
        color: '#05375a',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        color: "white",
        bottom: 75,
        height: 50,
        textAlign: 'left',
        marginTop: 10,
        marginLeft: -10,
        marginRight: -10,
        backgroundColor: 'black'
    },
    jobTitleText: {
        color: "white",
        bottom: 65,
        fontFamily: 'AvenirLTStd-Black',
        fontSize: 18,
        left: 5
    },
    textInputJobTitle: {
        paddingLeft: 10,
        color: '#05375a',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 20,
        color: "white",
        bottom: 70,
        textAlign: 'left',
        marginTop: 10,
        height: 50,
        marginLeft: -10,
        marginRight: -10,
        backgroundColor: 'black'
    },
    companyText: {
        color: "white",
        bottom: 60,
        fontFamily: 'AvenirLTStd-Black',
        fontSize: 18,
        left: 5
    },
    imageStyle: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 25,
        width: 25
    },
    activityIndicator: {
        backgroundColor: "black",
        height: 700,
    },
    loaderCss: {
        top: 20,
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 1,
        height: '100%',
        width: '100%'
    },
    settingIcon: {
        width: 80,
        position: "absolute",
        right: 0,
        top: 0
    },

};

