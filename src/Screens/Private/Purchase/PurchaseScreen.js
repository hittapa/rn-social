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
import styles from './PurchaseScreenStyles';
import LinearGradient from 'react-native-linear-gradient';


const PurchaseScreen = ({ navigation }) => {

  const [isEnabled, setIsEnabled] = useState(false);


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
        <Text style={{ color: "#fff", fontSize: 22 }} >Purchase</Text>
      </View>
    );
  };



  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    navigation.navigate("PaymentScreen")
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


      <TouchableHighlight
        underlayColor='#fff'>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          paddingTop: 10,
          flexDirection: 'row'
        }}>
          <Text style={styles.autorenew}>AutoRenew Subscription</Text>
          <Switch
            style={styles.renewSwitch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor='#fff'>
        <View>
          <Text style={styles.purchaseHistory}>Purchase History</Text>
        </View>
      </TouchableHighlight>


      <View style={{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingTop: 10,
        flexDirection: 'row'
      }}>
        <Text style={styles.username}>Stellar</Text>
        <Text style={styles.amount}>$24.45</Text>
        <Text style={styles.date}>11/12/2021</Text>
      </View>

      <View>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.username}>Stellar</Text>
          <Text style={styles.amount}>$24.45</Text>
          <Text style={styles.date}>11/12/2021</Text>
        </View>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.username}>Stellar</Text>
          <Text style={styles.amount}>$24.45</Text>
          <Text style={styles.date}>11/12/2021</Text>
        </View>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.username}>Stellar</Text>
          <Text style={styles.amount}>$24.45</Text>
          <Text style={styles.date}>11/12/2021</Text>
        </View>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.username}>Stellar</Text>
          <Text style={styles.amount}>$24.45</Text>
          <Text style={styles.date}>11/12/2021</Text>
        </View>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.username}>Stellar</Text>
          <Text style={styles.amount}>$24.45</Text>
          <Text style={styles.date}>11/12/2021</Text>
        </View>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.username}>Stellar</Text>
          <Text style={styles.amount}>$24.45</Text>
          <Text style={styles.date}>11/12/2021</Text>
        </View>
        <View style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}>
          <Text style={styles.username}>Stellar</Text>
          <Text style={styles.amount}>$24.45</Text>
          <Text style={styles.date}>11/12/2021</Text>
        </View>
      </View>

    </ScrollView>
  );

}

export default PurchaseScreen;
