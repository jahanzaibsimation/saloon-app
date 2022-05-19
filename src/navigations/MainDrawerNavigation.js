import React from 'react'
import { Text, View } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { drawerItemsMain } from './drawerItemsMain';

const Drawer = createDrawerNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function Settings1Screen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings 1 Screen</Text>
        </View>
    );
}

function Settings2Screen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings 2 Screen</Text>
        </View>
    );
}

export function MainDrawerNavigation() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => (
                <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
            )}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings1" component={Settings1Screen} />
            <Drawer.Screen name="Settings2" component={Settings2Screen} />
        </Drawer.Navigator>
    );
}