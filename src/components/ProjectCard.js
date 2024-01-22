import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Image,
    Link,
    Icon,
    Tag,
    Stack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink } from "react-icons/fi";

function ProjectCard(props) {
    return (
        <Card>
            <CardBody>
                <Image
                src={props.image}
                alt='project webpage'
                borderRadius='lg'
                />
                <Stack spacing={5} mt={5}>
                    <Heading as='h3' size='md'>{props.title}</Heading>
                    <Text>{props.description}</Text>
                    <Wrap spacing={4}>
                        {props.tags.map(tag => {
                            return <WrapItem key={`${props.id}-${tag}`}>
                                        <Tag colorScheme='blue' borderRadius='full'>{tag}</Tag>
                                    </WrapItem>
                        })}
                    </Wrap>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Link href={props.link}>
                        <Button>
                            <Icon as={FaGithub} />
                        </Button>
                    </Link>
                    {props.demo ? (
                        <Link href={props.demo}>
                            <Button>
                                <Icon as={FiExternalLink} />
                            </Button>
                        </Link>
                    ) : (
                        <></>
                    )}
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;