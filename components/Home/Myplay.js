import React, { useEffect, useState } from 'react'
import {
    View,
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    Stack,
    ScrollView,
} from 'native-base';
export default function Myplay() {
    const [music, setMusic] = useState([]);
    useEffect(() =>{
        fetch('https://rakibul-islam-khan.github.io/JSON/music.json')
        .then(res => res.json())
        .then(data => setMusic(data))
    },[])
    return (
        <View>
            <Heading fontSize="2xl" color="white" mt="5" mb="5">My Playlist</Heading>
            <ScrollView horizontal={true}>
                {
                   music.map(card =>( <Box
                   key={card.id}
                    w="190"
                    mx="3"
                    shadow={1}
                    rounded="lg"
                    overflow="hidden"
                    _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700",
                    }}
                >
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image
                                source={{
                                    uri: card.image
                                }}
                                alt="image"
                                h="242"
                            />
                        </AspectRatio>
                    </Box>
                    
                    <Center mt="150">
                        <Stack space={2}>
                            <Heading size="sm" color="white" textAlign="center">
                                {card.music_name}
                            </Heading>
                            <Text
                                fontSize="xs"
                                _light={{
                                    color: "white",
                                }}
                                _dark={{
                                    color: "white",
                                }}
                                fontWeight="500"
                                ml="-0.5"
                                mt="-1"
                                textAlign="center"
                            >
                               {card.artist}
                            </Text>
                        </Stack>
                    </Center>
                </Box>))}
            </ScrollView>
        </View>
    )
}
