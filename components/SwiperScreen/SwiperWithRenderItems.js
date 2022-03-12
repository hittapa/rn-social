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
                            style={{ resizeMode: 'contain', width: 700, height: 610, alignSelf: 'center', bottom: -3, right: 9 }}
                            source={require('../../assets/swiperGirlImage.png')} />

                        <Text style={styles.text}>Jennifer, 24</Text>
                        <Text style={styles.text1}>New York Univesity</Text>

                    </View>
                    <View style={[styles.child]}>
                        <Image
                            style={{ resizeMode: 'contain', width: 700, height: 610, alignSelf: 'center', bottom: -3, right: 9 }}
                            source={require('../../assets/swiperGirlImage7.jpg')} />
                        <Text style={styles.text}>Jennifer, 24</Text>
                        <Text style={styles.text1}>New York Univesity</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image
                            style={{ resizeMode: 'contain', width: 700, height: 610, alignSelf: 'center', bottom: -3, right: 9 }}
                            source={require('../../assets/swiperGirlImage2.jpg')} />
                        <Text style={styles.text}>Jennifer, 24</Text>
                        <Text style={styles.text1}>New York Univesity</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image
                            style={{ resizeMode: 'contain', width: 700, height: 610, alignSelf: 'center', bottom: -3, right: 9 }}
                            source={require('../../assets/swiperGirlImage3.jpg')} />
                        <Text style={styles.text}>Jennifer, 24</Text>
                        <Text style={styles.text1}>New York Univesity</Text>
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
        top: 460,
        left: 10,
        fontWeight: "bold",
        position: "absolute"
    },
    text1: {
        fontSize: 30,
        fontFamily: 'AvenirLTStd-Book',
        textAlign: 'left',
        color: "#FFFFFF",
        top: 510,
        left: 10,
        position: "absolute"
    },
});