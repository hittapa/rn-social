import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import store from './src/Redux/Store';
import { Provider } from 'react-redux';

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);