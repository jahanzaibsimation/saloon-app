import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import React from 'react';
import SignUp from './src/screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './src/navigations/MyDrawer';
import { MainDrawerNavigation } from './src/navigations/MainDrawerNavigation';
import TrainingResource from './src/screens/TrainingResource';
import { MyDrawer2 } from './src/navigations/MyDrawer2';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <MyDrawer2 />
      </View>
    </NativeBaseProvider>
    //  <NativeBaseProvider>
    //    <NavigationContainer>
    //      {/* <MainDrawerNavigation /> */}
    //      <MyDrawer />
    //    </NavigationContainer>
    //    <StatusBar style="auto" />
    //  </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBFCFF',
  },
});
