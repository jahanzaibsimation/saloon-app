import { View } from 'react-native'
import React from 'react'
import { AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text } from 'native-base'
import { blue } from '../utils/Color';

const TagsTrainRes = ({ tags, key, id }) => {
    let arr = [];
    tags.forEach(element => {

        arr.push(
            <View key={id}>
                <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                    {element}
                </Text>
                <Text fontSize='xl' color={blue} marginLeft='2' fontWeight="500">.</Text>
            </View>
        )
    });
    return (
        <>
            {arr}
        </>
    )
}

// const TrainCard = ({ imageLoc, title, tags, id }) => {
const TrainCard = () => {
    return (
        <View>

            <Box alignItems="center">
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={
                                require('../../assets/images/products/loreal-hair-color.jpg')
                            } alt="image" />
                        </AspectRatio>

                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                The Garden City
                            </Heading>

                        </Stack>
                        <Text fontWeight="400">
                            Bengaluru (also called Bangalore) is the center of India's high-tech
                            industry. The city is also known for its parks and nightlife.
                        </Text>

                    </Stack>
                </Box>
            </Box>
        </View>
    )
}

export default TrainCard