import { Box } from 'native-base'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import ModalPicker from './ModalPicker'

const CustomModalPicker = () => {
    const [chooseData, setChooseData] = useState('Select Contact')
    const [isModalVisible, setIsModalVisible] = useState(false)

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (option) => {
        setChooseData(option)
    }

    return (
        <View >
            <TouchableOpacity onPress={() => changeModalVisibility(true)}>
                <Box
                    p={3}
                    borderWidth="1"
                    borderColor="coolGray.300"
                    borderRadius="md"
                    w='90%'
                >
                    <Text>{chooseData}</Text>
                </Box>
            </TouchableOpacity>
            <Modal transparent={true} animationType='fade' visible={isModalVisible} onRequestClose={() => changeModalVisibility(false)}>
                <ModalPicker changeModalVisibility={changeModalVisibility} setData={setData} />
            </Modal>
            {/* <TouchableOpacity  style={styles.touchableOpacity}>
                <Text style={styles.text}>{chooseData}</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType='fade' visible={isModalVisible} onRequestClose={() => changeModalVisibility(false)}>
                <ModalPicker changeModalVisibility={changeModalVisibility} setData={setData} />
            </Modal> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    text: {
        marginVertical: 20,
        fontSize: 25
    },
    touchableOpacity: {
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        paddingHorizontal: 20
    }
})

export default CustomModalPicker