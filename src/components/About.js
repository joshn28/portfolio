import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

function About() {
    return (
        <Box id='about'>
            <Flex minH='min' align='center' w={{ base: '100%', md: '80%', lg: '75%', xl: '55%' }} px={{ base: 10 }} py={{ base: 10 }} m='0 auto' justify='center' direction='column' gap={[10, 10]}>
                <Flex align='center' justify='center' gap={{ base: 5, lg: 15, xl: 20 }} w='100%' direction={{base: 'column', xl: 'row'}}>
                    <Flex align='center'>
                        <Avatar
                        boxSize={['2xs', 'xs']}
                        name='Joshua Nobleza'
                        src='https://avatars.githubusercontent.com/u/50343790?v=4'
                        bg='var(--chakra-colors-chakra-body-text)'
                        />
                    </Flex>
                    <Flex direction='column' gap={5} align='center'>
                        <Text
                            fontSize='4xl'
                            fontWeight='bold'
                        >
                            Hey there! I'm Joshua.👋
                        </Text>
                        <Text>
                            I'm currently a student at University of Toronto majoring in Computer
                            Science with a focus on GIS. In my spare time I enjoy gaming and building my own projects.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}

export default About;