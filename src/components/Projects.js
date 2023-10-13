import {
    SimpleGrid,
    Center,
    Heading,
    Container,
    Flex,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 'project1',
        title: "Evaluate a news article with NLP",
        description:"A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.",
        link: "https://github.com/joshn28/evaluate-news-nlp",
        tags: ['HTML/CSS', 'JavaScript', 'Express', 'Webpack', 'Sass'],
    },
    {
        id: 'project2',
        title: "Weather Journal App",
        description: "An asynchronous web app that uses the OpenWeatherMap API and user data to dynamically update the UI in a Weather Journal application.",
        link:"https://github.com/joshn28/weather-journal-app",
        tags: ['HTML/CSS', 'JavaScript', 'Express'],
    }
];

function Projects() {
    return (
        <Flex align='center' minH='100vh' id='projects' mt={[20, 0]} pt={{ base: 20 }}>
            <Container maxW='container.lg'>
                <Center>
                    <Heading mb={10} size='2xl'>Projects</Heading>
                </Center>
                <SimpleGrid columns={{sm: 1, md: 2}} spacing={10}>
                    {projects.map(project => {
                        return <ProjectCard
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                    tags={project.tags}
                                    key={project.id}
                                />
                    })}
                </SimpleGrid>
            </Container>
        </Flex>
    );
}

export default Projects;