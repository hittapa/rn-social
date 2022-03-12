import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwiperFlatList from 'react-native-swiper-flatlist';
import styles from './CelebritySwiperCardsStyles';
import { CustomPagination } from './CustomPagination';

export default ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flatList}>
                <SwiperFlatList
                    autoplayDelay={2}
                    index={0}
                    autoplayLoop
                    showPagination
                    PaginationComponent={CustomPagination}
                >
                    {
                        data?.user_images.length > 0 ? data?.user_images.slice(0, 4).map((user, index) => {
                            return (
                                <View key={index} style={[styles.child]}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: user.url }}
                                    />
                                    {/* <LinearGradient
                                        colors={['#00000000', '#000000']}
                                        locations={[0, 0.9]}
                                        style={styles.linearGradient}
                                    > */}
                                    <Image
                                        style={styles.shadowStyle}
                                        source={require('../../assets/BehindTextShadow.png')}
                                    />
                                    <View style={styles.footer}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={styles.name}>{data.instagram_profile_url}</Text>
                                                <Image
                                                    source={require('../../assets/verify.png')}
                                                    style={styles.verified}
                                                />
                                            </View>
                                            <TouchableOpacity style={styles.moreWrapper}>
                                                <Image
                                                    source={require('../../assets/threeDot.png')}
                                                    style={styles.report}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={styles.info}>
                                                <Text style={styles.infoText} numberOfLines={1}>
                                                    {index === 0 ? data.followers + ' followers' : null}
                                                    {index === 1 ? data.followers + ' followers' : null}
                                                    {index === 2 ? data.about_me : null}
                                                    {index === 3 ? data.school_name : null}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    {/* </LinearGradient> */}
                                </View>
                            )
                        }) :
                            data &&
                            <View style={[styles.child]}>
                                <Image
                                    style={styles.defaultImage}
                                    source={require('../../assets/userBlue.png')}
                                />
                                <LinearGradient
                                    colors={['#00000000', '#000000']}
                                    locations={[0, 0.9]}
                                    style={styles.linearGradient}
                                >
                                    <View style={styles.footer}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.name}>{data.instagram_profile_url}</Text>
                                                <Image
                                                    source={require('../../assets/verify.png')}
                                                    style={styles.verified}
                                                />
                                            </View>
                                            <TouchableOpacity>
                                                <Image
                                                    source={require('../../assets/threeDot.png')}
                                                    style={styles.report}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={styles.info}>
                                                <Text style={styles.infoText}>
                                                    {data.followers}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                    }
                </SwiperFlatList>
            </View>
        </View>
    );
};