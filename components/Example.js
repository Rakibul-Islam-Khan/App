
import React from 'react';
import {
    NativeBaseProvider,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    HStack,
    Center,
    Pressable,
    ScrollView,
    View,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Playing from './Playing/Playing';

const Tab = createBottomTabNavigator();

export default function Example() {
    return (
            <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}
            >
                <Tab.Screen name="Playing" component={Playing} />
            </Tab.Navigator>
    );
}

