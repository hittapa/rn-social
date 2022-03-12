import React, { useState } from 'react'
import {
  Text, Image,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
  TouchableHighlight
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import styles from './AccountScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';


const AccountScreen = ({ navigation }) => {

  const ComponentLeft = () => {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start' }} >
        <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
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
        <Text style={{ color: "#fff", fontSize: 22, fontFamily: 'AvenirLTStd-Book'}} >Account</Text>
      </View>
    );
  };

  return (

    <ScrollView style={styles.container}>

      <LinearGradient
        colors={['#3BBFC4', '#42D6DC', '#4DF8FF']}
      >
        <NavigationBar
          componentLeft={() => <ComponentLeft />}
          componentCenter={() => <ComponentCenter />}
          navigationBarStyle={{ backgroundColor: 'transparent', height: 80 }}
        />
      </LinearGradient>


      <View>
        <Text style={styles.accountText}>
          You can hide your profile and logout instead of deletion
        </Text>
      </View>

      <ContinueButton
        loading={false}
        buttonText={"Hide and Log Out"}
        buttonColor={"white"}
        buttonTextColor={"red"}
      />


      <View>
        <Text style={styles.cautionText}>
          Caution:
        </Text>
        <Text style={styles.cautionText1}>
          Once you delete your account you may not be able to recreate it
        </Text>
      </View>

      <ContinueButton
        loading={false}
        buttonText={"Permently Delete Account"}
        buttonColor={"white"}
        buttonTextColor={"red"}
      />


    </ScrollView>
  );

}

export default AccountScreen;
