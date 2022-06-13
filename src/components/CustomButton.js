import { Button, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { blue, white } from '../utils/Color'

const CustomButton = ({ text, onPress, width, mt }) => {
    return (
        <Button onPress={() => onPress()} mt={mt ? mt : "2"} width={width ? width : '100%'} backgroundColor={blue} >
            <Text bold
                style={styles.buttonText}
            >
                {text}
            </Text>
        </Button>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonText: {
        color: white,
        fontSize: 17,
    }
})