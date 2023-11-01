import { Box, Flex, Stack, Text, Avatar, Image } from "@chakra-ui/react";


function About() {

    const imageSize = {
        h: '3em',
        w: 'auto',
    };

    return (
        <Box id='about'>
            <Flex minH='100vh' align='center' w={[null,'50%']} px={{base: 10}} py={{base: 20}} m='0 auto' justify='center' direction='column' gap={[10, 10]}>
                <Flex align='center' justify='center' gap={[5, 20]} w='100%' direction={{base: 'column', xl: 'row'}}>
                    <Flex gap={10} align='center'>
                        <Avatar
                        boxSize={['2xs', 'xs']}
                        name='Joshua Nobleza'
                        src='https://avatars.githubusercontent.com/u/50343790?v=4'
                        bg='var(--chakra-colors-chakra-body-text)'
                        />
                    </Flex>
                    <Flex direction='column' gap={5} align='center'>
                        <Text
                            fontSize='5xl'
                            fontWeight='bold'
                        >
                            Hello there!👋
                        </Text>
                        <Text>
                            My name is Joshua Nobleza. Currently, I'm a student at University of Toronto majoring in Computer
                            Science with a focus on GIS. In my spare time I enjoy gaming and building my own projects.
                        </Text>
                    </Flex>
                </Flex>
                <Stack direction={['column', 'row']} align='center' justify='center' spacing={10}>
                    <Text fontWeight='bold' fontSize={['md', 'lg']}>Tech Stack</Text>
                    <Stack direction={['column', 'row']} align='center' justify='center' spacing={10} bg='var(--chakra-colors-chakra-body-text)' p='1em' borderRadius='sm'>
                        <Image
                            src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
                            alt='html5'
                            {...imageSize}
                        />
                        <Image
                            src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
                            alt='css3'
                            {...imageSize}
                        />
                        <Image
                            src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                            alt='javascript'
                            {...imageSize}
                        />
                        <Image
                            src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
                            alt='react'
                            {...imageSize}
                        />
                        <Image
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="express"
                            {...imageSize}
                        />
                    </Stack>
                </Stack>
            </Flex>
        </Box>
    );
}

export default About;