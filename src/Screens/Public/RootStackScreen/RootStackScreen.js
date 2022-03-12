import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScreen/SplashScreen';
import MainScreen from '../MainScreen/MainScreen';
import PhoneLoginScreen from '../PhoneLoginScreen/PhoneLoginScreen';
import OtpScreen from '../OtpScreen/OtpScreen';
import HomeScreen from '../../Private/Home/HomeScreen';
import FirstNameScreen from '../FirstNameScreen/FirstNameScreen';
import BirthDateScreen from '../BirthDateScreen/BirthDateScreen';
import GenderSelectionScreen from '../GenderSelectionScreen/GenderSelectionScreen';
import AddPhotoScreen from '../AddPhotoScreen/AddPhotoScreen';
import SchoolNameScreen from '../SchoolNameScreen/SchoolNameScreen';
import EmailScreen from '../EmailScreen/EmailScreen';
import InterestedPersonScreen from '../InterestedPersonScreen/InterestedPersonScreen';
import ChatScreen from '../../Private/Chat/ChatScreen';
import SettingsScreen from '../../Private/Settings/SettingsScreen';
import CelebrityScreen from '../../Private/Celebrity/CelebrityScreen';
import SawProfileScreen from '../../Private/SawProfile/SawProfileScreen';
import StellarProfileScreen from '../../Private/StellarProfile/StellarProfileScreen';
import PaymentScreen from '../../Private/PaymentScreen/PaymentScreen';

import ReadyScreen from '../../Private/Ready/ReadyScreen';
import WaitScreen from '../../Private/Wait/WaitScreen';
import SpeedRoundScreen from '../../Private/SpeedRound/SpeedRoundScreen';
import QuestionScreen from '../../Private/Question/QuestionScreen';
import RoundStatusScreen from '../../Private/RoundStatus/RoundStatusScreen';

import HelpAndSupportScreen from '../../Private/HelpAndSupport/HelpAndSupportScreen';
import PurchaseScreen from '../../Private/Purchase/PurchaseScreen';
import AccountScreen from '../../Private/Account/AccountScreen';

import HiddenScreen from '../../Private/Hidden/HiddenScreen';
import LocationScreen from '../../Private/Location/LocationScreen';
import MatchesScreen from '../../Private/Matches/MatchesScreen';
import EditProfileScreen from '../../Private/EditProfile/EditProfileScreen';
import PreviewProfileScreen from '../../Private/PreviewProfile/PreviewProfileScreen';
import MatchesChatScreen from '../../Private/MatchesChat/MatchesChatScreen';
import Notification from '../../../../components/Notification/Notificaton';
import GameScreen from '../../Game/pages/Game'
import TutorialScreen from '../TutorialScreen/TutorialScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="MainScreen" component={MainScreen} />
        <RootStack.Screen name="PhoneLoginScreen" component={PhoneLoginScreen} />
        <RootStack.Screen name="OtpScreen" component={OtpScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="FirstNameScreen" component={FirstNameScreen} />
        <RootStack.Screen name="BirthDateScreen" component={BirthDateScreen} />
        <RootStack.Screen name="GenderSelectionScreen" component={GenderSelectionScreen} />
        <RootStack.Screen name="InterestedPersonScreen" component={InterestedPersonScreen} />
        <RootStack.Screen name="AddPhotoScreen" component={AddPhotoScreen} />
        <RootStack.Screen name="SchoolNameScreen" component={SchoolNameScreen} />
        <RootStack.Screen name="EmailScreen" component={EmailScreen} />
        <RootStack.Screen name="ChatScreen" component={ChatScreen} />
        <RootStack.Screen name="SettingsScreen" component={SettingsScreen} />
        <RootStack.Screen name="CelebrityScreen" component={CelebrityScreen} />
        <RootStack.Screen name="SawProfileScreen" component={SawProfileScreen} />
        <RootStack.Screen name="StellarProfileScreen" component={StellarProfileScreen} />
        <RootStack.Screen name="PaymentScreen" component={PaymentScreen} />
        <RootStack.Screen name="HiddenScreen" component={HiddenScreen} />
        <RootStack.Screen name="LocationScreen" component={LocationScreen} />
        <RootStack.Screen name="MatchesScreen" component={MatchesScreen} />


        <RootStack.Screen name="ReadyScreen" component={ReadyScreen} />
        <RootStack.Screen name="WaitScreen" component={WaitScreen} />
        <RootStack.Screen name="SpeedRoundScreen" component={SpeedRoundScreen} />
        <RootStack.Screen name="QuestionScreen" component={QuestionScreen} />
        <RootStack.Screen name="RoundStatusScreen" component={RoundStatusScreen} />
        <RootStack.Screen name="GameScreen" component={GameScreen} />

        {/* Tutorial pages */}
        <RootStack.Screen name="TutorialScreen" component={TutorialScreen} />

        <RootStack.Screen name="HelpAndSupportScreen" component={HelpAndSupportScreen} />
        <RootStack.Screen name="PurchaseScreen" component={PurchaseScreen} />
        <RootStack.Screen name="AccountScreen" component={AccountScreen} />

        <RootStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <RootStack.Screen name="PreviewProfileScreen" component={PreviewProfileScreen} />
        <RootStack.Screen name="MatchesChatScreen" component={MatchesChatScreen} />
        <RootStack.Screen name="Notification" component={Notification} />

    </RootStack.Navigator>
);

export default RootStackScreen;