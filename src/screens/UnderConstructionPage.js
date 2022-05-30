import { Center, Heading } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { blue } from '../utils/Color'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';

export default function UnderConstructionPage() {
    return (
        <View style={{ backgroundColor: blue, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Animatable.View animation='bounceIn'>
                <Feather name='tool' size={50} color='white' />
            </Animatable.View>
            <Animatable.View animation='shake'>
                <Center>
                    <Heading size='3xl' color='white'>Under</Heading>
                    <Heading size='3xl' color='white'>Construction</Heading>
                </Center>
            </Animatable.View>

        </View>
    )
}