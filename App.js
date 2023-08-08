import React from 'react';
import AppNavigator from './app/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './app/redux/store';


export default function App() {
  return (
    <Provider store={Store}>

      <NavigationContainer>

        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}


