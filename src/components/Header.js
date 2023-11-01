import {
    Flex,
    Center,
    Spacer,
    Link,
    Button,
    Show,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Hide,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { HamburgerIcon } from '@chakra-ui/icons';

function scrollToSection(e) {
    document.getElementById(e.target.textContent.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
}

const Header = forwardRef((props, ref) => {
    return (
        <Center id='header'>
            <Hide below='sm'>
                <Flex p='5' pos='fixed' w='97%' zIndex={2} top={5} borderRadius='lg' ref={ref} direction={['column-reverse', 'row']} gap={{base: 4}}>
                    <Flex gap='7' direction='row' align='center' justify={{ base: 'center' }}>
                        <Link href='https://github.com/joshn28'>
                            <Button colorScheme='gray' leftIcon={<FaGithub />}>Github</Button>
                        </Link>
                        <Link href='https://www.linkedin.com/in/joshuanobleza/'>
                            <Button colorScheme='linkedin' leftIcon={<FaLinkedinIn />}>LinkedIn</Button>
                        </Link>
                    </Flex>
                    <Spacer />
                    <Flex gap='8' direction={['column', 'row']} align='center'>
                        <Link fontWeight='bold' onClick={scrollToSection}>Home</Link>
                        <Link fontWeight='bold' onClick={scrollToSection}>About</Link>
                        <Link fontWeight='bold' onClick={scrollToSection}>Projects</Link>
                        <Link fontWeight='bold' onClick={scrollToSection}>Contact</Link>
                    </Flex>
                </Flex>
            </Hide>
            <Show below='sm'>
                <Flex pos='fixed' w='90%' top={5} zIndex={2}>
                    <Flex gap='3' align='center'>
                        <Link href='https://github.com/joshn28'>
                            <IconButton colorScheme='gray' icon={<FaGithub />} variant='outline'></IconButton>
                        </Link>
                        <Link href='https://www.linkedin.com/in/joshuanobleza/'>
                            <IconButton colorScheme='linkedin' icon={<FaLinkedinIn />} variant='outline'></IconButton>
                        </Link>
                    </Flex>
                    <Spacer />
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem onClick={scrollToSection}>Home</MenuItem>
                            <MenuItem onClick={scrollToSection}>About</MenuItem>
                            <MenuItem onClick={scrollToSection}>Experience</MenuItem>
                            <MenuItem onClick={scrollToSection}>Projects</MenuItem>
                            <MenuItem onClick={scrollToSection}>Contact</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Show>
        </Center>
    );
});

export default Header;