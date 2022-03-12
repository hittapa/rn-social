import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    width: 60,
    height: 60,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  starLikeButton: {
    marginRight: 90,
    marginLeft: 90,
    height: 90,
    paddingTop: 20,
    marginTop: 60,
    backgroundColor: 'black',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  remainingText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
    textAlignVertical: 'center'
  },
  getStarLikesText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 20,
    textAlignVertical: 'center'
  },
  starLikesImage: {
    resizeMode: 'contain',
    width: 56,
    height: 49,
    marginLeft: 75,
    position: "absolute",
    top: -35
  },
  discovery: {
    marginTop: 30,
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 20,
    padding: 10,
    paddingBottom: 10,
    textAlignVertical: 'center'
  },
  showMe: {
    flex: 1,
    marginTop: 20,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  showMeAnswer: {
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
    marginTop: 20,
    marginRight: 10,
    paddingBottom: 10,
  },
  showMeAnswerForward: {
    marginTop: 25,
    width: 20,
    height: 20
  },
  iamA: {
    flex: 1,
    marginTop: 20,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  iamAAnswer: {
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
    marginTop: 20,
    marginRight: 10,
    paddingBottom: 10,
  },
  iamAAnswerForward: {
    marginTop: 25,
    width: 20,
    height: 20
  },
  account: {
    marginTop: 15,
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 20,
    padding: 10,
    paddingBottom: 10,
    textAlignVertical: 'center'
  },
  phoneNumber: {
    flex: 1,
    marginTop: 20,
    color: '#fff',
    marginLeft: 20,
    paddingBottom: 10,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  phoneNumberForward: {
    marginTop: 25,
    width: 20,
    height: 20
  },
  email: {
    flex: 1,
    marginTop: 20,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
    paddingBottom: 10
  },
  emailForward: {
    marginTop: 25,
    width: 20,
    height: 20
  },
  support: {
    marginTop: 15,
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 20,
    padding: 10,
    textAlignVertical: 'center'
  },
  helpAndSupport: {
    flex: 1,
    paddingBottom: 10,
    marginTop: 20,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  privacyPolicy: {
    flex: 1,
    paddingBottom: 10,
    marginTop: 20,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  termsOfService: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    paddingBottom: 10,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  language: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  radius: {
    flex: 1,
    marginTop: 30,
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 20,
    padding: 10,
    paddingBottom: 10,
    textAlignVertical: 'center'
  },
  radiusAnswer: {
    marginTop: 30,
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
    padding: 10,
    textAlignVertical: 'center'
  },
  age: {
    flex: 1,
    marginTop: 30,
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 20,
    padding: 10,
    paddingBottom: 10,
    textAlignVertical: 'center'
  },
  ageAnswer: {
    marginTop: 30,
    color: '#fff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
    padding: 10,
    textAlignVertical: 'center'
  },
  blankLine: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    paddingBottom: 10,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  logOut: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    paddingBottom: 10,
    color: '#fff',
    marginLeft: 150,
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  images: {
    resizeMode: 'contain',
    width: wp('17%'),
    height: hp('7%'),
    alignSelf: 'center',
    zIndex: 1,
    left: wp('40%')
  },
  activityIndicator: {
    backgroundColor: "black",
    height: 700,
  },
  root: {
    alignItems: 'stretch',
    flex: 1,
  },
};
