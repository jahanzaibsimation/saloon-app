import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import userNames from '../../dummyData/USANames.json'

// const OPTIONS = ['red', 'yellow', 'blue', 'green', 'blue', 'red', 'black', 'white', 'green']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const ModalPicker = ({ changeModalVisibility, setData }) => {
    const onPressItem = (option) => {
        changeModalVisibility(false)
        setData(option)
    }
    const option = userNames.map((item, index) => {
        // console.log(userNames)
        return (
            <TouchableOpacity style={styles.option} key={index} onPress={() => onPressItem(item.name)}>
                <Text style={styles.text}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
            onPress={() => changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ModalPicker