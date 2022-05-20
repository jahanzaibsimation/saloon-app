import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { blue } from '../utils/Color';
import { drawerItemsMain } from './drawerItemsMain';
import { drawerData } from '../../dummyData/drawer';
import { Divider, Image } from 'native-base';



function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text >Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomIcons({ name, size, color, service, width }) {
    if (service === 'FontAwesome5') {
        return (<FontAwesome5 style={{ width: width }} name={name} size={size} color={color} />)
    }
    else if (service === 'AntDesign') {
        return <AntDesign style={{ width: width }} name={name} size={size} color={color} />
    }
    else if (service === 'FontAwesome') {
        return (<FontAwesome5 style={{ width: width }} name={name} size={size} color={color} />)
    }
    else if (service === 'MaterialCommunityIcons') {
        return (<MaterialCommunityIcons style={{ width: width }} name={name} size={size} color={color} />)
    }
    return (
        <View></View>
    )
}


function CustomDrawerContent(props) {
    const [isNested, setIsNested] = useState(false)
    const NestDrawerItem = (name) => {
        // setIsNested(!isNested)
        if (name === 'Annoucements') {
            console.log('Name: ' + name)
            return <DrawerItem
                label={({ focus, color }) => <Text style={{ color: blue }}>Home 1</Text>}
                // onPress={() => props.navigation.navigate('Feed')}
                onPress={() => props.navigation.navigate('New Drawer')}
            />
        }

    }
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ alignItems: 'center', backgroundColor: blue }}>
                <Image height={100} width={250} resizeMode='contain' alt='salonsymphony' resizeMethod='auto' source={require('./../../assets/logos/SS-Teal-Full-White-Logo.png')} />
            </View>


            <View style={{ flex: 1 }}>
                {drawerData.map(val => (
                    <View key={val.id}>
                        <DrawerItem style={{ flexDirection: 'column', }}
                            icon={({ color, size, focus }) =>
                                <CustomIcons width={20} name={val.icon.name} color={blue} service={val.icon.service} size={17} />}
                            label={({ focus, color }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: blue }}>{val.name}</Text>
                                    <AntDesign style={{ marginTop: 5 }} name='right' size={15} color={blue} />
                                </View>
                            )}
                            onPress={() => NestDrawerItem(val.name)}
                        />
                        <Divider />
                        {/* <View style={{ marginLeft: 62 }}>
                            <DrawerItem
                                label={({ focus, color }) => <Text style={{ color: blue }}>Home 1</Text>}
                                // onPress={() => props.navigation.navigate('Feed')}
                                onPress={() => props.navigation.navigate(<Feed />)}
                            />
                        </View> */}
                    </View>
                ))}

                {isNested && (
                    <>
                        <DrawerItem
                            icon={({ color, size, focus }) => <Icon name="ios-person" size={30} color="#4F8EF7" />}
                            label={({ focus, color }) => <Text style={{ color: blue }}>Home 1</Text>}
                            // onPress={() => props.navigation.navigate('Feed')}
                            onPress={() => props.navigation.navigate(<Feed />)}
                        />
                        <DrawerItem
                            icon={({ color, size, focus }) => <Icon name="ios-person" size={30} color="#4F8EF7" />}
                            label={({ focus, color }) => <Text style={{ color }}>Home 2</Text>}
                            onPress={() => <Notifications />}
                        />
                    </>
                )}
                <DrawerItemList  {...props} />
            </View>

        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export function MyDrawer() {
    const [isNested, setIsNested] = useState(false)
    const NestDrawerItem = () => {
        setIsNested(!isNested)
    }
    return (

        <Drawer.Navigator
            // initialRouteName="Home"

            defaultScreenOptions={
                {
                    drawerLabelStyle: {
                        color: 'yellow'
                    }
                }
            }
            useLegacyImplementation
            screenOptions={{

                drawerLabelStyle: {
                    color: blue
                },
                // drawerStyle: {
                //     backgroundColor: blue,
                // }
            }}

            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >

            <Drawer.Screen name="New Drawer" component={Notifications} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
            }} />



        </Drawer.Navigator>
    );
}
