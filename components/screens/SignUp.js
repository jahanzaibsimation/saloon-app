import { StyleSheet, Image, ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center, CheckIcon, FormControl, Text, Heading, Input, Select, VStack, Checkbox } from 'native-base'
import CountryPicker from 'react-native-country-picker-modal'
import PhoneInput from 'react-native-phone-input'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { levels } from '../dummyData/data'
import moment from 'moment'

const SignUp = () => {
    const [country, setCountry] = useState({})
    const [level, setLevel] = useState({})
    const [vis, setVis] = useState(true)
    const [countryCode, setCountryCode] = useState(null)
    const [dobPlaceh, setDobPlaceh] = useState('Please Select a Date')
    const [dohPlaceh, setDohPlaceh] = useState('Please Select a Date')
    const [isDobPickerVisible, setIsDobPickerVisibility] = useState(false);
    const [isDohPickerVisible, setIsDohPickerVisibility] = useState(false);


    const showDatePicker = (isDob) => {
        if (isDob) {
            setIsDobPickerVisibility(true);
        }
        else {
            setIsDohPickerVisibility(true)
        }
    };

    const hideDatePicker = (isDob) => {
        if (isDob) {
            isDobPickerVisible(false);
        }
        else {
            isDohPickerVisible(false)
        }
    };

    const handleDateConfirm = (date, isDob) => {
        if (isDob) {
            setDobPlaceh(moment(date).format('DD MM YYYY').toString())
            hideDatePicker(true);
        }
        else {
            setDohPlaceh(moment(date).format('DD MM YYYY').toString())
            hideDatePicker(false);
        }

    };

    const handleCountryPicker = (country) => {
        setCountry(country.cca2);
        setCountryCode(country.cca2)
        setVis(false);
    }

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
                            <Input size='md' />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Last Name:*</FormControl.Label>
                            <Input size='md' />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Current Level:*</FormControl.Label>
                            <Box w="3/4" maxW="300">
                                <Select selectedValue={level} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setLevel(itemValue)}>
                                    {levels.map((val, i) => <Select.Item key={i} label={val.label} value={val.value} />)}

                                </Select>
                            </Box>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Date of Birth:*</FormControl.Label>

                            <TouchableOpacity onPress={() => showDatePicker(true)} >
                                <Box p={3} borderWidth='1' borderColor='coolGray.300' borderRadius="md" >
                                    <Text >{dobPlaceh}</Text>
                                </Box>

                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDobPickerVisible}
                                mode="date"
                                onConfirm={(e) => handleDateConfirm(e, true)}
                                onCancel={() => hideDatePicker(true)}
                            />

                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Date of Hire:*</FormControl.Label>
                            <TouchableOpacity onPress={() => showDatePicker(false)} >
                                <Box p={3} borderWidth='1' borderColor='coolGray.300' borderRadius="md" >
                                    <Text >{dohPlaceh}</Text>
                                </Box>

                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDohPickerVisible}
                                mode="date"
                                onConfirm={(e) => handleDateConfirm(e, false)}
                                onCancel={() => hideDatePicker(false)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Phone No:</FormControl.Label>
                            <PhoneInput />

                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Location:*</FormControl.Label>
                            <CountryPicker

                                countryCode={countryCode}
                                withFilter
                                withFlag
                                withCountryNameButton
                                withAlphaFilter

                                // onSelect={val => [setCountry(val), setVis(false)]}
                                onSelect={val => handleCountryPicker(val)}
                            />
                        </FormControl>

                        <Checkbox width='4/5' >
                            I agree not to share, copy, or sell any resources or personal data found on SalonsSymphony
                        </Checkbox>

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