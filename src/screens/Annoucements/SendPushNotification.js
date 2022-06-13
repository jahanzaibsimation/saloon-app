import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Box, Divider, FormControl, Text, Input, Stack, TextArea } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { blue, white } from '../../utils/Color';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CustomModalPicker from '../../components/CustomModalPicker';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons'
import CustomButton from '../../components/CustomButton';

const SendPushNotification = () => {
    const [scheduleDate, setScheduleDate] = useState('Please Select a Date')
    const [hideDatePicker, setHideDatePicker] = useState(false)
    const handleDateConfirm = (date) => {
        setScheduleDate(moment(date).format('DD MM YYYY').toString());
        setHideDatePicker(false);
    };
    return (
        <View >
            <Stack style={styles.header} direction='row' mt='10' >
                <Text color={blue} fontSize='lg' bold >Annoucements </Text>
                <AntDesign style={{ marginTop: 10, marginRight: 10, color: blue }} name='doubleright' size={10} />
                <Text color={blue} fontSize='lg' bold >Push Notification</Text>
            </Stack>
            <Animatable.View style={styles.container} animation='fadeInUpBig' >
                <Box bg={'coolGray.100'} h='90%' w='90%' pt="8" pl='4' rounded="lg" shadow={2}>
                    <Stack direction="row" >
                        <FontAwesome name='bullhorn' size={25} color={blue} />
                        <Text style={styles.title}>Send Push Notification</Text>
                    </Stack>

                    <Stack direction="column" >
                        <Divider mt='5' mb='5' my='1' />
                        <FormControl>
                            <FormControl.Label>Title:</FormControl.Label>
                            <Input w='90%' size="md" />

                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Message:</FormControl.Label>
                            <TextArea placeholder='Enter Message' w="90%" />

                        </FormControl>

                        <FormControl>
                            <FormControl.Label>Send on:</FormControl.Label>
                            <TouchableOpacity onPress={() => setHideDatePicker(true)}>
                                <Box
                                    p={3}
                                    borderWidth="1"
                                    borderColor="coolGray.300"
                                    borderRadius="md"
                                    w='90%'
                                >
                                    <Text>{scheduleDate}</Text>
                                </Box>
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={hideDatePicker}
                                mode="date"
                                onConfirm={(e) => handleDateConfirm(e)}
                                onCancel={() => setHideDatePicker(false)}
                            />

                        </FormControl>

                        <FormControl>
                            <FormControl.Label>Send to:</FormControl.Label>
                            <CustomModalPicker />
                        </FormControl>

                        <CustomButton text={'Send'} onPress={() => { }} width={'90%'} mt={'7'} />

                    </Stack>

                </Box>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        marginLeft: '10%'
    },
    buttonStyle: {
        backgroundColor: blue,
        marginTop: 20,
        width: "90%",
        paddingVertical: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: white,
        fontSize: 17,
        fontWeight: "600",
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        color: blue,
        fontWeight: 'bold'
    }

})
export default SendPushNotification
