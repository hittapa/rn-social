import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    ActivityIndicator,
    Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AuthService from '../../../Services/API/AuthService';
import styles from './EditProfileScreenStyles';
import { ImagePickerAvatar } from '../../../../components/ImagePickerAvatar/ImagePickerAvatar';
import { useToast } from "react-native-toast-notifications";
import Popup from '../Home/Popup';

const EditProfileScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [data, setData] = useState({
        school_name: '',
        about_me: '',
        job_title: '',
        company: '',
        instagram_profile_url: '',
        check_textInputChange: false,
    });
    const [handleInstaPopup, setHandleInstaPopup] = useState(false);
    const [connect, setConnect] = useState(false);
    const [handleRequestUpgradePopup, setHandleRequestUpgradePopup] = useState(false);
    const [messageUsPopup, setMessageUsPopup] = useState(false);
    const [requestPopup, setRequestPopup] = useState(false);
    const toast = useToast();

    const setImage = async (file, index) => {
        setImageLoading(true)
        let image = images
        image[index] = file;
        setImages(image)
        let formData = new FormData();
        formData.append('image', {
            uri: images[index].image,
            name: images[index].name,
            type: images[index].type
        })
        await AuthService.UploadImage(formData)
            .then((resp) => {
                if (resp.status_code === 200) {
                    setImageLoading(false)
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
                setImageLoading(false)
            })
    }

    useEffect(async () => {
        setLoading(true)
        if (loading) return;
        await AuthService.GetProfile()
            .then(async (response) => {
                if (response.status_code === 200) {
                    setData(response.data)
                    let image = images
                    response.data?.user_images.map(({ url }, index) => {
                        image[index] = { image: url };
                    })
                    setImages(image)
                    if (response.data.instagram_profile_url !== 0) {
                        setConnect(true);
                    }
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
        setLoading(false)
    }, []);

    const textInputChange = (val, name) => {
        setData({
            ...data,
            [name]: val
        });
    }

    const handleDone = async () => {
        setLoading(true)
        await AuthService.UpdateProfile(data.school_name, data.about_me, data.job_title, data.company)
            .then(async (response) => {
                if (response.status_code === 200) {
                    toast.show(response.message, {
                        type: "success",
                        duration: 4000,
                        placement: 'top'
                    });
                    setData(response.data.user)
                    navigation.navigate('CelebrityScreen')
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
        setLoading(false)
    }

    const handleAdd = async (text) => {
        if (text || text === 0) {
            await AuthService.ConnectInstagram(text)
                .then(async (response) => {
                    if (response.status_code === 200) {
                        setHandleInstaPopup(false);
                        if (text !== 0) {
                            setConnect(true)
                            setData({
                                ...data,
                                instagram_profile_url: response.data.user.instagram_profile_url,
                            });
                            setHandleRequestUpgradePopup(true)
                        } else {
                            setConnect(false)
                            setData({
                                ...data,
                                instagram_profile_url: 0,
                            });
                        }
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

    const closeInstaPopup = () => {
        setHandleInstaPopup(false);
    }

    const handleRequestUpgrade = async () => {
        await AuthService.RequestUpgrade(data.instagram_profile_url)
            .then(async (response) => {
                if (response.status_code === 200) {
                    setHandleRequestUpgradePopup(false)
                    setMessageUsPopup(true);
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

    const closeRequestUpgrade = () => {
        setHandleRequestUpgradePopup(false)
    }

    const handleMessageUsPopup = () => {
        setMessageUsPopup(false);
        setRequestPopup(true)

    }

    const closeMessageUsPopup = () => {
        setMessageUsPopup(false);
    }

    const closeRequestPopup = () => {
        setRequestPopup(false)
    }

    const handlePreview = () => {
        let userImages = images;
        userImages = userImages.filter(function (element) {
            return element !== undefined;
        });
        navigation.navigate('PreviewProfileScreen', { userImages, data })
    }

    return (
        <ScrollView style={styles.container}>
            {loading === true ?
                <ActivityIndicator size="large" style={styles.activityIndicator} color="#4df8ff" />
                :
                <>
                    <View style={{ justifyContent: "space-between", flex: 1, flexDirection: 'row', marginTop: Platform.OS === 'ios' ? 40 : 20, alignItems: 'center' }}>
                        <View style={{ width: 80 }}>
                            <TouchableOpacity
                                onPress={() => handleDone()}>
                                <Text style={styles.doneText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.editInfoText} onPress={() => navigation.navigate("TutorialScreen")}>Edit Info</Text>
                        <View style={styles.settingIcon} >
                            <TouchableOpacity
                                onPress={() => navigation.navigate("SettingsScreen", { gender: data.gender, show_me_profile: data.show_me_profile, phone_number: data.phone_number })}>
                                <Image
                                    source={require('../../../../assets/settings.png')}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditProfileScreen')} style={{ width: '50%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'white' }}>
                            <Text style={styles.editText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePreview()} style={{ width: '50%', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.previewText}>Preview</Text>
                        </TouchableOpacity>
                    </View>

                    <Animatable.View
                        animation="fadeInUpBig"
                        style={[styles.footer]}
                    >
                        <View style={styles.action}>
                            {
                                imageLoading === true ?
                                    <ActivityIndicator size="large" style={styles.loaderCss} color="#4df8ff" />
                                    : null
                            }
                            <View style={styles.screen}>
                                <View style={styles.avtarDesign1}>
                                    <View style={{ flexDirection: 'row' }}>
                                        {new Array(3).fill("").map((item, index) => {
                                            return <ImagePickerAvatar key={index} uri={images[index] ? images[index].image : ''} image={(file) => setImage(file, index)} />
                                        })}
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        {new Array(3).fill("").map((iten, index) => {
                                            return <ImagePickerAvatar key={index + 3} uri={images[index + 3] ? images[index + 3].image : ''} image={(file) => setImage(file, index + 3)} />
                                        })}
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        {new Array(3).fill("").map((iten, index) => {
                                            return <ImagePickerAvatar key={index + 6} uri={images[index + 6] ? images[index + 6].image : ''} image={(file) => setImage(file, index + 6)} />
                                        })}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.instagramText}>INSTAGRAM PHOTOS</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 80
                            }}
                        />
                        <View style={styles.instatext}>
                            <Image
                                style={styles.instagramImage}
                                source={require('../../../../assets/instagram.png')}
                            />
                            <Text
                                style={data?.instagram_profile_url === 0 ? styles.connectText : styles.instaIdText}>{data?.instagram_profile_url === 0 ? 'Connect Instagram' : data.instagram_profile_url}</Text>

                            {connect ?
                                <View style={styles.connectButton}>
                                    <TouchableOpacity onPress={() => handleAdd(0)}>
                                        < Animatable.Image
                                            animation="bounceIn"
                                            duraton="1500"
                                            source={require('../../../../assets/smallCloseImage.png')}
                                            style={styles.closeBtn}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                </View>
                                : <TouchableOpacity style={styles.connectButton}
                                    onPress={() => setHandleInstaPopup(true)}>
                                    <Text style={styles.connectBtnText}>CONNECT</Text>
                                </TouchableOpacity>
                            }
                        </View>
                        {/* <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 100
                            }}
                        />
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 70
                            }}
                        /> */}
                        <View>
                            <Text style={styles.verifyText}>Verified on IG?</Text>
                            <TouchableOpacity style={styles.requestButton}
                                onPress={() => connect ? setHandleRequestUpgradePopup(true) : setHandleInstaPopup(true)}>
                                <Text style={styles.requestButtonText}>Request Upgrade</Text>
                            </TouchableOpacity>
                        </View>

                        {/* {/ About Me /} */}
                        <View>
                            <Text style={styles.aboutText}>ABOUT ME</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 80
                            }}
                        />
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 120
                            }}
                        />
                        <View>
                            <TextInput
                                defaultValue={data.about_me ? data.about_me : ""}
                                textAlignVertical={'top'}
                                placeholder="About Me"
                                placeholderTextColor="#666666"
                                multiline={true}
                                numberOfLines={5}
                                maxLength={500}
                                textAlign="center"
                                style={[styles.textInputAbout
                                ]}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val, 'about_me')}
                            />
                        </View>

                        {/* {/ School /} */}
                        <View>
                            <Text style={styles.schoolText}>SCHOOL</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 70
                            }}
                        />
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 110
                            }}
                        />
                        <View>
                            <TextInput
                                defaultValue={data.school_name ? data.school_name : ""}
                                textAlignVertical={'top'}
                                placeholder="School"
                                placeholderTextColor="#666666"
                                textAlign="center"
                                style={[styles.textInputSchool
                                ]}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val, 'school_name')}
                            />
                        </View>

                        {/* {/ Living In /} */}
                        <View>
                            <Text style={styles.livingInText}>LIVING IN</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 65
                            }}
                        />
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 100
                            }}
                        />
                        <View>
                            <TextInput
                                textAlignVertical={'top'}
                                placeholder="Living In"
                                placeholderTextColor="#666666"
                                textAlign="center"
                                style={[styles.textInputLivingIn
                                ]}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val, 'livin_in')}
                            />
                        </View>

                        {/* {/ Job Title /} */}
                        <View>
                            <Text style={styles.jobTitleText}>JOB TITLE</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 60
                            }}
                        />
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 95
                            }}
                        />
                        <View>
                            <TextInput
                                value={data.job_title ? data.job_title : ""}
                                textAlignVertical={'top'}
                                placeholder="Job Title"
                                placeholderTextColor="#666666"
                                textAlign="center"
                                style={[styles.textInputJobTitle
                                ]}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val, 'job_title')}
                            />
                        </View>

                        {/* {/ Company /} */}
                        <View>
                            <Text style={styles.companyText}>COMPANY</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 55
                            }}
                        />
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 90
                            }}
                        />
                        <View>
                            <TextInput
                                defaultValue={data.company ? data.company : ""}
                                textAlignVertical={'top'}
                                placeholder="Company"
                                placeholderTextColor="#666666"
                                textAlign="center"
                                style={[styles.textInput
                                ]}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val, 'company')}
                            />
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DFDFE0',
                                borderBottomWidth: 1,
                                marginLeft: -10,
                                marginRight: -10,
                                bottom: 65
                            }}
                        />

                    </Animatable.View>
                </>
            }
            <Popup
                instagramPopup={{ visible: handleInstaPopup, handleAdd: handleAdd, handleClose: closeInstaPopup }}
                requestUpgradePopup={{ visible: handleRequestUpgradePopup, handleRequestUpgrade: handleRequestUpgrade, handleClose: closeRequestUpgrade }}
                messageUsPopup={{ visible: messageUsPopup, handleMessageUsPopup: handleMessageUsPopup, handleClose: closeMessageUsPopup }}
                RequestPopup={{ visible: requestPopup, handleClose: closeRequestPopup }}
            />
        </ScrollView>
    );
};

export default EditProfileScreen;
