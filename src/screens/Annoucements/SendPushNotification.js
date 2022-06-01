import { Box, Divider, FormControl, HStack, Input, Text, VStack } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { blue } from '../../utils/Color';


const SendPushNotification = () => {
    return (
        <View style={styles.container}>
            <Box bg={'coolGray.100'} h='60%' w='80%' pt="8" pl='4' rounded="lg" _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "black",
                textAlign: "center"
            }} shadow={2}>

                <FontAwesome name='bullhorn' size={20} color={blue} />
                <Text size='lg'>Send Push Notification</Text>
                <Divider />
                <VStack >
                    <FormControl>
                        <FormControl.Label>Email ID</FormControl.Label>
                        <Input size="md" />
                        {/* <MaterialCommunityIcons name='email' style={{ marginRight: 20 }} size={16} /> */}

                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input size="md" type="password" />

                        <TouchableOpacity>
                            <Text style={{
                                color: "#090C4E"
                                , fontWeight: "600", textAlign: "right", marginTop: 10
                            }}>Forget Password?</Text>
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
                            onPress={() => navigation.navigate("Drawer")}
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

            </Box>
        </View>
    )
}

export default SendPushNotification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    }
})