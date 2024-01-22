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
        title: "Little Lemon",
        image: require('../assets/little-lemon.png'),
        description:"A React web application for Little Lemon restaurant allowing customers to book a reservation for a table.",
        link: "https://github.com/joshn28/evaluate-news-nlp",
        demo: "https://joshn28.github.io/little-lemon/",
        tags: ['HTML/CSS', 'JavaScript', 'React', 'Sass'],
    },
    {
        title: "Evaluate a news article with NLP",
        image: require('../assets/eval-news-nlp.png'),
        description:"A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.",
        link: "https://github.com/joshn28/evaluate-news-nlp",
        tags: ['HTML/CSS', 'JavaScript', 'Express', 'Webpack', 'Sass', 'API'],
    },
    {
        title: "Weather Journal App",
        image: require('../assets/weather-journal.png'),
        description: "An asynchronous web app that uses the OpenWeatherMap API and user data to dynamically update the UI in a Weather Journal application.",
        link:"https://github.com/joshn28/weather-journal-app",
        tags: ['HTML/CSS', 'JavaScript', 'Express', 'API'],
    }
];

function Projects() {
    return (
        <Flex align='center' minH='min' id='projects' mt={[20, 0]} pt={{ base: 20 }}>
            <Container maxW='5xl'>
                <Center>
                    <Heading mb={10} size='xl'>PROJECTS</Heading>
                </Center>
                <SimpleGrid columns={{sm: 1, md: 2}} spacing={10}>
                    {projects.map((project, i) => {
                        return <ProjectCard
                                    id={project.id}
                                    title={project.title}
                                    image={project.image}
                                    description={project.description}
                                    link={project.link}
                                    tags={project.tags}
                                    demo={project.demo}
                                    key={`project${i}`}
                                />
                    })}
                </SimpleGrid>
            </Container>
        </Flex>
    );
}

export default Projects;