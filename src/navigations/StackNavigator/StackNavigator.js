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
import { Login } from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import { MyDrawer } from '../DrawerNavigator/MyDrawer';

const MainPage = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#FBFCFF',
      }}
    >
      <ImageBackground
        resizeMode='cover'
        style={{ height: '100%', width: '100%' }}
        source={require('../../../assets/images/saloon.jpg')}
      >
        <View
          style={{
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'rgba(121, 205, 224,0.7)',
          }}
        >
          <Center>
            <Container>
              <Image
                resizeMode='contain'
                style={{ width: 300 }}
                source={require('../../../assets/logos/Full-Logo-Midnight-Blue.png')}
                alt='salonsymphony'
              />
              <View style={{ marginLeft: 40 }}>
                <Stack direction='column' mb='2.5' mt='10' space={3}>
                  <Heading size='2xl'>
                    Welcome to
                    <Text color={blue}> salonsymphony</Text>
                  </Heading>
                </Stack>
              </View>
            </Container>
          </Center>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              w='20'
              size='lg'
              bg={blue}
              onPress={() => navigation.navigate('Signup')}
            >
              SignUp
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const StackNav = createStackNavigator();

const StackNavigator = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name='Welcome' component={MainPage} />
      <StackNav.Screen name='Signup' component={SignUp} />
      <StackNav.Screen name='Login' component={Login} />
      <StackNav.Screen
        options={{ headerShown: false }}
        name='Drawer'
        component={MyDrawer}
      />
    </StackNav.Navigator>
  );
};

export default StackNavigator;
