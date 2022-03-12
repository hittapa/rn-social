import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, ScrollView, ActivityIndicator, TouchableHighlight, StatusBar, Platform } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from './MatchesChatScreenStyles';
import SwiperFlatList from 'react-native-swiper-flatlist';
import AuthService from '../../../Services/API/AuthService';
import { useToast } from "react-native-toast-notifications";

export default function MatchesChatScreen({ navigation }) {
    const [matches, setMatches] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('')
    const [totalNotification, setTotalNotification] = useState(0);

    const toast = useToast();

    let row = [];
    let prevOpenedRow;

    useEffect(async () => {
        setLoading(true)
        await AuthService.GetMatches()
            .then(async (response) => {
                if (response.status_code === 200) {
                    if (response.data.matches.length > 0) {
                        setMatches(true)
                        setData(response.data.matches)
                    } else {
                        setMatches(false)
                    }
                } else {
                    toast.show(response.error || response.message, {
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
    }, [])


    const renderItem = ({ item, index }, onClick) => {
        const closeRow = (index) => {
            if (prevOpenedRow && prevOpenedRow !== row[index]) {
                prevOpenedRow.close();
            }
            prevOpenedRow = row[index];
        };

        console.log("User:", item);



        const renderRightActions = (progress, dragX, onClick) => {
            return (
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        backgroundColor: '#E3004F',
                        marginBottom: 20
                    }}>
                    <TouchableOpacity onPress={onClick}>
                        <Image
                            source={require('../../../../assets/closeWhite.png')}
                            style={styles.closeImageStyle}
                        />
                    </TouchableOpacity>
                </View>
            );
        };

        return (
            <Swipeable
                renderRightActions={(progress, dragX) =>
                    renderRightActions(progress, dragX, onClick)
                }
                onSwipeableOpen={() => closeRow(index)}
                ref={(ref) => (row[index] = ref)}
                rightOpenValue={-100}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ChatScreen", { id: item.id, name: item.first_name, url: item.user_images.length > 0 ? item.user_images[0].url : item.image_url })}
                >
                    <View
                        style={{
                            padding: 0,
                            flexDirection: 'row',
                            paddingLeft: 20,
                            paddingBottom: 20,
                        }}>
                        <Image
                            source={{ uri: item.user_images.length > 0 ? item.user_images[0].url : item.image_url }}
                            style={styles.chatImageStyle}
                        />
                        <View style={styles.chatText}>
                            <Text style={styles.chatTitle}>{item.first_name} <Image
                                source={require('../../../../assets/verify.png')}
                                style={styles.verifyLogoImage}
                            /></Text>
                            <Text style={styles.about_me} numberOfLines={1}>
                                {item.about_me}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        );
    };

    const deleteItem = ({ item, index }) => {
        let a = data;
        a.splice(index, 1);
        setData([...a]);
    };

    return (
        loading === true ?
            <ActivityIndicator size="large" style={styles.activityIndicator} color="#4df8ff" />
            : matches === true ?
                <View style={{ alignItems: 'flex-start', flex: 1, height: '100%', backgroundColor: '#1F1F1F', top: StatusBar.height }} >
                    <View style={{ textAlign: "center", top: Platform.OS === 'ios' ? 50 : 5 }}>
                        <Image
                            source={require('../../../../assets/header.png')}
                            style={styles.headerImage}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 20, position: 'absolute', bottom: Platform.OS === 'ios' ? 40 : 20, zIndex: 2000 }}>

                        <TouchableOpacity onPress={() => navigation.navigate("CelebrityScreen")}>
                            <Image
                                source={require('../../../../assets/star.png')}
                                style={styles.imageStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("SawProfileScreen")}>
                            <Text style={{ color: "white", backgroundColor: "#E3004F", borderRadius: 50, width: 20, position: "absolute", left: 20, bottom: 17, textAlign: "center" }}>{totalNotification ? totalNotification : 0}</Text>
                            <Image
                                source={require('../../../../assets/diamond.png')}
                                style={{...styles.imageStyle, tintColor: '#c2cdd3'}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("MatchesChatScreen")}>
                            <Image
                                source={require('../../../../assets/matcheschat.png')}
                                style={styles.imageStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
                            <Image
                                source={require('../../../../assets/greyUser.png')}
                                style={styles.imageStyle}
                            />
                        </TouchableOpacity>
                    </View >
                    <ScrollView style={styles.container} nestedScrollEnabled>
                        <Text style={styles.newMatchesText}>New Matches</Text>
                        <SwiperFlatList style={styles.swipeList}>
                            {data && data.map((user, index) => {
                                return (
                                    <View key={index} style={styles.chatHeader}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("ChatScreen", { id: user.id, name: user.first_name, url: user.user_images.length > 0 ? user.user_images[0].url : user.image_url })}>
                                            <Image
                                                source={{ uri: user.user_images.length > 0 ? user.user_images[0].url : user.image_url }}
                                                style={styles.chatStyle}
                                            />
                                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                                <Text style={{ color: "white", fontSize: 22 }}>{user.first_name}</Text>
                                                <Image
                                                    source={require('../../../../assets/verify.png')}
                                                    style={styles.verifyLogo}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                            }
                        </SwiperFlatList>
                        <Text style={styles.messageText}>Messages</Text>
                        <FlatList
                            data={data}
                            renderItem={(v) =>
                                renderItem(v, () => {
                                    deleteItem(v);
                                })
                            }
                            keyExtractor={(item) => item.id}>
                        </FlatList>
                    </ScrollView>
                </View>

                :
                <View style={styles.container}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }} >
                        <View style={{ textAlign: "center" }}>
                            <Text style={{ color: "#4DF8FF", fontSize: 25, left: "30%" }}>STARSTUDED</Text></View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 20, position: 'absolute', bottom: Platform.OS === 'ios' ? 40 : 20, zIndex: 2000 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("CelebrityScreen")}>
                                <Image
                                    source={require('../../../../assets/star.png')}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("SawProfileScreen")}>
                                <Text style={{ color: "white", backgroundColor: "#E3004F", borderRadius: 50, width: 20, position: "absolute", left: 20, bottom: 17, textAlign: "center" }}>{totalNotification ? totalNotification : 0}</Text>
                                <Image
                                    source={require('../../../../assets/diamond.png')}
                                    style={{...styles.imageStyle, tintColor: '#c2cdd3'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../../assets/matcheschat.png')}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
                                <Image
                                    source={require('../../../../assets/greyUser.png')}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                        </View >

                        <View>
                            <Image
                                style={{ top: 150, left: 50, height: 300, width: 300 }}
                                source={require('../../../../assets/noMatchesImage.png')}>
                            </Image>
                        </View>
                        <Text style={{ color: "white", fontSize: 31, margin: 80, top: 100 }}>No Matches Yet</Text>
                    </View>
                </View>
    );
}
