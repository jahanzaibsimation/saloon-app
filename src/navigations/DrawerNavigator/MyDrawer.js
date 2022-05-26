import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { blue } from '../../utils/Color';
import { drawerItemsMain } from '../drawerItemsMain';
import { drawerData } from '../../../dummyData/drawer';
import { Box, Divider, Image } from 'native-base';
import { drawerData2 } from '../../../dummyData/drawer2';

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomIcons({ name, size, color, service, width }) {
  if (service === 'FontAwesome5') {
    return (
      <FontAwesome5
        style={{ width: width }}
        name={name}
        size={size}
        color={color}
      />
    );
  } else if (service === 'AntDesign') {
    return (
      <AntDesign
        style={{ width: width }}
        name={name}
        size={size}
        color={color}
      />
    );
  } else if (service === 'FontAwesome') {
    return (
      <FontAwesome5
        style={{ width: width }}
        name={name}
        size={size}
        color={color}
      />
    );
  } else if (service === 'MaterialCommunityIcons') {
    return (
      <MaterialCommunityIcons
        style={{ width: width }}
        name={name}
        size={size}
        color={color}
      />
    );
  }
  return <View></View>;
}

function CustomDrawerContent(props) {
  console.log('THis is the app');
  const CustomDrawerItem = ({ name, isActive }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleOnPress = () => {
      setIsFocused(true);
      props.navigation.navigate(name);
    };
    return (
      <DrawerItem
        label={({ focused, color }) => (
          <View style={{ position: 'relative', left: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: isActive ? blue : "white", borderRadius: 10, width: '100%', height: 30 }}>
            <Text style={{ color: isActive ? 'white' : 'black' }}>
              {name}
            </Text>
          </View>
        )}
        // onPress={() => props.navigation.navigate(name)}
        onPress={() => handleOnPress()}
        // onPress={() => console.log(JSON.stringify(props))}
        focused={isFocused}
      />
    );
  };

  const HeaderDrawer = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: blue,
          paddingTop: 20,
        }}
      >
        <Image
          height={100}
          width={250}
          resizeMode='contain'
          alt='salonsymphony'
          resizeMethod='auto'
          source={require('../../../assets/logos/SS-Teal-Full-White-Logo.png')}
        />
      </View>
    );
  };

  const getActiveRoute = (state) => {
    //console.log(state.history);
    let currentRouteKey = state.history[state.history.length - 1].key;
    if (currentRouteKey == undefined) {
      currentRouteKey = state.history[state.history.length - 2].key;
    }
    if (currentRouteKey && currentRouteKey.length > 0) {
      const filteredRoutes = state.routes.filter(
        (route) => route.key == currentRouteKey
      );
      if (filteredRoutes && filteredRoutes.length > 0) {
        const currentRouteName = filteredRoutes[0].name;
        return currentRouteName;
      }
      console.log("Cant find route in route array");
    }
    console.log("Cant find route in history");
  };

  const ExpandableMenu = ({ name, subMenu, icon }) => {
    const [isOpened, setIsOpened] = useState(false);
    const activeRoute = getActiveRoute(props.state);

    useEffect(() => {
      subMenu.forEach((element) => {
        if (activeRoute == element.name) {
          setIsOpened(true);
        }
      });
    }, [])

    const subMenuView = [];
    subMenu.forEach((element) => {
      let isActive = false;
      if (activeRoute == element.name) {
        isActive = true;
      }
      subMenuView.push(<CustomDrawerItem isActive={isActive} key={element.id} {...element} />);
    });
    return (
      <>
        <DrawerItem
          style={{ flexDirection: 'column' }}
          icon={({ color, size, focus }) => (
            <CustomIcons
              width={20}
              name={icon.name}
              color={blue}
              service={icon.service}
              size={17}
            />
          )}
          label={({ focus, color }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: blue }}>
                {name}
              </Text>
              <AntDesign
                style={{ marginTop: 5 }}
                name={!isOpened ? 'right' : 'down'}
                size={15}
                color={blue}
              />
            </View>
          )}
          onPress={() => setIsOpened(!isOpened)}
        />
        <Divider />

        {isOpened && subMenuView}
        {/* {isOpened &&
          subMenu.map((element) => (
            <CustomDrawerItem key={element.id} {...element} />
          ))} */}
      </>
    );
  };

  const menu = [];
  menu.push(<HeaderDrawer key={'firstItem'} />);
  drawerData2.forEach((element) => {
    menu.push(<ExpandableMenu key={element.id} {...element}></ExpandableMenu>);
  });

  return <DrawerContentScrollView {...props}>{menu}</DrawerContentScrollView>;
}

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  const CustomIcon = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image
            source={require('../../../assets/logos/CustomIcons.png')}
            height={50}
            width={50}
            resizeMode='contain'
            alt='salonsymphony'
            resizeMethod='auto'
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Drawer.Navigator
      // initialRouteName='Screen1'
      defaultScreenOptions={{
        drawerLabelStyle: {
          color: 'yellow',
        },
      }}
      useLegacyImplementation
      screenOptions={({ navigation }) => ({
        // headerLeft: (props) => <CustomIcon onPress={navigation.toggleDrawer} />,
        drawerLabelStyle: {
          color: blue,
        },
        // drawerStyle: {
        //     backgroundColor: blue,
        // }
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >


      <Drawer.Screen
        name='Post Announcement'
        component={Notifications}
        options={{
          drawerLabel: () => <Text>Screen 1</Text>,
          title: null,
          drawerIcon: () => null,
        }}
      />
      <Drawer.Screen
        name='Send Push Notification'
        component={Notifications}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
        }}
      />
      <Drawer.Screen
        name='Add Upcoming Event'
        component={Notifications}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
        }}
      />
    </Drawer.Navigator>
  );
}
