import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  BackHandler,
  TextInput,
} from 'react-native';

import { GiftedChat, Actions, Bubble } from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';
import { NavigationBar } from 'navigationbar-react-native';
import AuthService from '../../../Services/API/AuthService';
import Video from 'react-native-video';
import AuthLogic from '../../../Utils/AuthLogic';
import Popup from '../Home/Popup';
import { ActivityIndicator } from 'react-native-paper';

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: false,
      isLoadingEarlier: false,
      videoPopup: false
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.senderId = null;
    this.receiverId = this.props?.route?.params?.id;
    this._isAlright = null;
    this.lastMsgId = null;
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.interval = setInterval(() => {
      this.getChats(this.lastMsgId)
    }, 10000);
  }

  async UNSAFE_componentWillMount() {
    this._isMounted = true;
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    this.senderId = parseInt(await AuthLogic.GetUser())
    this.getChats();
  }

  handleBackButtonClick() {
    clearInterval(this.interval)
    return false;
  }


  async getChats(lastMsgId) {

    const checkImage = /(https?:\/\/.*\.(?:png|jpg|jpeg))/;
    if (lastMsgId) {
      await AuthService.GetPollChat(this.receiverId, this.senderId, lastMsgId)
        .then(async (response) => {
          if (response.chats) {
            let data = response.chats.map((chat, index) => {
              this.lastMsgId = chat.id;
              let obj = {
                _id: 'id' + Math.floor(Math.random() * Date.now()),
                createdAt: chat.created_at,
                user: {
                  _id: chat.sender.id,
                  name: chat.sender.full_name,
                }
              }
              if (chat.message_body !== "null") {
                obj.text = chat.message_body
              } else if (chat.media_url) {
                if (checkImage.test(chat.media_url)) {
                  obj.image = chat.media_url
                } else obj.video = chat.media_url
              }
              return obj;
            })

            this.setState((previousState) => {
              return {
                messages: GiftedChat.append(previousState.messages, data.reverse()),
              };
            });
          } else {
            toast.show(response.message, {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          }
        })
        .catch((err) => {
          if (err.message) {
            toast.show(err.message, {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          } else {
            toast.show("Something went wrong, Please try again.", {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          }
        })
    } else {
      await AuthService.GetChat(this.receiverId, this.senderId)
        .then(async (response) => {
          if (response.chats) {
            let data = response.chats.map((chat, index) => {
              this.lastMsgId = chat.id;
              let obj = {
                _id: 'id' + Math.floor(Math.random() * Date.now()),
                createdAt: chat.created_at,
                user: {
                  _id: chat.sender.id,
                  name: chat.sender.full_name,
                }
              }
              if (chat.message_body !== "null") {
                obj.text = chat.message_body
              } else if (chat.media_url) {
                if (checkImage.test(chat.media_url)) {
                  obj.image = chat.media_url
                } else obj.video = chat.media_url
              }
              return obj;
            })

            this.setState((previousState) => {
              return {
                messages: GiftedChat.append(previousState.messages, data.reverse()),
              };
            });
          } else {
            toast.show(response.message, {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          }
        })
        .catch((err) => {
          if (err.message) {
            toast.show(err.message, {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          } else {
            toast.show("Something went wrong, Please try again.", {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          }
        })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  onLoadEarlier() {
    // this.setState((previousState) => {
    //   return {
    //     isLoadingEarlier: true,
    //   };
    // });

    // setTimeout(() => {
    //   if (this._isMounted === true) {
    //     this.setState((previousState) => {
    //       return {
    //         messages: GiftedChat.prepend(previousState.messages, require('./old_messages.js')),
    //         loadEarlier: false,
    //         isLoadingEarlier: false,
    //       };
    //     });
    //   }
    // }, 1000); // simulating network
  }

  async onSend(messages = []) {
    this.setState((previousState) => {
      return {
        typingText: true
      };
    });
    console.log(this.state.typingText)
    if (messages[0].text) {
      await AuthService.AddMessage(this.senderId, this.receiverId, messages[0].text)
        .then(async (response) => {
          if (response && response.chat) {
            this.lastMsgId = response.chat.id
            this.setState((previousState) => {
              return {
                typingText: false
              };
            });
            this.setState((previousState) => {
              return {
                messages: GiftedChat.append(previousState.messages, messages),
              };
            });
          } else {
            toast.show(response.message, {
              type: "danger",
              duration: 4000,
              placement: 'top'
            });
          }
        })
        .catch((err) => {
          if (err.message) {
            toast.show(err.message, {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          } else {
            toast.show("Something went wrong, Please try again.", {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          }
        })
    } else if (messages[0].image) {
      let data = new FormData();
      data.append('imageupload', {
        uri: messages[0].file.uri,
        name: messages[0].file.name,
        type: messages[0].file.type
      })
      await AuthService.AddMessage(this.senderId, this.receiverId, null, data)
        .then(async (response) => {
          if (response && response.chat) {
            this.lastMsgId = response.chat.id
            this.setState((previousState) => {
              return {
                typingText: false
              };
            });
            this.setState((previousState) => {
              return {
                messages: GiftedChat.append(previousState.messages, messages),
              };
            });
          } else {
            toast.show(response.message, {
              type: "danger",
              duration: 4000,
              placement: 'top'
            });
          }
        })
        .catch((err) => {
          if (err.message) {
            toast.show(err.message, {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          } else {
            toast.show("Something went wrong, Please try again.", {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          }
        })
    } else if (messages[0].video) {
      let data = new FormData();
      data.append('videoupload', {
        uri: messages[0].file.uri,
        name: messages[0].file.name,
        type: messages[0].file.type
      })
      await AuthService.AddMessage(this.senderId, this.receiverId, null, data)
        .then(async (response) => {
          if (response && response.chat) {
            this.lastMsgId = response.chat.id
            this.setState((previousState) => {
              return {
                typingText: false
              };
            });
            this.setState((previousState) => {
              return {
                messages: GiftedChat.append(previousState.messages, messages),
              };
            });
          } else {
            toast.show(response.message, {
              type: "danger",
              duration: 4000,
              placement: 'top'
            });
          }
        })
        .catch((err) => {
          if (err.message) {
            toast.show(err.message, {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          } else {
            toast.show("Something went wrong, Please try again.", {
              type: "danger",
              duration: 3000,
              placement: 'top'
            });
          }
        })
    }
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
        }),
      };
    });
  }

  renderCustomActions(props) {
    if (Platform.OS !== 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => { },
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }


  handleChangeText(text) {
    console.log(text);
    let mgs = [...this.state.messages];
    mgs[0] = text;
    console.log(mgs);
    this.setState({
      messages: mgs
    })
  }

  handleSendMessage = () => {
    console.log(this.state.messages);
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#4DF8FF',
          },
          left: {
            backgroundColor: '#DCF6F7',
          },
        }}
        textStyle={{
          right: {
            color: "#000000"
          },
        }}
      />
    );
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <ActivityIndicator size="small" style={styles.activityIndicator} color="#4df8ff" />
        </View>
      );
    }
    return null;
  }
  renderInputToolbar(props) {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageText}
          multiline
          numberOfLines={20}
          placeholder='Message..'
          placeholderTextColor={'#e0e0e0'}
          // onChangeText={this.handleChangeText}
        />
        {/* <TouchableOpacity style={styles.sendButton} onPress={props.onSend}>
          <Image style={styles.pictureStyle} source={require('../../../../assets/send.png')} />
        </TouchableOpacity> */}
      </View>
    );
  }

  ComponentLeft = () => {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start' }} >
        <TouchableOpacity onPress={() => {
          clearInterval(this.interval)
          this.props.navigation.navigate("MatchesChatScreen")
        }}>
          <Image
            source={require('../../../../assets/back.png')}
            style={{ resizeMode: 'contain', width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  ComponentCenter = () => {
    return (
      <View style={{ flex: 1, height: 140, paddingTop: 20 }}>
        <Image
          source={{ uri: this.props?.route?.params?.url }}
          style={styles.profileImage}
        />
        <Text style={styles.profileNameColor}>{this.props?.route?.params?.name}</Text>
      </View>
    );
  };

  handleVideoPopup = (url) => {
    this.setState({ videoPopup: true, url: url })
  }

  handlePopupClose = () => {
    this.setState({ videoPopup: false })
  }

  renderMessageVideo = (props) => {
    const { currentMessage } = props;
    return (
      <TouchableOpacity style={{ height: 200, width: 200 }} onPress={() => this.handleVideoPopup(currentMessage.video)}>
        <View style={{ height: 200, width: 200 }}>
          <Video source={{ uri: currentMessage.video }}
            ref={(ref) => {
              this.player = ref
            }}
            resizeMode='contain'
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  onInputTextChanged = (text) => {
    console.log(text);
  }

  render() {
    return (

      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <NavigationBar
          componentLeft={this.ComponentLeft}
          componentCenter={this.ComponentCenter}
          navigationBarStyle={{ backgroundColor: '#000', height: 140, zIndex: 1, borderBottomWidth: 1, borderBottomColor: '#FFFFFF' }}
        />
        <View style={{ textAlign: "center", top: 10, zIndex: 12 }}>
          <Image
            source={require('../../../../assets/header.png')}
            style={styles.headerImage}
          />
        </View>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          loadEarlier={this.state.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          renderMessageVideo={this.renderMessageVideo}
          isLoadingEarlier={this.state.isLoadingEarlier}
          renderAvatar={() => null}
          showAvatarForEveryMessage={true}
          user={{
            _id: this.senderId,
          }}
          showUserAvatar={false}
          renderActions={this.renderCustomActions}
          renderBubble={this.renderBubble}
          renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
          renderInputToolbar={this.renderInputToolbar}
        />
        <Popup navigation={this.props.navigation} videoPopup={{ url: this.state.url, visible: this.state.videoPopup, handleContinue: this.handlePopupClose }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'flex-end'
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    minHeight: 50,
    maxHeight: 100,
    borderRadius: 30,
    borderColor: '#505050',
    borderWidth: 2,
    paddingLeft: 16,
    paddingRight: 65,
    paddingTop: 8,
    paddingBottom: 8,
    color: '#707070',
    flexDirection: 'row'
    // backgroundColor: 'white'
  },
  messageText: {
    color: '#e0e0e0',
    fontSize: 20,
    width: '100%'
  },
  footerText: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 14,
    color: '#aaa',
  },
  profileNameColor: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center"
  },
  profileImage: {
    resizeMode: 'cover',
    alignSelf: 'center',
    width: 80,
    height: 80,
    zIndex: 1,
    borderRadius: 50,
  },
  headerImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 31,
    alignSelf: 'center',
    zIndex: 1,
  },
  sendButton: {
    width: 40,
    position: 'absolute',
    right: 5,
  },
  pictureStyle: {
    width: 40,
    height: 35,
    marginTop: 5,
    resizeMode: 'contain'
  }
});