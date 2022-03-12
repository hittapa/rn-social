import React, { useState } from 'react'
import {
  Text, Image,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import styles from './AccountScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AuthService from '../../../Services/API/AuthService';
import AuthLogic from '../../../Utils/AuthLogic';
import { useToast } from "react-native-toast-notifications";


const AccountScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

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
        <Text style={{ color: "#fff", fontSize: 22 }} >Account</Text>
      </View>
    );
  };

  const handleHideAndLogout = async () => {
    await AuthService.HideAndLogOut(0)
      .then(async (response) => {
        if (response.status_code === 200) {
          await AuthLogic.Logout()
          navigation.navigate('MainScreen')
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
  }

  const hamdlePermanentlyDelete = async () => {
    setLoading(true)
    await AuthService.DeleteAccountPermanently()
      .then(async (response) => {
        if (response.status_code === 200) {
          toast.show(response.message, {
            type: "success",
            duration: 4000,
            placement: 'top'
          });
          setLoading(false)
          navigation.navigate("MainScreen")
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
  }


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
      {loading === true ?
        <ActivityIndicator size="large" style={styles.activityIndicator} color="#4df8ff" />
        :
        <>
          <View>
            <Text style={styles.accountText}>
              You can hide your profile and logout instead of deletion
            </Text>
          </View>

          <ContinueButton
            loading={false}
            buttonText={"Hide and Log Out"}
            buttonColor={"white"}
            textColor={'#000000'}
            handleContinue={handleHideAndLogout}
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
            textColor={'#E3004F'}
            handleContinue={hamdlePermanentlyDelete}
          />
        </>
      }
    </ScrollView>
  );

}

export default AccountScreen;


