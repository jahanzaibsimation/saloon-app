import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import React from 'react'
import SignUp from './src/screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './src/navigations/MyDrawer';

export default function App() {
  return (
    <NativeBaseProvider>  
      <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
        <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFCFF',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
});
