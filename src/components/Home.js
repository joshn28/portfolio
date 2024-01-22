import { Text, Flex } from "@chakra-ui/react";
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <Flex align='center' h='100vh' justify='center' id='home' mx='0 auto'>
            <Text
                bgGradient='linear(to-l, #DD6B20, #4299E1)'
                bgClip='text'
                fontSize={{base: 'sm', md: '2xl' }}
                fontWeight='extrabold'
            >
                <TypeAnimation
                    sequence={[
                        'I am a developer',
                        2000,
                        'I am a student',
                        2000,
                        'I am a problem solver',
                        2000,
                    ]}
                    speed={50}
                    cursor={true}
                    repeat={Infinity}
                    style={{fontSize: '2em'}}
                />
            </Text>
        </Flex>
    );
}

export default Home;