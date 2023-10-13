import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Text,
    Box,
    StackDivider,
    Stack,
    UnorderedList,
    ListItem,
    Center,
    Flex,
} from '@chakra-ui/react'

function Experience() {
    return (
        <Flex id='experience' minH='100vh' justify='center' align='center' w={{ base: '90%'}} m={{ base: '0 auto'}} pt={{ base: 20 }}>
            <Card w={['xs', '2xl']}>
                <CardHeader>
                    <Center>
                        <Heading size='2xl'>Experience</Heading>
                    </Center>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Stack justify='space-between' direction={['column', 'row']}>
                                <Heading size='md' textTransform='uppercase'>
                                    Web Developer Intern
                                </Heading>
                                <Text as='i'>03/2022 - 04/2022</Text>
                            </Stack>
                            <Text>InnScience Labs Inc.</Text>
                            <UnorderedList>
                                <ListItem>
                                    Worked with InnScience Labs Inc. through Riipen to implement functionality on their website prototype.
                                </ListItem>
                                <ListItem>
                                    Developed a search functionality for the website prototype using JavaScript, which allowed users to search for information within the database efficiently and effectively.
                                </ListItem>
                                <ListItem>
                                    Implemented Datatable.js into the website prototype, which enabled users to view and interact with large amounts of data in a table format with features such as sorting, filtering, and pagination.
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <Stack justifyContent='space-between' direction={['column', 'row']}>
                                <Heading size='md' textTransform='uppercase'>
                                    Shopify Front-End Developer Intern
                                </Heading>
                                <Text as='i'>02/2022 - 05/2022</Text>
                            </Stack>
                            <Text>Werrv Inc.</Text>
                            <UnorderedList>
                                <ListItem>
                                    Developed a custom Shopify template for blog posts utilizing HTML, CSS, and Liquid templating language, ensuring it met the CEO's specific needs and functional requirements.
                                </ListItem>
                                <ListItem>
                                    Demonstrated strong problem-solving skills by identifying and resolving technical issues and proposing solutions to potential feature requests.
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default Experience;