export default {
    modalView: {
        alignItems: "center",
        width: 360,
        height: "80%",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        marginTop: 30,
        marginBottom: 30,
        height: 60
    },
    popupButton: {
        alignItems: 'center',
        position: 'absolute',
        bottom: -60,
    },
    plans: {
        flexDirection: 'row'
    },
    plan: {
        backgroundColor: "white",
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: "grey",
        top: 50,
        height: 160,
        width: "33.33%",
        alignItems: 'center',

    },
    selectedPlan: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#E3004F",
        top: 50,
        height: 160,
        width: "33.33%",
        alignItems: 'center',
    },
    planTag: {
        top: -15,
        position: 'absolute',
        textAlignVertical: "center",
        color: "white",
        backgroundColor: "#E3004F",
        borderRadius: 50,
        height: 25,
        width: "90%",
        textAlign: "center"
    },
    selectedText: {
        color: "#E3004F"
    },
    periodText: {
        top: 10,
        fontSize: 40,
        fontFamily: 'AvenirLTStd-Book'
    },
    periodText2: {
        fontSize: 15,
        fontFamily: 'AvenirLTStd-Book'
    },
    priceText: {
        fontSize: 20,
        fontFamily: 'AvenirLTStd-Book',
        top:20,
    }
}