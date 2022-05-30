import { ImageBackground, View } from 'react-native';
import React from 'react';
import {
  Text,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Icon,
  Button,
} from 'native-base';
import { blue } from '../../utils/Color';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, LoginForm } from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import { MyDrawer } from '../DrawerNavigator/MyDrawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IntroScreen } from '../../screens/IntroScreen';

const MainPage = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: "#FBFCFF",
      }}
    >
      <ImageBackground
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/images/saloon.jpg")}
      >
        <View
          style={{
            alignItems: "center",
            height: "100%",
            backgroundColor: "rgba(121, 205, 224,0.7)",
          }}
        >
          <Center>
            <Container>
              <Image
                resizeMode="contain"
                style={{ width: 300 }}
                source={require("../../../assets/logos/Full-Logo-Midnight-Blue.png")}
                alt="salonsymphony"
              />
              <View style={{ marginLeft: 40 }}>
                <Stack direction="column" mb="2.5" mt="10" space={3}>
                  <Heading size="2xl" style={{ textAlign: "center" }}>
                    Welcome to
                    <Text color={blue}> salonsymphony</Text>
                  </Heading>
                </Stack>
              </View>
            </Container>
          </Center>
          <TouchableOpacity
            style={{
              backgroundColor: "#090C4E",
              width: 200,
              paddingVertical: 15,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ color: "#F2F2F2", fontSize: 17, fontWeight: "600" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const StackNav = createStackNavigator();

const StackNavigator = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Welcome"
        options={{ header: () => { } }}
        component={IntroScreen}
      />
      <StackNav.Screen
        name="Login"
        options={{ header: () => { } }}
        component={Login}
      />
      <StackNav.Screen
        name="Signup"
        component={SignUp}
        options={{
          title: "Sign Up",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeftContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />

      <StackNav.Screen
        options={{ headerShown: false }}
        name="Drawer"
        component={MyDrawer}
      />
    </StackNav.Navigator>
  );
};

export default StackNavigator;
