import React from 'react'
import {
  Text, Image,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import styles from './HelpAndSupportScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableHighlight } from 'react-native-gesture-handler';

const HelpAndSupportScreen = ({ navigation }) => {


  const ComponentLeft = () => {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start' }} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../assets/back.png')}
            style={{ resizeMode: 'contain', width: 40, height: 70, alignSelf: 'center' }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const ComponentCenter = () => {
    return (
      <View>
        <Text style={{ color: "#fff", fontSize: 22 }} >Help and Support</Text>
      </View>
    );
  };


  return (

    <ScrollView style={styles.container}>

      <LinearGradient
        colors={['#3BBFC4', '#42D6DC', '#4DF8FF']}
      >
        <NavigationBar
          componentLeft={ComponentLeft}
          componentCenter={ComponentCenter}
          navigationBarStyle={{ backgroundColor: 'transparent', height: 80 }}
        />
      </LinearGradient>


      <TouchableHighlight
        underlayColor='#fff'>
        <View>
          <Text style={styles.hideMyProfile}>Hide My Profile</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor='#fff'>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          paddingTop: 10,
          flexDirection: 'row'
        }}>
          <Text style={styles.purchaseHistory}>Purchase History</Text>
        </View>
      </TouchableHighlight>

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
        underlayColor='#fff'>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.termsOfService}>Terms of Service</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { Linking.openURL('https://www.starstuded.com/arbitration') }}
        underlayColor='#fff'>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.arbitration}>Arbitration</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { Linking.openURL('https://www.starstuded.com/communityguidelines') }}
        underlayColor='#fff'>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.communityGuidelines}>Community Guidelines</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { Linking.openURL('https://www.starstuded.com/cookiespolicy') }}
        underlayColor='#fff'>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.cookiesPolicy}>Cookies Policy</Text>
        </View>
      </TouchableOpacity>

    <TouchableOpacity
        onPress={() => navigation.navigate("AccountScreen")}
        underlayColor='#fff'>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.account}>Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { Linking.openURL('https://www.starstuded.com/safetytips') }}
        underlayColor='#fff'>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.safetyTips}>Safety Tips</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
}

export default HelpAndSupportScreen;
