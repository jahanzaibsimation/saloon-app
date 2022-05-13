import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './components/screens/Login';
import React from 'react'
import SignUp from './components/screens/SignUp';


export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <Login /> */}
        <SignUp />

        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFCFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
