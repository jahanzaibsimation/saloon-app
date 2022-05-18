import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import React from 'react'
import SignUp from './src/screens/SignUp';


export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <SignUp />

        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
