import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import axios from 'axios'
import { Avatar, Box, Text, Input, FlatList, Heading, HStack, VStack, Spacer, Center } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

// https://randomuser.me/api/?page=3&results=10

const UserList = () => {
    // TODO: Resolve Bug when search re render the component
    // TODO: When click on user its navigate to user detail screen

    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [userTemp, setUserTemp] = useState([])
    const [txtUser, setTxtUser] = useState('')

    const getUsers = async () => {
        await axios.get('https://randomuser.me/api/?page=3&results=10')
            .then(res => {
                setUserTemp(res.data.results);
                setUsers(res.data.results)
            })
        setIsLoading(false)
    }

    useEffect(() => {
        getUsers();
    }, []);


    const searchContact = (val) => {
        const filteredContacts = userTemp.filter(usr => {
            let contactLowerCase = (usr.name.first + ' ' + usr.name.last).toLowerCase();
            let searchTermLowerCase = val.toLowerCase()

            return contactLowerCase.indexOf(searchTermLowerCase) > -1
        })
        setUsers(filteredContacts)
        setTxtUser(val)
    }

    const HeaderComp = () => {
        return (
            <View style={{ marginTop: 10 }}>
                <Heading fontSize="xl" p="4" pb="3">
                    Inbox
                </Heading>
                <Center>
                    <Input clearButtonMode='always' defaultValue={txtUser} onChangeText={e => searchContact(e)} fontSize='lg' width='90%' mb='5' placeholder="Search by name..." />
                </Center>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <Box borderBottomWidth="1" _dark={{
                borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                <HStack space={3} justifyContent="space-between">
                    <Avatar size="48px" source={{
                        uri: item.picture.large
                    }} />
                    <VStack>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold >
                            {`${item.name.first} ${item.name.last}`}
                        </Text>

                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {item.email}
                        </Text>
                    </VStack>
                    <Spacer />
                    <AntDesign color={'grey'} style={styles.icon} name='right' size={15} />
                </HStack>
            </Box>
        )
    }

    return (

        <Box style={styles.container}>
            {isLoading ? (
                <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color='#bad555' />
                </View>
            ) : (
                <View style={{ width: '100%' }}>
                    <FlatList ListHeaderComponent={HeaderComp} style={styles.flatListItems} showsVerticalScrollIndicator={false} data={users} renderItem={renderItem} keyExtractor={item => item.email} />
                </View>
            )}
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
        flexDirection: 'column',
    },
    itemWrapperStyle: {
        width: 500,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    itemImageStyle: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    contentWrapperStyle: {
        justifyContent: 'space-around'
    },
    txtNameStyle: {
        fontSize: 16
    },
    txtEmailStyle: {
        color: 'blue'
    },
    icon: {
        marginTop: 15
    },
    flatListItems: {
        marginBottom: 40
    }
})

export default UserList