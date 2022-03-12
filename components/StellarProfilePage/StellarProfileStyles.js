import { Platform } from "react-native";

export default {
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewButton: {
        width: 230,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },
    viewButton2: {
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: 400
    },
    textSign: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle: {
        resizeMode: 'contain',
        width: 31,
        height: 31,
        alignSelf: 'center',
        zIndex: 1,
    },
    roundImageStyle: {
        top: 100,
        height: 230,
        width: 230,
        borderRadius: 120,
        borderWidth: 6,
        borderColor: "#4DF8FF"
    },
    likes: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        left: 40
    },
    views: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 25,
        right: 40
    },
    notificationViewsText: {
        color: "white",
        backgroundColor: "#E3004F",
        borderRadius: 50,
        width: 20,
        position: "absolute",
        left: 30,
        bottom: 17,
        textAlign: "center",

    },
    notificationLikesText: {
        color: "white",
        backgroundColor: "#E3004F",
        borderRadius: 50,
        width: 20,
        position: "absolute",
        left: 100,
        bottom: 17,
        textAlign: "center",
        position: "absolute"
    },
    stellarFont: {
        color: "#E3004F",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 34,
        bottom: Platform.OS === 'ios' ? 105 : 80,
        left: "35%",
        position: 'absolute'
    }

};
