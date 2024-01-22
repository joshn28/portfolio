import { Stack, Text, Image } from "@chakra-ui/react";

function Skills() {
    const imageSize = {
        h: '3em',
        w: 'auto',
    };

    return (
        <Stack direction={{base: 'column', lg: 'row'}} align='center' justify='center' spacing={10}>
            <Text fontWeight='bold' fontSize={['md', 'lg']}>Tech Stack</Text>
            <Stack direction={{base: 'column', md: 'row'}} align='center' justify='center' spacing={10} bg='var(--chakra-colors-chakra-body-text)' p='1em' borderRadius='sm' textColor='blackAlpha.800'>
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
                <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    {...imageSize}
                />
            </Stack>
        </Stack>
    );
}

export default Skills