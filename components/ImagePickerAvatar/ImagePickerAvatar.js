import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';

import { images } from '../../assets';
import * as ImagePicker from 'react-native-image-picker';
import styles from './ImagePickerAvatarStyles'

export function ImagePickerAvatar({ uri, image }) {
  const setPickerResponse = (file) => {
    if (file.assets && file.assets[0]) {
      image({ image: file.assets[0].uri, name: file.assets[0].fileName, type: file.assets[0].type })
    }
  }

  const onImageLibraryPress = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  return (
    <ImageBackground
      style={styles.imageBackground}>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={uri ? { uri } : images.avatar}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => onImageLibraryPress()}>
          <Image style={styles.addButtonIcon} source={images.addButton} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
