import React, { useEffect } from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { AuthContext } from './components/context';
import RootStackScreen from './src/Screens/Public/RootStackScreen/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastProvider } from 'react-native-toast-notifications';
import { navigationRef } from './src/RootNavigation';
import Notification from './components/Notification/Notificaton';

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
  }), []);


  return (
    <>
      <ToastProvider>
        <PaperProvider >
          <AuthContext.Provider value={authContext}>
            <NavigationContainer
              ref={navigationRef}
            >
              <Notification></Notification>
            </NavigationContainer>
            <NavigationContainer>
              <RootStackScreen />
            </NavigationContainer>
          </AuthContext.Provider>
        </PaperProvider>
      </ToastProvider>
    </>
  );
}

export default App;
