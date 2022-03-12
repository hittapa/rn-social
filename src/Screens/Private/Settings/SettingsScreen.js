import React, { useState, useCallback, useEffect, memo } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import {
  Text, Image,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Linking,
  Platform
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import styles from './SettingsScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Slider from 'rn-range-slider';
import AuthLogic from '../../../Utils/AuthLogic';
import AuthService from '../../../Services/API/AuthService';
import Popup from '../Home/Popup';
import { useToast } from "react-native-toast-notifications";
import { getNotificationData } from '../../../Redux/Action';
import { useDispatch } from 'react-redux';
import Thumb from '../../../../components/RangeSlider/Thumb';
import Rail from '../../../../components/RangeSlider/Rail';
import RailSelected from '../../../../components/RangeSlider/RailSelected';
import Label from '../../../../components/RangeSlider/Label';
import Notch from '../../../../components/RangeSlider/Notch';

const SettingsScreen = ({ navigation, route }) => {
  const toast = useToast();
  let dispatch = useDispatch();
  const [age, setAge] = useState({ low: 0, high: 100 });
  const [popupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = React.useState({ gender: route.params.gender, show_me_profile: route.params.show_me_profile });
  const { phone_number } = route.params

  const updateSliderValue = (low, high, fromUser) => {
    if (fromUser) {
      setAge({ low: low, high: high })
    }
  }

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await AuthService.GetProfile()
        .then(async (response) => {
          if (response.status_code === 200) {
            setData(response.data)
            setAge({ low: response.data.min_age, high: response.data.max_age })
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
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);


  const handelDone = async () => {
    setLoading(true)
    await AuthService.UpdateAgeRange(age.low, age.high)
      .then(async (response) => {
        if (response.status_code === 200) {

          toast.show(response.message, {
            type: "success",
            duration: 4000,
            placement: 'top'
          });
          navigation.navigate("EditProfileScreen")
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

  const ComponentLeft = () => {
    return (
      <View style={{ alignItems: 'flex-start', paddingRight: 10 }} >
        <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
          <Image
            source={require('../../../../assets/back.png')}
            style={{ resizeMode: 'contain', width: 40, height: 70, alignSelf: 'center' }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const ComponentCenter = () => {
    console.log('My Profile data');
    console.log(data);
    let image = data.user_images?.length > 0 ? data.user_images[0].url : 'http://api2.starstuded.com/images/placeholder/user.png'
    return (
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={{ resizeMode: 'cover', width: 56, height: 56, alignSelf: 'center', borderRadius: 30 }}
          />
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 22, textAlign: 'center' }} >  My Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };


  const ComponentRight = () => {
    return (
      <View style={{}}>
        <TouchableOpacity
          onPress={() => handelDone()}>
          <Text style={{ color: "#fff", padding: 4, fontSize: 20, paddingRight: 10 }}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleClose = () => {
    navigation.navigate('WaitScreen')
    setPopupVisible(false)
  }

  const handleLogOut = async () => {
    await AuthLogic.Logout()
    dispatch(getNotificationData(''))
    navigation.navigate('MainScreen')
  }

  return (

    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#3BBFC4', '#42D6DC', '#4DF8FF']}
      >
        <NavigationBar
          componentLeft={ComponentLeft}
          componentCenter={ComponentCenter}
          componentRight={ComponentRight}
          navigationBarStyle={{ backgroundColor: 'transparent', height: Platform.OS === 'ios' ? 90 : 80 }}
        />
      </LinearGradient>
      {loading === true ?
        <ActivityIndicator size="large" style={styles.activityIndicator} color="#4df8ff" />
        :
        <>
          <TouchableHighlight
            onPress={() => setPopupVisible(true)}
          >
            <View style={styles.starLikeButton}>
              <Image source={require('../../../../assets/star_likes.png')} style={styles.starLikesImage} />
              <Text style={[styles.remainingText]}>0 remaining</Text>
              <Text style={[styles.getStarLikesText]}>Get Star Likes</Text>
            </View>
          </TouchableHighlight>

          {/* Discovery section */}
          <TouchableHighlight
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}>
              <Text style={styles.discovery}>Discovery</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity
            onPress={() => navigation.navigate('InterestedPersonScreen', { gender: data.show_me_profile })}
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.showMe}>Show me</Text>
              <Text style={styles.showMeAnswer}>{data.show_me_profile === 1 ? "Men" : data.show_me_profile === 2 ? "Women" : data.show_me_profile === 3 ? "Everyone" : ''}</Text>
              <Image style={styles.showMeAnswerForward} source={require('../../../../assets/forward_back.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('GenderSelectionScreen', { gender: data.gender })}
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.iamA}>I am a</Text>
              <Text style={styles.iamAAnswer}>{data.gender === 1 ? "Man" : data.gender === 2 ? "Woman" : data.gender === 3 ? "Other" : ''}</Text>
              <Image style={styles.iamAAnswerForward} source={require('../../../../assets/forward_back.png')} />
            </View>
          </TouchableOpacity>

          <TouchableHighlight
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.age}>Age</Text>
              <Text style={styles.ageAnswer}>{age.low}-{age.high}</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.root}>
            <Slider
              style={styles.slider}
              low={age.low}
              high={age.high}
              min={0}
              max={100}
              step={1}
              disableRange={false}
              floatingLabel={false}
              renderThumb={() => renderThumb()}
              renderRail={() => renderRail()}
              renderRailSelected={() => renderRailSelected()}
              renderLabel={(value) => renderLabel(value)}
              renderNotch={() => renderNotch()}
              onValueChanged={(low, high, fromUser) => updateSliderValue(low, high, fromUser)}
            />
          </View>

          {/* Account section */}

          <TouchableHighlight
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}>
              <Text style={styles.account}>Account</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.phoneNumber}>Phone Number</Text>
              <Text style={styles.showMeAnswer}>{phone_number}</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}>
              <Text style={styles.support}>Support</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity
            onPress={() => navigation.navigate("HelpAndSupportScreen")}
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.helpAndSupport}>Help and Support</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { Linking.openURL('https://www.starstuded.com/privacypolicy') }}
            underlayColor='#fff'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.privacyPolicy}>Privacy Policy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { Linking.openURL('https://www.starstuded.com/terms') }}
            underlayColor='black'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.termsOfService}>Terms of Service</Text>
            </View>
          </TouchableOpacity>

          <TouchableHighlight
            underlayColor='black'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.blankLine}></Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity
            onPress={() => handleLogOut()}
            underlayColor='black'>
            <View style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              flexDirection: 'row'
            }}>
              <Text style={styles.logOut}>Log Out</Text>
            </View>
          </TouchableOpacity>

          <TouchableHighlight
            underlayColor='black'>
            <View style={{
              flexDirection: 'row'
            }}>
              <Image
                source={require('../../../../assets/swipe-star.png')}
                style={styles.images}
              />
            </View>
          </TouchableHighlight>
        </>
      }
      <Popup navigation={navigation} starLike={{ visible: popupVisible, handleClose: handleClose }} />
    </ScrollView>
  );

}

export default SettingsScreen;
