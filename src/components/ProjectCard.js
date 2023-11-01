import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Link,
    Icon,
    Tag,
    Stack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa6'

function ProjectCard(props) {
    return (
        <Card>
            <CardHeader>
                <Heading as='h3' size='lg'>{props.title}</Heading>
            </CardHeader>
            <CardBody>
                <Stack spacing={5}>
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
                <Link href={props.link}>
                    <Button>
                        <Icon as={FaGithub} />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;