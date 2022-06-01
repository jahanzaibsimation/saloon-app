import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, AspectRatio, Box, Center, Heading, HStack, Image, Stack, Badge } from 'native-base'
import React from 'react'
import { View, ScrollView } from 'react-native'
import { trainingResources } from '../../dummyData/trainingResources'
import TrainCard from '../components/TrainCard'
import { blue } from '../utils/Color'
import * as Animatable from 'react-native-animatable';

const TrainingResource = () => {
    return (

        <Animatable.View animation='bounceInLeft' style={{ marginTop: '10%' }}>
            <Stack direction="column" m="2.5" mt="1.5" space={3}>
                <Stack direction='row' >
                    <Text color={blue} bold fontSize='lg'>Development </Text>
                    <AntDesign style={{ marginTop: 10, marginRight: 10, color: blue }} name='doubleright' size={10} />
                    <Text color={blue} bold fontSize='lg'>Training Docs</Text>


                    <MaterialCommunityIcons style={{ marginLeft: 10 }} name='inbox-full' color={blue} size={25} />
                    {/* <Badge
                        colorScheme="info" rounded="full" mt={-1} ml={-6} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                            fontSize: 10
                        }}>
                        2
                    </Badge> */}


                </Stack>
                <Stack mt="2.5" direction='row' >
                    <Heading fontSize='xl' color={blue}>Upload Training Resources</Heading>
                </Stack>
                {console.log(trainingResources)}
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    {trainingResources.map(val => (
                        <TrainCard key={val.id} title={val.title} imgUrl={val.imgUrl} tags={val.tags} id={val.id} />
                    ))}
                </ScrollView>


                {/* <TrainCard imageLoc={val.imageLoc} id={val.id} tags={val.tags} key={val.id} title={val.title} /> */}

            </Stack>
        </Animatable.View>

    )
}

export default TrainingResource