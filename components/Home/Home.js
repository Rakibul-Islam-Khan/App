import {
    Box,
    View,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    Stack,
    ScrollView,
    Button,
    StatusBar,
    Spinner
} from 'native-base';
import React, { useEffect, useState } from 'react'
import Example from '../Example';
import Playing from '../Playing/Playing';
import Myplay from './Myplay';

const Home = ({ navigation }) => {
    const [music, setMusic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://rakibul-islam-khan.github.io/JSON/music.json');
            const json = await response.json();
            setIsLoading(false);
            setMusic(json);
        }
        fetchData();
    }, [])
    if (isLoading) {
        return (
            <Center style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Spinner size="large" color="#0000ff" />
            </Center>
        )
    }
    return (
        <>
            <ScrollView bgColor="#091227">
                <StatusBar backgroundColor="#091227" barStyle="light-content"/>
                <View mx="3">
                <Heading fontSize="2xl" color="white" mt="2" mb="5">Recommended for you</Heading>
                <ScrollView horizontal={true}>
                    {
                        music.map(card => (<Box
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
                <Myplay />
                </View>
                {/* <Playing/> */}
                <Example/>
            </ScrollView>
        </>
    )
}

export default Home;
