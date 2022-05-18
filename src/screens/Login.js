import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack } from "native-base";
import { Image } from 'react-native'

export const Login = () => {
  return <Center w="100%">

    <Box safeArea w="90%" maxW="290">
      <Image resizeMode="contain" style={{ width: 300 }} source={require('../../assets/logos/Full-Logo-Midnight-Blue.png')} />
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Welcome
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input variant="rounded" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input variant="rounded" type="password" />
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
            Forget Password?
          </Link>
        </FormControl>
        <Button style={{ borderRadius: 50 }} mt="2" colorScheme="indigo">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            I'm a new user.{" "}
          </Text>
          <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
};