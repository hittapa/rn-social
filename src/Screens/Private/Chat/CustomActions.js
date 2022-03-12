import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import PropTypes from 'prop-types';
import { ImagePickerModal } from '../../../../components/Modals/ImagePickerModal/ImagePickerModal';
import * as ImagePicker from 'react-native-image-picker';

export default class CustomActions extends React.Component {
  constructor(props) {
    super(props);
    this._images = [];
    this.state = {
      modalVisible: false,
      visible: false
    };
    this.onActionsPress = this.onActionsPress.bind(this);
    this.selectImages = this.selectImages.bind(this);
  }

  setImages(images) {
    this._images = images;
  }

  setPickerResponse = (file, type) => {
    if (file && file.assets) {
      if (type === 'photo') {
        const files = { image: file.assets[0].uri, file: { uri: file.assets[0].uri, name: file.assets[0].fileName, type: file.assets[0].type } };
        this.props.onSend(files);
      } else if (type === 'video') {
        const files = { video: file.assets[0].uri, file: { uri: file.assets[0].uri, name: file.assets[0].fileName, type: file.assets[0].type } };
        this.props.onSend(files)
      }
    }
  }

  onLibraryPress = (type) => {
    const options = {
      selectionLimit: 5,
      mediaType: type,
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, (file) => this.setPickerResponse(file, type));
    this.setState({ visible: false });
  };

  getImages() {
    return this._images;
  }

  setModalVisible(visible = false) {
    this.setState({ modalVisible: visible });
    this.setState({ visible: true });
  }

  onActionsPress() {
    const options = ['Choose Image From Library', 'Choose Video From Library', 'Cancel'];
    const cancelButtonIndex = options.length - 1;
    this.context.actionSheet().showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.onLibraryPress('photo')
            break;
          case 1:
            this.onLibraryPress('video')
            break;
          default:
        }
      });
  }

  selectImages(images) {
    this.setImages(images);
  }

  renderIcon() {
    if (this.props.icon) {
      return this.props.icon();
    }
    return (
      <View
        style={[styles.wrapper, this.props.wrapperStyle]}
      >
        <Text
          style={[styles.iconText, this.props.iconTextStyle]}
        >
          +
        </Text>
      </View>
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.onActionsPress}
      >
        {this.renderIcon()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

CustomActions.contextTypes = {
  actionSheet: PropTypes.func,
};

CustomActions.defaultProps = {
  onSend: () => { },
  options: {},
  icon: null,
  containerStyle: {},
  wrapperStyle: {},
  iconTextStyle: {},
};

CustomActions.propTypes = {
  onSend: PropTypes.func,
  options: PropTypes.object,
  icon: PropTypes.func
};