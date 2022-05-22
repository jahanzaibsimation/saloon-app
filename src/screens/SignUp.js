import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  CheckIcon,
  FormControl,
  Text,
  Heading,
  Select,
  Input,
  VStack,
  Checkbox,
} from 'native-base';
import PhoneInput from 'react-native-phone-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { levels } from '../../dummyData/data';
import moment from 'moment';
import PickerModal from 'react-native-picker-modal-view';
import cityData from '../../dummyData/city.json';
import { blue, white } from '../utils/Color';

const SignUp = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState({});
  const [arr, setArr] = useState(new Array(1000).fill('Hello World'));
  //console.log(customizeCities);
  const [city, setCity] = useState({});
  const [level, setLevel] = useState({});
  const [vis, setVis] = useState(true);
  const [dobPlaceh, setDobPlaceh] = useState('Please Select a Date');
  const [dohPlaceh, setDohPlaceh] = useState('Please Select a Date');
  const [isDobPickerVisible, setIsDobPickerVisibility] = useState(false);
  const [isDohPickerVisible, setIsDohPickerVisibility] = useState(false);

  const showDatePicker = (isDob) => {
    if (isDob) {
      setIsDobPickerVisibility(true);
    } else {
      setIsDohPickerVisibility(true);
    }
  };
  const onClosed = () => {
    console.log('close key pressed');
  };

  const onSelected = (selected) => {
    console.log(selected);
    setSelectedItem(selected);

    return selected;
  };

  const onBackButtonPressed = () => {
    console.log('back key pressed');
  };

  const hideDatePicker = (isDob) => {
    if (isDob) {
      isDobPickerVisible(false);
    } else {
      isDohPickerVisible(false);
    }
  };

  const handleDateConfirm = (date, isDob) => {
    if (isDob) {
      setDobPlaceh(moment(date).format('DD MM YYYY').toString());
      hideDatePicker(true);
    } else {
      setDohPlaceh(moment(date).format('DD MM YYYY').toString());
      hideDatePicker(false);
    }
  };

  const handleCountryPicker = (country) => {
    setCountry(country.cca2);
    setCountryCode(country.cca2);
    setVis(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Center w='100%' h='90%'>
          <Box safeArea w='100%' maxW='290'>
            <Image
              resizeMode='contain'
              style={{ width: 250 }}
              source={require('../../assets/logos/Full-Logo-Midnight-Blue.png')}
            />

            <Heading
              size='lg'
              color='coolGray.800'
              _dark={{
                color: 'warmGray.50',
              }}
              fontWeight='semibold'
            >
              Welcome
            </Heading>
            <Heading
              mt='1'
              color='coolGray.600'
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight='medium'
              size='xs'
            >
              Sign up to continue!
            </Heading>
            <VStack space={3} mt='5'>
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

                <Select
                  selectedValue={level}
                  minWidth='200'
                  accessibilityLabel='Choose Levels'
                  placeholder='Choose Levels'
                  _selectedItem={{
                    bg: 'teal.600',
                    endIcon: <CheckIcon size='5' />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setLevel(itemValue)}
                >
                  {levels.map((val, i) => (
                    <Select.Item key={i} label={val.label} value={val.value} />
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormControl.Label>Date of Birth:*</FormControl.Label>

                <TouchableOpacity onPress={() => showDatePicker(true)}>
                  <Box
                    p={3}
                    borderWidth='1'
                    borderColor='coolGray.300'
                    borderRadius='md'
                  >
                    <Text>{dobPlaceh}</Text>
                  </Box>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDobPickerVisible}
                  mode='date'
                  onConfirm={(e) => handleDateConfirm(e, true)}
                  onCancel={() => hideDatePicker(true)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Date of Hire:*</FormControl.Label>
                <TouchableOpacity onPress={() => showDatePicker(false)}>
                  <Box
                    p={3}
                    borderWidth='1'
                    borderColor='coolGray.300'
                    borderRadius='md'
                  >
                    <Text>{dohPlaceh}</Text>
                  </Box>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDohPickerVisible}
                  mode='date'
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

                {console.log(typeof selectedItem)}
                <PickerModal
                  renderSelectView={(disabled, selected, showModal) => (
                    <TouchableOpacity disabled={disabled} onPress={showModal}>
                      <Box
                        p={3}
                        borderWidth='1'
                        borderColor='coolGray.300'
                        borderRadius='md'
                      >
                        <Text>
                          {Object.keys(selectedItem).length > 0
                            ? selectedItem.Name
                            : 'Please Select City'}
                        </Text>
                      </Box>
                    </TouchableOpacity>
                  )}
                  onSelected={onSelected}
                  onClosed={onClosed}
                  onBackButtonPressed={onBackButtonPressed}
                  items={cityData}
                  sortingLanguage={'tr'}
                  showToTopButton={true}
                  selected={selectedItem}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={'Choose one...'}
                  onEndReached={() => console.log('list ended...')}
                  searchPlaceholderText={'Search...'}
                  requireSelection={false}
                  autoSort={false}
                />
              </FormControl>

              <Checkbox width='4/5'>
                I agree not to share, copy, or sell any resources or personal
                data found on SalonsSymphony
              </Checkbox>

              <Button
                mt='2'
                backgroundColor={blue}
                onPress={() => navigation.navigate('Login')}
              >
                Sign up
              </Button>
            </VStack>
          </Box>
        </Center>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SignUp;
