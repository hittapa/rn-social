import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40
  },
  header: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    zIndex: 1,
    top: 100,
    left: 110
  },
  doneText: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 20,
    color: "white",
    textAlign: "left",
    color: "#4DF8FF",
    marginLeft: 10,
    marginTop: 3
  },
  editInfoText: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 25,
    color: "white",
    textAlign: "center",
    position: "absolute",
    left: 130
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
    marginRight: 20
  },
  previewText: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 25,
    color: "white",
    marginLeft: 20
  },
  child: {
    width: wp('100%'),
    justifyContent: 'flex-end',
  },
  image: {
    resizeMode: 'contain',
    width: wp('100%'),
    position: 'absolute',
    height: hp('85%'),
    alignSelf: 'center',
    top: 40,
    borderRadius: 15
  },
  linearGradient: {
    bottom: hp('0%'),
    width: wp('100%'),
  },
  footer: {
    left: wp('4%'),
    paddingTop: hp('5%'),
    paddingBottom: hp('3%')
  },
  name: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: hp('3%'),
    color: 'white',
    fontWeight: 'bold'
  },
  info: {
    width: wp('66%')
  },
  infoText: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: hp('2.5%'),
    color: 'white',
    marginBottom: hp('20%')
  },
  defaultImage: {
    resizeMode: 'contain',
    width: wp('50%'),
    position: 'absolute',
    height: hp('85%'),
    alignSelf: 'center',
    bottom: hp('10%')
  },
  shadowStyle: {
    top: hp('19.5%'),
    // bottom: hp('0%'),
    width: wp('100%'),
    height: hp('20%'),
    // borderRadius:15
  }
};
