import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp'
import { MyDrawer } from '../DrawerNavigator/MyDrawer';
import { IntroScreen } from '../../screens/IntroScreen/IntroScreen';

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
