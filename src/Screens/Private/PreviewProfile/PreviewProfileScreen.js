import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { CardPagination } from './CardPagination';
import styles from './PreviewProfileScreenStyles';

const PreviewProfileScreen = ({ navigation, route }) => {

    const images = route && route.params ? route.params.userImages : null;
    const data = route && route.params ? route.params.data : null;

    return (
        <View style={styles.container}>
            <View style={{ width: 80 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CelebrityScreen')}>
                    <Text style={styles.doneText}>Done</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.editInfoText}>Edit Info</Text>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EditProfileScreen')}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <Text style={styles.normalText}> | </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PreviewProfileScreen')}>
                    <Text style={styles.previewText}>Preview</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: "100%", borderRadius: 500, marginTop: 20 }}>
                <SwiperFlatList
                    autoplayDelay={2}
                    index={0}
                    autoplayLoop
                    showPagination
                    PaginationComponent={CardPagination}
                >
                    {
                        images?.length > 0 ? images.slice(0, 4).map((user, index) => {
                            return (
                                <View key={index} style={[styles.child]}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: user.image }}
                                    />
                                    {/* <LinearGradient
                                            colors={['#00000000', '#000000']}
                                            locations={[0, 0.9]}
                                            style={styles.linearGradient}
                                        > */}
                                    <Image
                                        style={styles.shadowStyle}
                                        source={require('../../../../assets/BehindTextShadow.png')}
                                    />
                                    <View style={styles.footer}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.name}>{data.first_name + ',' + data.age}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={styles.info}>
                                                <Text style={styles.infoText}>
                                                    {index === 0 ? data.about_me : null}
                                                    {index === 1 ? data.about_me : null}
                                                    {index === 2 ? data.school_name : null}
                                                    {index === 3 ? data.school_name : null}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    {/* </LinearGradient> */}
                                </View>
                            )
                        }) :
                            images &&
                            <View style={[styles.child]}>
                                <Image
                                    style={styles.defaultImage}
                                    source={require('../../../../assets/userBlue.png')}
                                />
                            </View>
                    }
                </SwiperFlatList>
            </View>
        </View>
    );
};

export default PreviewProfileScreen;
