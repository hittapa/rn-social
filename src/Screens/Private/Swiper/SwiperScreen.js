import React, { useEffect } from 'react';
import styles from './SwiperScreenStyles';
import AuthLogic from '../../../Utils/AuthLogic';
import Swiper from 'react-native-deck-swiper';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import SwiperWithFollowers from '../../../../components/SwiperScreen/SwiperWithFollowers';

const SwiperScreen = ({ navigation }) => {
    useEffect(async () => {
        setPopupVisible({ ...popupVisible, welcomePopup: true })
        await AuthLogic.RemoveUserFlowScreen();
    }, []);

    const [popupVisible, setPopupVisible] = React.useState({ welcomePopup: true, howItWorkPopup: false, howItWorkPopup2: false })
    const [cards] = React.useState([...range(1, 50)])
    const [setSwipedAllCards] = React.useState(false)
    const [cardIndex] = React.useState(0)

    function* range(start, end) {
        for (let i = start; i <= end; i++) {
            yield i
        }
    }

    const renderCard = () => {
        return (
            <View style={styles.card}>
                <SwiperWithFollowers />
            </View>
        )
    };

    const onSwiped = (type) => {
        console.log(`on swiped ${type}`)
    }

    const onSwipedAllCards = () => {
        setSwipedAllCards(true)
    };

    return (
        <View style={styles.container}>
            <Swiper
                ref={swiper => {
                    swiper = swiper
                }}
                backgroundColor='#262624'
                onSwipedLeft={() => onSwiped('left')}
                onSwipedRight={() => onSwiped('right')}
                onSwipedTop={() => onSwiped('top')}
                onSwipedBottom={() => onSwiped('bottom')}
                cards={cards}
                cardIndex={cardIndex}
                cardVerticalMargin={60}
                renderCard={renderCard}
                onSwipedAll={onSwipedAllCards}
                stackSize={4}
                stackSeparation={0}
                overlayLabels={{
                    bottom: {
                        title: 'BLEAH',
                        style: {
                            label: {
                                backgroundColor: 'transparent',
                                borderColor: 'yellow',
                                color: 'yellow',
                                borderWidth: 1
                            },
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }
                        }
                    },
                    left: {
                        title: 'DISLIKE',
                        style: {
                            label: {
                                backgroundColor: 'transparent',
                                borderColor: 'red',
                                color: 'red',
                                borderWidth: 1
                            },
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                marginTop: 120,
                                marginLeft: -60
                            }
                        }
                    },
                    right: {
                        title: 'LIKE',
                        style: {
                            label: {
                                backgroundColor: 'transparent',
                                borderColor: 'green',
                                color: 'green',
                                borderWidth: 1
                            },
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                marginTop: 120,
                                marginLeft: 30
                            }
                        }
                    },
                    top: {
                        title: 'SUPER LIKE',
                        style: {
                            label: {
                                backgroundColor: 'transparent',
                                borderColor: 'blue',
                                color: 'blue',
                                borderWidth: 1
                            },
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }
                        }
                    },


                }}
                animateOverlayLabelsOpacity
                animateCardOpacity
            >
            </Swiper>

            {/* Header-Icon*/}
            <View style={{ flex: 1, alignItems: 'flex-start' }} >
                <View style={{ textAlign: "center" }}>
                    <Text style={{ color: "#4DF8FF", fontSize: 25, left: "30%" }}>STARSTUDED</Text></View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 20, position: 'absolute', bottom: Platform.OS === 'ios' ? 40 : 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("SwiperScreen")}>
                        <Image
                            source={require('../../../../assets/swipe-star.png')}
                            style={{ resizeMode: 'contain', width: 31, height: 31, alignSelf: 'center', zIndex: 1 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
                        <Image
                            source={require('../../../../assets/chat.png')}
                            style={{ resizeMode: 'contain', width: 31, height: 31, alignSelf: 'center', zIndex: 1 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("SwiperScreen")}>
                        <Image
                            source={require('../../../../assets/user.png')}
                            style={{ resizeMode: 'contain', width: 31, height: 31, alignSelf: 'center', zIndex: 1 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bottom-Icon */}
            <View style={{ flexDirection: "row-reverse" }}>
                <Image
                    source={require('../../../../assets/right.png')}
                    style={{ resizeMode: 'contain', width: 70, height: 62, alignSelf: 'center', marginLeft: 25, bottom: 10 }}
                />
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/star_likes.png')}
                        style={{ resizeMode: 'contain', width: 70, height: 62, alignSelf: 'center', marginLeft: 25, bottom: 7 }}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../../../assets/close.png')}
                    style={{ resizeMode: 'contain', width: 70, height: 62, alignSelf: 'center', bottom: 10 }}
                />
            </View>
        </View>
    );
};


export default SwiperScreen;
