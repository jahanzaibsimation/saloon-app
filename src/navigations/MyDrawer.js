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

function CustomIcons({ name, size, color, service }) {
    if (service === 'FontAwesome5') {
        <FontAwesome5 />
    }
    else if (service === 'AntDesign') {

    }
    else if (service === 'FontAwesome') {

    }
    else if (service === 'MaterialCommunityIcons') {

    }
}


function CustomDrawerContent(props) {
    const [isNested, setIsNested] = useState(false)
    const NestDrawerItem = () => {
        setIsNested(!isNested)
    }
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {drawerData.map(val => (
                <DrawerItem key={val.id}
                    icon={({ color, size, focus }) =>
                        <Icon name="ios-person" size={20} color="#4F8EF7" />}
                    label={({ focus, color }) => <Text style={{ color }}>{val.name}</Text>}
                    onPress={() => NestDrawerItem()}
                />
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


            {/* <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            /> */}
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
            <Drawer.Screen name="Annoucements" component={Feed} />
            <Drawer.Screen name="Performance" component={Notifications} />
            <Drawer.Screen name="Engagement" component={Feed} />
            <Drawer.Screen name="Development" component={Notifications} />
            <Drawer.Screen name="Onboarding" component={Feed} />
            <Drawer.Screen name="Employees" component={Notifications} />
            <Drawer.Screen name="Resources" component={Notifications} />

            <Drawer.Screen name="New Drawer" component={Notifications} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
            }} />



        </Drawer.Navigator>
    );
}
