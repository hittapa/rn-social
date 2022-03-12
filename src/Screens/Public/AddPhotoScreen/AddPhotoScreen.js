import React, { useState } from 'react';
import {
    View,
    Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AuthService from '../../../Services/API/AuthService';
import styles from './AddPhotoScreenStyles';
import { ImagePickerAvatar } from '../../../../components/ImagePickerAvatar/ImagePickerAvatar';
import { useToast } from "react-native-toast-notifications";
import ContinueButton from '../../../../components/ContinueButton/ContinueButton'
import AppHeader from '../../../../components/AppHeader/AppHeader';

const AddPhotoScreen = ({ navigation }) => {

    const toast = useToast();
    const [images, setImages] = useState([]);
    const [data, setData] = useState({
        disabledButton: true,
        loading: false
    });

    const setImage = async (file, index) => {

        let image = images
        image[index] = file;
        setImages(image)
        let formData = new FormData();
        formData.append('image', {
            uri: images[index].image,
            name: images[index].name,
            type: images[index].type
        })
        setData({
            ...data,
            loading: true
        })
        await AuthService.UploadImage(formData)
            .then((resp) => {
                console.log(resp)
                if (resp.status_code === 200) {
                    setTimeout(() => {
                        setData({
                            ...data,
                            disabledButton: false,
                            loading: false
                        })
                    }, 4000);

                }
            })
            .catch((err) => {
                image[index] = undefined;
                setImages(image)
                toast.show('Something went wrong, Please try again.', {
                    type: "danger",
                    duration: 4000,
                    placement: 'top'
                });
                setData({
                    ...data,
                    loading: false
                })
            })


    }

    const handleContinue = async () => {
        navigation.navigate('SchoolNameScreen')
    }

    return (
        <View style={styles.container}>

            <AppHeader
                navigation={navigation}
                isBack={true}
                isSkip={false}
            />

            <View style={styles.header}>
                <Text style={styles.textHead}>Add Photos</Text>
                <Text style={styles.textHead2}>Please add at least one photo</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        {new Array(3).fill("").map((item, index) => {
                            return <ImagePickerAvatar key={index} uri={images[index] ? images[index].image : ''} image={(file) => setImage(file, index)} />
                        })}
                    </View>
                    <View>
                        {new Array(3).fill("").map((iten, index) => {
                            return <ImagePickerAvatar key={index + 3} uri={images[index + 3] ? images[index + 3].image : ''} image={(file) => setImage(file, index + 3)} />
                        })}
                    </View>
                    <View>
                        {new Array(3).fill("").map((iten, index) => {
                            return <ImagePickerAvatar key={index + 6} uri={images[index + 6] ? images[index + 6].image : ''} image={(file) => setImage(file, index + 6)} />
                        })}
                    </View>
                </View>

                <ContinueButton
                    loading={data.loading}
                    handleContinue={handleContinue}
                    disabledButton={data.disabledButton}
                />

            </Animatable.View>
        </View>
    );
};

export default AddPhotoScreen;
