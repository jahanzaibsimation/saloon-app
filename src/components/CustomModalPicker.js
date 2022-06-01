import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import ModalPicker from './ModalPicker'

const CustomModalPicker = () => {
    const [chooseData, setChooseData] = useState('Select Item...')
    const [isModalVisible, setIsModalVisible] = useState(false)

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (option) => {
        setChooseData(option)
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => changeModalVisibility(true)} style={styles.touchableOpacity}>
                <Text style={styles.text}>{chooseData}</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType='fade' visible={isModalVisible} onRequestClose={() => changeModalVisibility(false)}>
                <ModalPicker changeModalVisibility={changeModalVisibility} setData={setData} />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
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