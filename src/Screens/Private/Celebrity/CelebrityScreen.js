import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Platform } from 'react-native';
import styles from './CelebrityScreenStyles';
import AuthLogic from '../../../Utils/AuthLogic';
import Swiper from 'react-native-deck-swiper';
import CelebritySwiperCards from '../../../../components/SwiperScreen/CelebritySwiperCards';
import { ActivityIndicator } from 'react-native-paper';
import AuthService from '../../../Services/API/AuthService';
import { useSelector } from "react-redux";
import Popup from '../Home/Popup';
import { useToast } from 'react-native-toast-notifications';

const CelebrityScreen = ({ navigation, route }) => {

    const [swipeAll, setSwipeAll] = useState(false);
    const [loading, setLoading] = useState(false);
    const [swiper, setSwiper] = useState(null);
    const [data, setData] = useState([]);
    const [totalNotification, setTotalNotification] = useState(0);
    const [showStarLike, setShowStarLike] = useState(false);
    const ProfileId = route && route.params ? route.params.id : null;
    const { notification } = useSelector((state) => state.data);
    const toast = useToast();

    useEffect(() => {
        notificationData()
    }, [notification]);

    useEffect(async () => {
        const unsubscribe = navigation.addListener('focus', async () => {
            setLoading(true);
            // let response;
            // console.log(ProfileId)
            // // if (ProfileId) {
            // //     response = await AuthService.GetProfileById(ProfileId);
            // // } else response = await AuthService.GetCelebrityProfile();
            await AuthService.GetCelebrityProfile()
                .then(async (response) => {
                    if (response.status_code === 200) {
                        if (response.data.lastLikedUser) {
                            navigation.navigate('WaitScreen')
                        } else {
                            setData([response.data])
                        }
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
            setLoading(false);
        });
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;

    }, [navigation, data]);

    const notificationData = () => {
        if (notification) {
            let totalData = []
            for (let i = 0; i < notification.length; i++) {
                const element = notification[i];
                if (element.is_seen === 0) {
                    totalData.push(element)
                }
            }
            if (totalData.length > 0) {
                setTotalNotification(totalData.length)
            } else {
                setTotalNotification(0)
            }
        }
    }


    const renderCard = (card, index) => {
        return (
            Platform.OS === 'ios' ?
                <View style={styles.card}>
                    <CelebritySwiperCards data={card} />
                </View> :
                <View style={styles.cardAndroid}>
                    <CelebritySwiperCards data={card} />
                </View>
        )
    };

    const renderNoCards = () => {
        setSwipeAll(true);
    };

    const onSwiped = async (type, index) => {
        setLoading(true)
        if (type === 'right') {
            await AuthService.SwipeAction(data[index].id, 'like')
                .then(async (response) => {
                    if (response.status_code === 200) {
                        setLoading(false)
                        navigation.navigate('SpeedRoundScreen', { likeId: response.data.likeId });
                    } else {
                        setSwipeAll(false);
                        swiper.swipeBack();
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
        } else if (type === 'left') {
            await AuthService.SwipeAction(data[index].id, 'unlike')
                .then(async (response) => {
                    if (response.status_code === 200) {
                        setLoading(false)
                        navigation.navigate('WaitScreen');
                    } else {
                        setSwipeAll(false);
                        swiper.swipeBack();
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
        setLoading(false)
    }

    const handlePopup = () => {
        setShowStarLike(false)
    }

    const handleRightButton = () => {
        swiper.swipeRight();
    }

    const handleCloseButton = () => {
        swiper.swipeLeft();
    }

    const handleGetMatchesChat = async () => {
        navigation.navigate('MatchesChatScreen')
    }

    return (
        <>
            {
                Platform.OS === 'ios' ?
                    <View style={styles.container, { backgroundColor: 'black', height: '100%' }}>
                        <View style={styles.header}>
                            <Image
                                source={require('../../../../assets/header.png')}
                                style={styles.headerImage}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-start', position: 'absolute', bottom: 40 }} >
                            <View style={styles.firstIconRow}>
                                <TouchableOpacity onPress={() => navigation.navigate("CelebrityScreen")}>
                                    <Image
                                        source={require('../../../../assets/swipe-star.png')}
                                        style={styles.images}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("SawProfileScreen")}>
                                    <Text style={{ color: "white", backgroundColor: "#E3004F", borderRadius: 50, width: 20, position: "absolute", left: 20, bottom: 17, textAlign: "center" }}>{totalNotification ? totalNotification : 0}</Text>
                                    <Image
                                        source={require('../../../../assets/diamond.png')}
                                        style={{...styles.images, tintColor: '#c2cdd3'}}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("MatchesChatScreen")}>
                                    <Image
                                        source={require('../../../../assets/chat.png')}
                                        style={styles.images}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
                                    <Image
                                        source={require('../../../../assets/greyUser.png')}
                                        style={styles.images}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Swiper
                                ref={swiper => {
                                    setSwiper(swiper)
                                }}
                                disableBottomSwipe={true}
                                disableTopSwipe={true}
                                onSwipedLeft={(index) => onSwiped('left', index)}
                                onSwipedRight={(index) => onSwiped('right', index)}
                                cards={data}
                                renderCard={renderCard}
                                onSwipedAll={renderNoCards}
                                cardStyle={{ height: '50%' }}
                                containerStyle={{ top: 70 }}
                                overlayLabels={{
                                    left: styles.dislike,
                                    right: styles.like,
                                }}
                            />
                        </View>
                        {
                            loading &&
                            <ActivityIndicator size="large" style={styles.activityIndicator} color="#4df8ff" />
                        }
                        {
                            swipeAll && !loading || data.length < 1 &&
                            < View style={{ position: 'absolute', top: 200, width: '100%' }}>
                                <Text style={styles.noCard}>
                                    No More Cards Available
                                </Text>
                            </View>
                        }
                        <View style={{ flexDirection: "row", alignSelf: 'center', position: 'absolute', bottom: 80 }}>
                            <TouchableOpacity onPress={() => handleCloseButton()}>
                                <Image
                                    source={require('../../../../assets/close.png')}
                                    style={styles.close}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setShowStarLike(true)}>
                                <Image
                                    source={require('../../../../assets/star_likes.png')}
                                    style={styles.center}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleRightButton()}>
                                <Image
                                    source={require('../../../../assets/right.png')}
                                    style={styles.right}
                                />
                            </TouchableOpacity>
                        </View>
                    </View> :
                    <View style={styles.containerAndroid}>
                        <View style={styles.headerAnd}>
                            <Image
                                source={require('../../../../assets/header.png')}
                                style={styles.headerImage}
                            />
                        </View>
                        <Swiper
                            ref={swiper => {
                                setSwiper(swiper)
                            }}
                            disableTopSwipe={true}
                            disableBottomSwipe={true}
                            backgroundColor='#262624'
                            onSwipedLeft={(index) => onSwiped('left', index)}
                            onSwipedRight={(index) => onSwiped('right', index)}
                            cards={data}
                            renderCard={renderCard}
                            onSwipedAll={renderNoCards}
                            cardStyle={{ height: '50%' }}
                            overlayLabels={{
                                left: styles.dislike,
                                right: styles.like,
                            }}
                        />
                        {
                            loading &&
                            <ActivityIndicator size="large" style={styles.activityIndicator} color="#4df8ff" />
                        }

                        <View style={{ flex: 1, alignItems: 'flex-start', position: 'absolute', bottom: 20 }} >
                            <View style={styles.firstIconRow}>
                                <TouchableOpacity onPress={() => navigation.navigate("CelebrityScreen")}>
                                    <Image
                                        source={require('../../../../assets/swipe-star.png')}
                                        style={styles.images}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("SawProfileScreen")}>
                                    <Text style={{ color: "white", backgroundColor: "#E3004F", borderRadius: 50, width: 20, position: "absolute", left: 20, bottom: 17, textAlign: "center" }}>{totalNotification ? totalNotification : 0}</Text>
                                    <Image
                                        source={require('../../../../assets/diamond.png')}
                                        style={{...styles.images, tintColor: '#c2cdd3'}}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleGetMatchesChat()}>
                                    <Image
                                        source={require('../../../../assets/chat.png')}
                                        style={styles.images}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
                                    <Image
                                        source={require('../../../../assets/greyUser.png')}
                                        style={styles.images}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            (swipeAll || data.length < 1) && !loading &&
                            < View style={{ position: 'absolute' }}>
                                <Text style={styles.noCard}>
                                    No More Cards Available
                                </Text>
                            </View>
                        }
                        {data.length > 0 &&
                            <View style={{ flexDirection: "row", alignSelf: 'center', position: 'absolute', bottom: 60 }}>
                                <TouchableOpacity onPress={() => handleCloseButton()}>
                                    <Image
                                        source={require('../../../../assets/close.png')}
                                        style={styles.close}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setShowStarLike(true)}>
                                    <Image
                                        source={require('../../../../assets/star_likes.png')}
                                        style={styles.center}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleRightButton()}>
                                    <Image
                                        source={require('../../../../assets/right.png')}
                                        style={styles.right}
                                    />
                                </TouchableOpacity>
                            </View>
                        }
                    </View >
            }
            <Popup navigation={navigation} starLike={{ visible: showStarLike, handleClose: handlePopup }} />
        </>
    );
};


export default CelebrityScreen;