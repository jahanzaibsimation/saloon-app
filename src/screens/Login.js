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
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { blue } from '../utils/Color';

export const Login = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{ height: "100%", width: "100%", backgroundColor: "white" }}
      source={require("../../assets/images/saloon.jpg")}
      blurRadius={1}
      imageStyle={{ opacity: 0.1 }}
    >
      <Center w="100%">
        <Box safeArea w="90%" maxW="290">
          <Image
            resizeMode="contain"
            source={require("../../assets/logos/Full-Logo-Midnight-Blue.png")}
            style={{ width: "100%", height: 70, marginVertical: 50 }}
          />
          <View >
            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              style={{ textAlign: "center" }}
            >
              Welcome
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
              style={{ textAlign: "center" }}
            >
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input size="md" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input size="md" type="password" />

                <TouchableOpacity>
                  <Text style={{  color: "#090C4E" 
                  , fontWeight: "600",textAlign:"right",marginTop:10 }}>Forget Password?</Text>
                </TouchableOpacity>
              </FormControl>

              <HStack mt="1" justifyContent="center">
                <TouchableOpacity
                  style={{
                    backgroundColor: "#090C4E",
                    width: "100%",
                    paddingVertical: 15,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  //onPress={() => navigation.navigate("Welcome")}
                >
                  <Text
                    style={{
                      color: "#F2F2F2",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              </HStack>
              <HStack mt="1" justifyContent="center">
                <TouchableOpacity
                  style={{
                    backgroundColor: "#090C4E",
                    width: "100%",
                    paddingVertical: 15,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => navigation.navigate("Signup")}
                >
                  <Text
                    style={{
                      color: "#F2F2F2",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </View>
        </Box>
      </Center>
    </ImageBackground>
  );
};
