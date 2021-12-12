import React from "react";
import {
  Text,
  HStack,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  IconButton,
  Icon
} from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import DrawerContent from "./components/DrawerContent/DrawerContent";
import Liked from "./components/Liked/Liked";
import Language from "./components/Language/Language";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Setting from "./components/Setting/Setting";
import { Feather, FontAwesome5, Entypo, MaterialCommunityIcons, SimpleLineIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Example from "./components/Example";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          initialRouteName="Home"
          screenOptions={{
            drawerLabelStyle: { marginLeft: -20, },
            drawerInactiveTintColor: '#fff',
          }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerTitle: "",
              headerStyle: {
                backgroundColor: '#091227',
              },
              drawerIcon: ({ color }) => (
                <AntDesign name="home" size={20} color={color} />
              ),
              headerLeft: () => (
                <IconButton onPress={() => navigation.toggleDrawer()} icon={<Icon size="sm" as={<FontAwesome5 name='grip-lines' />} color="white" />} />
              ),
              headerRight: () => (
                <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                  color="white" size='sm' />} />
              )

            })} />
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: '#091227',
              },
              headerTintColor: '#fff',
              drawerIcon: ({ color }) => (
                <FontAwesome5 name="user" size={20} color={color} />
              ),
              headerLeft: () => (
                <IconButton onPress={() => navigation.goBack()} icon={<Icon size="sm" as={<AntDesign name='arrowleft' />} color="white" />} />
              ),
            })}
          />
          <Drawer.Screen name="Liked" component={Liked} options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#091227',
            },
            headerTintColor: '#fff',
            drawerIcon: ({ color }) => (
              <Feather name="heart" size={20} color={color} />
            ),
            headerLeft: () => (
              <IconButton onPress={() => navigation.goBack()} icon={<Icon size="sm" as={<AntDesign name='arrowleft' />} color="white" />} />
            ),
          })} />
          <Drawer.Screen name="Language" component={Language} options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#091227',
            },
            headerTintColor: '#fff',
            drawerIcon: ({ color }) => (
              <Entypo name="language" size={20} color={color} />
            ),
            headerLeft: () => (
              <IconButton onPress={() => navigation.goBack()} icon={<Icon size="sm" as={<AntDesign name='arrowleft' />} color="white" />} />
            ),
          })} />
          <Drawer.Screen name="Contact" component={Contact} options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#091227',
            },
            headerTintColor: '#fff',
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="message-text-outline" size={20} color={color} />
            ),
            headerLeft: () => (
              <IconButton onPress={() => navigation.goBack()} icon={<Icon size="sm" as={<AntDesign name='arrowleft' />} color="white" />} />
            ),
          })} />
          <Drawer.Screen name="Faq" component={Faq} options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#091227',
            },
            headerTintColor: '#fff',
            drawerIcon: ({ color }) => (
              <SimpleLineIcons name="bulb" size={20} color={color} />
            ),
            headerLeft: () => (
              <IconButton onPress={() => navigation.goBack()} icon={<Icon size="sm" as={<AntDesign name='arrowleft' />} color="white" />} />
            ),
          })} />
          <Drawer.Screen name="Setting" component={Setting} options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#091227',
            },
            headerTintColor: '#fff',
            drawerIcon: ({ color }) => (
              <SimpleLineIcons name="settings" size={20} color={color} />
            ),
            headerLeft: () => (
              <IconButton onPress={() => navigation.goBack()} icon={<Icon size="sm" as={<AntDesign name='arrowleft' />} color="white" />} />
            ),
          })} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light" ? true : false}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
