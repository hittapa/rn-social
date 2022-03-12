import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { CustomPagination } from './CustomPagination';

export default () => {
    return (
        <View style={styles.container}>
            <View style={{ height: "100%", borderRadius: 10 }}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    index={0}
                    autoplayLoop
                    showPagination
                    PaginationComponent={CustomPagination}
                >
                    <View style={[styles.child]}>
                        <Image
                            style={{ resizeMode: 'contain', width: 500, height: 650, alignSelf: 'center', bottom: -1, right: 16 }}
                            source={require('../../assets/SwiperImage.png')} />

                        <Text style={styles.text}>samgowland
                        <Image
                                source={require('../../assets/verify.png')}>
                            </Image></Text>
                        <Text style={styles.text1}>1.1M followers        <Image
                            source={require('../../assets/threeDot.png')}>
                        </Image></Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image
                            style={{ resizeMode: 'contain', width: 500, height: 650, alignSelf: 'center', bottom: -1, right: 16 }}
                            source={require('../../assets/swiperGirlImage.png')} />
                        <Text style={styles.text}>Alka
                         <Image
                                style={{ left: 5 }}
                                source={require('../../assets/verify.png')}>
                            </Image></Text>
                            <Text style={styles.text1}>28M followers        <Image
                            source={require('../../assets/threeDot.png')}>
                        </Image></Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image
                            style={{ resizeMode: 'contain', width: 500, height: 650, alignSelf: 'center', bottom: -1, right: 16 }}
                            source={require('../../assets/swiperGirlImage8.jpg')} />
                        <Text style={styles.text}>Radhika
                         <Image
                                style={{ left: 5 }}
                                source={require('../../assets/verify.png')}>
                            </Image></Text>
                            <Text style={styles.text1}>284M followers        <Image
                            source={require('../../assets/threeDot.png')}>
                        </Image></Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image
                            style={{ resizeMode: 'contain', width: 500, height: 650, alignSelf: 'center', bottom: -1, right: 16 }}
                            source={require('../../assets/swiperGirlImage7.jpg')} />
                        <Text style={styles.text}>Ganga
                         <Image
                                style={{ left: 5 }}
                                source={require('../../assets/verify.png')}>
                            </Image></Text>
                            <Text style={styles.text1}>384M followers        <Image
                            source={require('../../assets/threeDot.png')}>
                        </Image></Text>
                    </View>
                </SwiperFlatList>
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: "hidden",

    },
    child: {
        width,
        justifyContent: 'center'

    },
    text: {
        fontSize: 40,
        fontFamily: 'AvenirLTStd-Book',
        textAlign: 'left',
        color: "#FFFFFF",
        top: 410,
        left: 15,
        fontWeight: "bold",
        position: "absolute"
    },
    text1: {
        fontSize: 30,
        fontFamily: 'AvenirLTStd-Book',
        textAlign: 'left',
        color: "#FFFFFF",
        top: 530,
        left: 15,
        position: "absolute"

    },
});