import * as React from 'react';
import { View, StatusBar, TouchableOpacity, Text, Image, Platform } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

// Images
import Images from '../../assets/Images';

// Components
import { Bird, Physics, Floor } from '../../components';

// Config
import Constants from '../../constants';
import Styles from '../../constants/styles';

// Functions
import { resetPipes } from '../../functions';
import LinearGradient from 'react-native-linear-gradient';
import Blink from '../../components/Blink';
import Popup from '../../../Private/Home/Popup';
import AuthService from '../../../../Services/API/AuthService';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.gameEngine = null;
    this.entities = this.setupWorld();

    this.state = {
      running: true,
      score: 0,
      touched: false,
      openPremiumPopup: false,
    }
  }

  setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

    world.gravity.y = 0.0;

    let bird = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT / 2, Constants.BIRD_WIDTH, Constants.BIRD_HEIGHT);

    let floor1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT,
      Constants.MAX_WIDTH + 50,
      50,
      { isStatic: true }
    );

    let floor2 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 3),
      Constants.MAX_HEIGHT,
      Constants.MAX_WIDTH + 4,
      50,
      { isStatic: true }
    );

    Matter.World.add(world, [bird, floor1, floor2]);
    Matter.Events.on(engine, 'collisionStart', (event) => {
      let pairs = event.pairs;

      this.gameEngine.dispatch({ type: "game-over" });
    });

    return {
      physics: { engine: engine, world: world },
      floor1: { body: floor1, renderer: Floor },
      floor2: { body: floor2, renderer: Floor },
      bird: { body: bird, pose: 1, renderer: Bird }
    };
  }

  onEvent = async (e) => {
    if (e.type === "game-over") {
      this.setState({
        running: false,
        touched: false
      })
    } else if (e.type === "score") {
      this.setState({
        score: this.state.score + 1
      });
      if (this.state.score == 10) {
        await AuthService.gameWin().then(res => {
          if (res.status_code === 200) {
            setTimeout(() => {
              this.props.navigation.navigate('CelebrityScreen');
            }, 1000)
          }
        })
      }
    }

    if (e.type === 'touched') {
      this.setState({
        touched: true
      })
    }
  }

  reset = () => {
    resetPipes();
    this.gameEngine.swap(this.setupWorld());
    this.setState({
      running: true,
      score: 0
    })
  }

  restart = () => {
    this.setState({
      running: true,
      score: 0,
      touched: false
    })
    this.reset()
  }

  handlePremiumClose = () => {
    this.setState({
      openPremiumPopup: false
    })
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 40, position: 'absolute', bottom: Platform.OS === 'ios' ? 40 : 20, zIndex: 2000 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("CelebrityScreen")}>
            <Image
              source={require('../../../../../assets/swipe-star.png')}
              style={Styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("SawProfileScreen")}>
            <Text style={{ color: "white", backgroundColor: "#E3004F", borderRadius: 50, width: 20, position: "absolute", left: 20, bottom: 17, textAlign: "center" }}>{0}</Text>
            <Image
              source={require('../../../../../assets/diamond.png')}
              style={{...Styles.imageStyle, tintColor: '#c2cdd3'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("MatchesChatScreen")}>
            <Image
              source={require('../../../../../assets/chat.png')}
              style={Styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("EditProfileScreen")}>
            <Image
              source={require('../../../../../assets/greyUser.png')}
              style={Styles.imageStyle}
            />
          </TouchableOpacity>
        </View>
        <GameEngine
          ref={(ref) => { this.gameEngine = ref; }}
          style={Styles.gameContainer}
          systems={[Physics]}
          running={this.state.running}
          onEvent={this.onEvent}
          entities={this.entities}
        >
          <StatusBar hidden={true} />
        </GameEngine>
        <View style={Styles.topHeaderText}>
          <Image style={Styles.headerImage} source={Images.header} />
        </View>
        <View style={Styles.scoreWrapper}>
          <LinearGradient colors={['#4DF8FF01', '#FF006B']} start={{ x: 0, y: 0.1 }} end={{ x: 0, y: 1 }} >
            <View style={Styles.gradient}>
              <Text style={Styles.skipText}>To Skip The Wait</Text>
              <Text style={Styles.score}>{Math.max(10 - this.state.score, 0)}</Text>
            </View>
          </LinearGradient>
        </View>
        {
          !this.state.touched && (
            <Blink duration={1000} repeat={2}>
              <Text style={Styles.startText}>Tap to start</Text>
            </Blink>
          )
        }

        {!this.state.running && this.state.score < 10 && (
          <View style={Styles.wrapper}>
            <LinearGradient colors={['#00000001', '#00FFFF']} start={{ x: 0, y: 0.1 }} end={{ x: 0, y: 1 }}>
              <View style={Styles.winnerWrapper}>
                <Text style={{ ...Styles.winnerText, color: 'white', fontSize: 36 }}>Try Again</Text>
                <TouchableOpacity style={Styles.button} onPress={() => this.setState({ openPremiumPopup: true })}>
                  <Text style={Styles.buttonText}>Skip the Wait</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.playButton} onPress={() => this.restart()}>
                  <Image style={Styles.playIcon} source={require('../../../../../assets/reload.png')} />
                </TouchableOpacity>
                <View style={{ height: 40 }}></View>
              </View>
            </LinearGradient>
          </View>
        )}
        {
          this.state.score === 10 && (
            <View style={Styles.wrapper}>
              <LinearGradient colors={['#00000001', '#FF006B']} start={{ x: 0, y: 0.1 }} end={{ x: 0, y: 1 }}>
                <View style={Styles.winnerWrapper}>
                  <Image style={Styles.crown} source={Images.crown} />
                  <Text style={Styles.winnerText}>WINNER!</Text>
                  {/* <TouchableOpacity style={Styles.button}>
                    <Text style={Styles.buttonText}>Skip the Wait</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity style={Styles.playButton} onPress={() => this.restart()}>
                    <Image style={Styles.playIcon} source={Images.play} />
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          )
        }

        <Popup
          premiumPopup={{ visible: this.state.openPremiumPopup, handleClose: this.handlePremiumClose }}
        // skipWait={{ visible: handleskipPopup, handleClose: handleSkipClose }}
        />

      </View>
    );
  }
}

export default Game;
