import { StyleSheet } from 'react-native';
import Constants from '../constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020'
  },
  backgroundImage: {
    position: 'absolute',
    top: 150,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT
  },
  gameContainer: {
    position: 'absolute',
    top: 150,
    bottom: 0,
    left: 0,
    right: 0,
  },
  fullScreenButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameOverText: {
    color: 'white',
    fontSize: 48,
    // fontFamily: '04b_19'
  },
  startText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'AvenirLTStd-Book',
    position: 'absolute',
    top: Constants.MAX_HEIGHT * .4,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  gameOverSubText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'AvenirLTStd-Book',
  },
  score: {
    // position: 'absolute',
    color: 'white',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 33,
    // top: 0,
    paddingTop: 10,
    textShadowColor: '#444444',
    width: '100%',
    textAlign: 'center',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    // textShadowRadius: 2,
    // fontFamily: '04b_19'
  },
  scoreWrapper: {
    position: 'absolute',
    top: 20,
    left: 0,
    // backgroundColor: '#E5E5E5',
    borderBottomColor: '#4DF8FF',
    borderBottomWidth: 4,
    width: '100%',
    // height: 150,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 30,
  },
  gradient: {
    height: 100,
    position: 'relative',
    display: 'flex'
  },
  topHeaderText: {
    top: 35,
    color: '#4de',
    fontSize: 20,
    fontFamily: 'AvenirLTStd-Book',
    width: '100%',
    height: 30,
    resizeMode: 'contain',
    textAlign: 'center',
    textShadowColor: '#444444',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 2,
    // fontFamily: '04b_19',
  },
  headerImage: {
    width: 'auto',
    height: 30,
    resizeMode: 'contain'
  },
  skipText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'AvenirLTStd-Book',
    width: '100%',
    textAlign: 'center',
    textShadowColor: '#444444',
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingTop: 20,
  },
  winnerWrapper: {
    // height: '100%',
    marginTop: 100,
    height: Constants.MAX_HEIGHT,
  },
  wrapper: {
    backgroundColor: 'black',
    marginTop: 124,
    // height: Constants.MAX_HEIGHT - 200,
    zIndex: 2001
  },
  crown: {
    width: 88,
    height: 73,
    resizeMode: 'contain',
    left: Constants.MAX_WIDTH / 2 - 44
  },
  winnerText: {
    textAlign: 'center',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 48,
    fontWeight: '800',
    fontFamily: 'Avenir',
    fontStyle: 'italic',
    color: '#4DF8FF',
    marginTop: 20
  },
  button: {
    width: 277,
    height: 60,
    left: Constants.MAX_WIDTH / 2 - 138.5,
    borderRadius: 30,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#4DF8FF',
    justifyContent: 'center',
    marginTop: 50
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 22,
    fontWeight: '800',
    fontFamily: 'Avenir',
    color: '#000000',
  },
  playButton: {
    width: 72,
    height: 68,
    left: Constants.MAX_WIDTH / 2 - 36,
    borderRadius: 36,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#C2CDD3',
    justifyContent: 'center',
    marginTop: 50
  },
  playIcon: {
    width: 29,
    height: 29,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: 31,
    height: 31,
    alignSelf: 'center',
    zIndex: 1,
  },
});

export default Styles;
