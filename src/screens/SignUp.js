import { StyleSheet, Image, ScrollView, TouchableOpacity, View, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, Center, CheckIcon, FormControl, Text, Heading, Input, Select, VStack, Checkbox, HamburgerIcon, Menu, Divider } from 'native-base'
import CountryPicker from 'react-native-country-picker-modal'
import PhoneInput from 'react-native-phone-input'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import states from '../../dummyData/states.json'
import cities from '../../dummyData/cities.json'
import { levels } from '../../dummyData/data'
import moment from 'moment'


const SignUp = () => {
    const [city, setCity] = useState({})
    const [level, setLevel] = useState({})
    const [vis, setVis] = useState(true)
    const [dobPlaceh, setDobPlaceh] = useState('Please Select a Date')
    const [dohPlaceh, setDohPlaceh] = useState('Please Select a Date')
    const [isDobPickerVisible, setIsDobPickerVisibility] = useState(false);
    const [isDohPickerVisible, setIsDohPickerVisibility] = useState(false);


    useEffect(() => {

        // const c = states.map(state => {
        //     let a = cities.filter(city => city.stateCode === state.isoCode)
        //     a = a.map(val => val.name)
        //     return {
        //         state: state.name,
        //         city: a
        //     }

        // })

        // console.log(c)

        // setCity(c)


    }, [])


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
            <SafeAreaView style={{ flex: 1 }} >
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

                                <Select selectedValue={level} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setLevel(itemValue)}>
                                    {levels.map((val, i) => <Select.Item key={i} label={val.label} value={val.value} />)}

                                </Select>

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


                                {/* <Select selectedValue={country} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />
                                        }} mt={1} onValueChange={itemValue => setCountry(itemValue)}>
                                            
                                            <Select.Item  label="UX Research" value="ux" />
                                            <Select.Item label="Web Development" value="web" />
                                            <Select.Item label="Cross Platform Development" value="cross" />
                                            <Select.Item label="UI Designing" value="ui" />
                                            <Select.Item label="Backend Development" value="backend" />
                                        </Select> */}
                                <Menu onOpen={() => console.log("opened")} onClose={() => console.log("closed")} trigger={triggerProps => {
                                    return <Pressable {...triggerProps}>
                                        <Box p={3} borderWidth='1' borderColor='coolGray.300' borderRadius="md" >
                                            <Text >Please Select City</Text>
                                        </Box>
                                    </Pressable>
                                }}>
                                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }} >
                                    

                                        {/* {city.map(val => (
                                            <Menu.OptionGroup title={val.state} type="radio">
                                                <Divider />

                                                <Menu.ItemOption value="asc">Hello</Menu.ItemOption>


                                            </Menu.OptionGroup>
                                        ))} */}



                                    </View>
                                </Menu>



                                {/* <CountryPicker

                                    countryCode={countryCode}
                                    withFilter
                                    withFlag
                                    withCountryNameButton
                                    withAlphaFilter

                                    // onSelect={val => [setCountry(val), setVis(false)]}
                                    onSelect={val => handleCountryPicker(val)}
                                /> */}
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
            </SafeAreaView>
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