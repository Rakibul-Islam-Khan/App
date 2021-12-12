import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons} from '@expo/vector-icons';
import { Stack, HStack, View, IconButton, Icon } from 'native-base';

// sunny-outline
export default function DrawerContent(props) {
    const {navigation:{closeDrawer}} = props;
    return (
        <View style={{ flex: 1,backgroundColor:"#091227" }}>
            <DrawerContentScrollView {...props}>
                <Stack style={{ flex: 1, direction: 'row' }}>
                    <HStack alignItems="center">
                        <View mr="48" ml="1">
                        <IconButton onPress={() => closeDrawer()} icon={<Icon size="md" as={<Ionicons  name='close-outline' />} color="white" />} />
                        </View>
                        <Ionicons name="moon-outline" size={24} color="gray" />
                    </HStack>
                </Stack>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}
