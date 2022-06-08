import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,

  VStack,
} from 'native-base';
import { View, Image, ImageBackground, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { blue, white } from '../utils/Color';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../components/CustomButton';

export const Login = ({ navigation }) => {
  return (

    <SafeAreaView style={{ flex: 1 }} backgroundColor={white}>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("Signup")}>
        <Text bold color={blue}>Register</Text>
      </TouchableOpacity>
      <Center w="100%" >
        <Box safeArea w="90%" maxW="290">
          <Animatable.Image
            animation='bounceIn'
            duration={1500}
            resizeMode="contain"
            source={require("../../assets/logos/SalonSymphony-Logo-Blue-Small.png")}
            style={styles.imageStyle}

          />
          <Animatable.View animation='fadeInUpBig' >

            <VStack space={3} mt="3">
              <FormControl>
                <View style={styles.formLabelView}>
                  <Text backgroundColor={white} bold color={blue}>Email ID</Text>
                </View>
                <Input backgroundColor={white} size="md" zIndex={-999} />

              </FormControl>
              <FormControl>
                <View style={styles.formLabelView}>
                  <Text backgroundColor={white} bold color={blue}>Password</Text>
                </View>
                <Input backgroundColor={white} size="md" type="password" zIndex={-999} />


              </FormControl>

              <HStack mt="1" justifyContent="center">
                <CustomButton onPress={() => navigation.navigate("Drawer")} text={'Sign In'} />
                {/* <Button onPress={} mt="2" width={'100%'} backgroundColor={blue} color={white} >
                  <Text bold
                    style={styles.signinText}
                  >
                    Sign In
                  </Text>
                </Button> */}

              </HStack>
              <TouchableOpacity>
                <Text style={{
                  color: blue
                  , fontWeight: "600", textAlign: "center", marginTop: 10
                }}>Forget Password?</Text>
              </TouchableOpacity>
              <View style={{ top: 40 }}>
                <Text style={{ fontSize: 12 }} color={blue}>Salon Symphony is only available to register salons.
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 12 }} color={blue}>
                  If you have trouble signing in, please contact your manager for assistance</Text>
              </View>

            </VStack>
          </Animatable.View>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formLabelView: {
    display: 'flex',
    left: 20,
    top: 10,
    width: 80,
    backgroundColor: white,
    alignItems: 'center'
  },
  imageStyle: {
    width: "100%",
    height: '20%',
    marginVertical: 50
  },
  signupButton: {
    alignSelf: 'flex-end',
    right: 20,
    top: 10
  },

  signinText: {
    color: white,
    fontSize: 17,

  }
})