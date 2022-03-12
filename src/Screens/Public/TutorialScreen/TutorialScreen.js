import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ImageBackground,
    Animated,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import AuthService from '../../../Services/API/AuthService';
import styles from './TutorialScreenStyles';
import { useToast } from "react-native-toast-notifications";
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import LottieView from 'lottie-react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-community/async-storage';

const carouselItems = [
    {
        title: 'Welcome to StarStuded',
        image: require('../../../../assets/tutorial/iphone1.png'),
        lottie: require('../../../../assets/tutorial/page1.json'),
        width: '100%',
        height: 300,
        marginVertical: '30%'
    },
    {
        title: 'You see a new verified celebrity figure every 24 hours',
        image: require('../../../../assets/tutorial/timer.png'),
        lottie: require('../../../../assets/tutorial/page2.json'),
        width: '100%',
        height: '62%',
        marginVertical: '30%'
    },
    {
        title: 'Welcome to StarStuded',
        image: require('../../../../assets/tutorial/iphone1.png'),
        lottie: require('../../../../assets/tutorial/page3.json'),
        width: '100%',
        height: '73%',
        marginVertical: '30%'
    },
    {
        title: 'Welcome to StarStuded',
        image: require('../../../../assets/tutorial/message.png'),
        lottie: require('../../../../assets/tutorial/page4.json'),
        width: '100%',
        height: '65%',
        marginVertical: '20%'
    },
    {
        title: 'Welcome to StarStuded',
        image: require('../../../../assets/tutorial/page5.png'),
        lottie: require('../../../../assets/tutorial/page5.json'),
        width: '100%',
        height: '100%',
        marginVertical: '10%'
    },
];

const TutorialScreen = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');

    const toast = useToast();
    const _carousel = useRef(null);
    const lottieAnimation = useRef([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [finished, setFinished] = useState(false);
    const [play, setPlay] = useState(false);

    const [data, setData] = React.useState({
        email: '',
        check_textInputChange: false,
        disabledButton: true,
        loading: false
    });

    const pagination = () => {
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                dotStyle={{
                    width: 25,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    const onAnimationFinish = (i) => {
        setTimeout(() => {
            if (!finished) {
                _carousel.current.snapToNext();
                setTimeout(() => {
                    lottieAnimation.current[i].play();
                }, 1500);
            }
        }, 2000);
        if (i === 4) {
            AsyncStorage.setItem('tutorial', 'Done');
            setTimeout(() => {
                setFinished(true);
            }, 3500);
        }
    };

    const onLottieLayout = (i) => {
        // console.log("Layout finished");
        // console.log(lottieAnimation.current);
        // setTimeout(() => {
        //     lottieAnimation.current[activeSlide].play();
        // }, 1500 * i);
    }

    const Page = ({ item, index }) => {
        return (
            <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                <ImageBackground source={item.image} style={{ width: item.width, height: item.height, minWidth: 400, marginVertical: item.marginVertical, }} resizeMode={index == 4 ? 'cover' : 'contain'}>
                </ImageBackground>
                <LottieView ref={(ref) => lottieAnimation.current[index] = ref} loop={finished} onLayout={() => onLottieLayout(index)} autoPlay source={item.lottie} loop={false} onAnimationFinish={() => onAnimationFinish(index)} />
                {
                    index === 0 && <Text style={styles.headerText}>Welcome to <Text style={{ color: '#4DF8FF' }}>StarStuded</Text></Text>
                }
                {
                    index === 1 && <Text style={styles.headerText}>You see a new verified celebrity figure every <Text style={{ color: '#4DF8FF' }}>24 hours</Text></Text>
                }
                {
                    index === 2 && <Text style={styles.headerText}>Swipe right if you <Text style={{ color: '#4DF8FF' }}>like</Text> them</Text>
                }
                {
                    index === 3 && <Text style={styles.headerText}>Answer <Text style={{ color: '#4DF8FF' }}>3 questions </Text> about yourself in a minute</Text>
                }
                {
                    index === 4 && !finished && <Text style={styles.headerText}>If they like your profile and answers, <Text style={{ color: '#4DF8FF' }}>it’s a match!</Text></Text>
                }
                {
                    index === 4 && finished && (
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReadyScreen')}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        )
    }

    const handleSlide = (i) => {
        setActiveSlide(i);
        finished && lottieAnimation.current[activeSlide].reset();
        finished && lottieAnimation.current[i].play();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Carousel
                ref={_carousel}
                data={carouselItems}
                renderItem={Page}
                sliderWidth={width}
                itemWidth={width}
                style={{ marginBottom: '10%' }}
                onSnapToItem={(index) => handleSlide(index)}
            />
            {pagination()}

        </SafeAreaView>
    );
};

export default TutorialScreen;
