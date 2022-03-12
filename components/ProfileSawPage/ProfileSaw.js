import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './ProfileSawStyles';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from "react-redux";
import StellarProfile from '../StellarProfilePage/StellarProfile';
import Popup from '../../src/Screens/Private/Home/Popup'


const ProfileSaw = ({ navigation, tabVisible, isStarShowTab, profileShowData, }) => {
    const { notification } = useSelector((state) => state.data);
    const [data, setData] = useState(0)
    const [selectedTab, setSelectedTab] = useState('like')
    const [isSteller, setIsSteller] = useState(false)
    const [user, setUser] = useState('')
    const [popupVisible, setPopupVisible] = useState(false);
    const [isPremium, setIsisPremium] = useState(false)



    useEffect(() => {
        notificationData()
    }, [notification]);

    const notificationData = () => {
        if (notification) {
            let totalData = []
            let isNotSeenLikeArray = []
            let isNotSeenViewArray = []
            let isSeenLikeArray = []
            let isSeenViewArray = []

            for (let i = 0; i < notification.length; i++) {
                const element = notification[i];
                if (element.is_seen === 0) {
                    totalData.push(element)
                    if (element.notification_type === "like") {
                        isNotSeenLikeArray.push(element)
                    } else if (element.notification_type === "view") {
                        isNotSeenViewArray.push(element)
                    }
                } else {
                    if (element.notification_type === "like") {
                        isSeenLikeArray.push(element)
                    } else if (element.notification_type === "view") {
                        isSeenViewArray.push(element)
                    }
                }
            }

            let likeArray = isNotSeenLikeArray.concat(isSeenLikeArray)
            let viewArray = isNotSeenViewArray.concat(isSeenViewArray)

            let obj = {
                totalData: totalData.length,
                isNotSeenLikeArray: isNotSeenLikeArray,
                isNotSeenViewArray: isNotSeenViewArray,
                isSeenLikeArray: isSeenLikeArray,
                isSeenViewArray: isSeenViewArray,
                viewArray: viewArray,
                likeArray: likeArray,
            }
            setData(obj)
        }
    }

    const handleCall = (user, type) => {
        setUser(user)
        setIsSteller(true)
    }

    const handleSelectedTab = (tab) => {
        setSelectedTab(tab)
        setIsSteller(false)
    }

    const profileShowDataUpdate = {
        text2: {
            text: "STAR LIKED YOU",
            style: {
                color: "#4DF8FF",
                fontSize: 22,
                fontFamily: 'AvenirLTStd-Black',
                textAlign: "center",
                top: 80
            }
        }
    }

    const profileShowData1 = {
        text2: {
            text: "STAR SAW YOUR PROFILE",
            style: {
                color: "#4DF8FF",
                fontSize: 22,
                fontFamily: 'AvenirLTStd-Black',
                textAlign: "center",
                top: 80
            }
        }
    }

    const handleClose = () => {
        setPopupVisible(false)
    }

    return (
        <View style={styles.container}>
            {/* Header-Icon*/}
            <View style={{ alignItems: 'flex-start' }} >
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/header.png')}
                        style={styles.headerImage}
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 20, position: 'absolute', bottom: Platform.OS === 'ios' ? 40 : 20, zIndex: 2000 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("CelebrityScreen")}>
                        <Image
                            source={require('../../assets/star.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={{ backgroundColor: "#E3004F", borderWidth: 1, borderColor: '#ffffff', borderRadius: 50, width: 20, height: 20, position: "absolute", left: 20, bottom: 17, textAlign: "center", alignItems: 'center' }}>
                            <Text style={{ color: "white", textAlign: 'center' }}>{data.totalData ? data.totalData : 0}</Text>
                        </View>
                        <Image
                            source={require('../../assets/diamond.png')}
                            style={{...styles.imageStyle}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("MatchesChatScreen")}>
                        <Image
                            source={require('../../assets/chat.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
                        <Image
                            source={require('../../assets/greyUser.png')}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                </View >

                <View style={styles.mainViewsAndLikes}>
                    <TouchableOpacity
                        onPress={() => handleSelectedTab('views')}>
                        <View style={{ backgroundColor: "#E3004F", borderWidth: 1, borderColor: '#ffffff', borderRadius: 50, width: 20, height: 20, position: "absolute", left: 70, bottom: 17, textAlign: "center", alignItems: 'center' }}>
                            <Text style={{ color: "white", textAlign: 'center' }}>{data.viewArray?.length || 0}</Text>
                        </View>
                        <Text style={selectedTab === 'views' ? styles.selectedViews : styles.views}>Views</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#CECECE', fontSize: 25 }}> | </Text>
                    <TouchableOpacity
                        onPress={() => handleSelectedTab('like')}>
                        <View style={{ backgroundColor: "#E3004F", borderWidth: 1, borderColor: '#ffffff', borderRadius: 50, width: 20, height: 20, position: "absolute", left: 90, bottom: 17, textAlign: "center", alignItems: 'center' }}>
                            <Text style={{ color: "white", textAlign: 'center' }}>{data.likeArray?.length || 0}</Text>
                        </View>
                        <Text style={selectedTab === 'like' ? styles.selectedLike : styles.likes}>Likes</Text>
                    </TouchableOpacity>
                </View>

                {isPremium &&
                    <>
                        <Text style={[profileShowData && profileShowData.text1 ? profileShowData.text1.upperStyle : '']}>{profileShowData && profileShowData.text1 ? profileShowData.text1.upperText : ''}</Text>
                        <Text style={[styles.mainText, profileShowData && profileShowData.text1 ? profileShowData.text1.lowerStyle : '']}>{profileShowData && profileShowData.text1 ? profileShowData.text1.lowerText : ''}</Text>

                        <Text style={profileShowData && profileShowData.text2 ? profileShowData.text2.style : ''}>{profileShowData && profileShowData.text2 ? profileShowData.text2.text : ''}</Text>
                        <View>
                            <Image
                                source={require('../../assets/blurProfile.png')}
                                style={styles.roundImageStyle}
                            />
                        </View>
                    </>}
                <ScrollView style={styles.scroll}>
                    {!isSteller && <>
                        {selectedTab === 'like' && <View style={styles.notification}>
                            {data && data.likeArray.length > 0 ? data.likeArray.map((user, index) => {
                                return <TouchableOpacity key={index} onPress={() => handleCall(user, "like")}>
                                    <View
                                        style={{
                                            marginTop: 30,
                                            padding: 0,
                                            flexDirection: 'row',
                                        }}>
                                        <Image
                                            source={{ uri: user.sender_image }}
                                            style={styles.chatImageStyle}
                                        />
                                        <View style={styles.chatText}>
                                            <Text style={styles.chatTitle}>{user.sender_name}</Text>
                                            <Text style={styles.chatTitle}>{user.message} </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }) : null
                            }
                        </View>}
                        {selectedTab === 'views' && <View style={styles.notification}>
                            {data && data.viewArray.length > 0 ? data.viewArray.map((user, index) => {
                                return <TouchableOpacity key={index} onPress={() => handleCall(user, "views")} >
                                    <View
                                        style={{
                                            marginTop: 30,
                                            padding: 0,
                                            flexDirection: 'row',
                                        }}>
                                        <Image
                                            source={{ uri: user.sender_image }}
                                            style={styles.chatImageStyle}
                                        />
                                        <View style={styles.chatText}>
                                            <Text style={styles.chatTitle}>{user.sender_name} </Text>
                                            <Text style={styles.chatTitle}>{user.message} </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }) : null
                            }
                        </View>}
                    </>}
                </ScrollView>


                {isSteller && <StellarProfile navigation={navigation} user={user} profileShowData={selectedTab === 'like' ? profileShowDataUpdate : profileShowData1}></StellarProfile>}
            </View>

            {!isSteller && isPremium && <TouchableOpacity
                style={styles.sawYouButton}
                onPress={() => { setPopupVisible(true) }}
            >
                <LinearGradient
                    colors={['#E3004F', '#E3004F']}
                    style={styles.sawYouButton}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>{profileShowData && profileShowData.buttonStyle ? profileShowData.buttonStyle.text : ''}</Text>
                </LinearGradient>
            </TouchableOpacity>}
            <Popup premiumPopup={{ visible: popupVisible, handleClose: handleClose }} />
        </View>

    );
};



export default ProfileSaw;
