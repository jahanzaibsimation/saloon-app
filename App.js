import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import React from 'react';
import SignUp from './src/screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './src/navigations/DrawerNavigator/MyDrawer';
import { MainDrawerNavigation } from './src/navigations/MainDrawerNavigation';
import TrainingResource from './src/screens/TrainingResource';
import { MyDrawer2 } from './src/navigations/MyDrawer2';
import StackNavigator from './src/navigations/StackNavigator/StackNavigator';
import PdfViewer from './src/components/PdfViewer';
import { IntroScreen } from './src/screens/IntroScreen';
import { Provider } from 'react-redux';

export default function App() {

  return (
    // <NativeBaseProvider>
    //   <View style={styles.container}>
    //     <TrainingResource />
    //     {/* <PdfViewer /> */}
    //   </View>
    // </NativeBaseProvider>
    <NativeBaseProvider>
      <NavigationContainer>

        <StackNavigator />
        {/* <StackNavigator /> */}
        {/* <MainDrawerNavigation /> */}
        {/* <MyDrawer /> */}
        {/* <IntroScreen /> */}

      </NavigationContainer>
      <StatusBar style='auto' />
    </NativeBaseProvider>
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
