import { HStack, Image, Progress, VStack } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons';
export default function Playing() {
    return (
        <View style={{flex:1,position:"absolute",bottom:0,backgroundColor:"#091227"}}>
            <Progress w="100%" rounded="0" value={65} mx="4" />
            <HStack>
                <Image h="20" w="20" source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }} alt="profile" />
                <HStack alignItems="center">
                    <VStack>
                        <Text style={{ color: 'white' }}>
                            Chaf & Dust
                        </Text>
                        <Text style={{ color: 'white' }}>
                            HYONNA
                        </Text>
                    </VStack>
                    <HStack ml="32">
                    <Feather name="skip-back" size={24} color="white" />
                    <AntDesign ml="4" name="pause" size={24} color="white" />
                    <Feather name="skip-forward" size={24} color="white" />
                    </HStack>
                    {/* <Feather name="play" size={24} color="white" /> */}
                </HStack>
            </HStack>
        </View>
    )
}
