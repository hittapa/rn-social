import React from 'react';
import { SafeAreaView, Text, Image, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import styles from './ImagePickerModalStyles';

import { images } from '../../../assets';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress, }) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Image style={styles.buttonIcon} source={images.image} />
          <Text style={styles.buttonText}>Library</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Image style={styles.buttonIcon} source={images.camera} />
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

