import React from 'react'
import { View, Image, ScrollView } from 'react-native'
import { AspectRatio, Box, Center, Heading, HStack, Stack, Text } from 'native-base'
import { blue } from '../utils/Color';

const TagsTrainRes = ({ tags }) => {

    let arr = [];
    tags.forEach((element, i) => {

        arr.push(
            <View style={{ flexDirection: 'row' }} key={element.id}>
                <Text fontSize="sm" >
                    {element.name}
                    <Text fontSize='4xl' color={blue} fontWeight="500">. </Text>
                </Text>

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
const TrainCard = ({ title, imgUrl, tags, id }) => {


    return (

        <Box mr='5' alignItems="center" >
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box h='lg'  >
                    <AspectRatio w="100%" ratio={16 / 20}  >

                        <Image style={{ resizeMode: 'cover', maxHeight: '70%', maxWidth: '100%' }} source={{
                            uri: imgUrl
                        }} alt="image" />
                    </AspectRatio>
                </Box>


                <View style={{ marginTop: -100 }}>
                    <Stack pl="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">

                                {title}
                            </Heading>

                        </Stack>
                        <Text fontWeight="400">
                            <TagsTrainRes key={id} tags={tags} />
                        </Text>

                    </Stack>
                </View>

            </Box>
        </Box >

    )
}

export default TrainCard