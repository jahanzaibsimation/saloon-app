import { StyleSheet, Image, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center, CheckIcon, FormControl, Heading, Input, Select, VStack } from 'native-base'
import CountryPicker from 'react-native-country-picker-modal'
import PhoneInput from 'react-native-phone-input'
import DateTimePicker from '@react-native-community/datetimepicker';
import { levels } from '../dummyData/data'

const SignUp = () => {
    const [country, setCountry] = useState({})
    const [level, setLevel] = useState({})
    const [vis, setVis] = useState(true)
    const [date, setDate] = useState(new Date())

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Center w="100%" h="90%">
                <Box safeArea w="100%" maxW="290" >
                    <Image resizeMode="contain" style={{ width: 250 }} source={require('../../assets/logos/Full-Logo-Midnight-Blue.png')} />
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Welcome
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Sign up to continue!
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>First Name:*</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Last Name:*</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Current Level:*</FormControl.Label>
                            <Box w="3/4" maxW="300">
                                <Select selectedValue={level} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setLevel(itemValue)}>
                                    {levels.map(val => <Select.Item label={val.label} value={val.value} />)}

                                </Select>
                            </Box>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Date of Birth:*</FormControl.Label>
                            <DateTimePicker value={date} onChange={e => setDate(e)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Date of Hire:*</FormControl.Label>
                            {/* <DateTimePicker /> */}
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Phone No:</FormControl.Label>
                            <PhoneInput />

                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Location:*</FormControl.Label>
                            <CountryPicker
                                withFilter
                                withFlag
                                withCountryNameButton
                                withAlphaFilter

                                onSelect={val => [setCountry(val), setVis(false)]}
                                withModal
                            />
                            {vis ? null : (<Text>{country.name}</Text>)}
                        </FormControl>

                        <Button mt="2" colorScheme="indigo">
                            Sign up
                        </Button>
                    </VStack>
                </Box>

            </Center>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
export default SignUp