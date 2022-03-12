import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {

  container: {
    flex: 1,
  },
  containerAndroid: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cardAndroid: {
    height: hp('70%'),
    bottom: hp('1.5%'),
  },
  header: {
    alignItems: "center",
    marginTop: hp('5%')
  },
  headerAnd: {
    position: 'absolute',
    top: 10,
    alignItems: "center",
  },
  headerImage: {
    resizeMode: 'contain',
    width: wp('100%'),
    height: 31,
    alignSelf: 'center',
    zIndex: 1,
  },
  title: {
    color: "#4DF8FF",
    fontFamily: 'AvenirLTStd-Book',
    fontSize: hp('3%')
  },
  card: {
    height: hp('70%'),
    bottom: hp('13%')
  },
  firstIconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: wp('100%'),
    marginTop: hp('2.5%')
  },
  images: {
    resizeMode: 'contain',
    width: wp('8%'),
    height: hp('4%'),
    alignSelf: 'center',
    zIndex: 1,
  },
  dislike: {
    title: 'DISLIKE',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: 'red',
        color: 'red',
        borderWidth: 1,
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('5%'),
        height: hp('10%')
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: hp('15%')
      }
    }
  },
  like: {
    title: 'LIKE',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: 'green',
        color: 'green',
        borderWidth: 1,
        fontFamily: 'AvenirLTStd-Book',
        fontSize: hp('5%'),
        height: hp('10%')
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: hp('15%')
      }
    }
  },
  close: {
    resizeMode: 'contain',
    width: hp('10%'),
    height: hp('7.5%'),
    bottom: hp('1%')
  },
  right: {
    resizeMode: 'contain',
    width: hp('10%'),
    height: hp('7.5%'),
    bottom: hp('1%')
  },
  center: {
    resizeMode: 'contain',
    width: hp('10%'),
    height: hp('7.5%'),
    bottom: hp('1%'),
  },
  noCard: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: hp('5%'),
    color: "#4DF8FF",
    textAlign: 'center'
  },
  activityIndicator: {
    height: hp("100%"),
    width: wp('100%'),
    position: 'absolute',
    zIndex: 1
  }
};