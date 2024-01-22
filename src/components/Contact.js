import {
    Textarea,
    Input,
    Flex,
    VStack,
    Heading,
    Center,
    Container,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
  } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';

function Contact() {

  const formRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          subject: Yup.string()
            .required('Required'),
          message: Yup.string()
            .required('Required'),
        }),
        onSubmit: () => {
            setTimeout(() => {
              formRef.current.submit();
            }, 1000);
        },
    });

    return (
        <Flex align='center' h='100vh' justify='center'>
          <Container id='contact' centerContent borderRadius='lg'>
              <Center>
                  <Heading size='xl' mb={5}>CONTACT ✉️</Heading>
              </Center>
              <form
                ref={formRef}
                action='https://getform.io/f/e0518469-ba67-4378-ba3a-ad2e04d49ad0'
                method='POST'
                onSubmit={formik.handleSubmit}
              >
                  <VStack spacing={3} maxW='max-content'>
                      <Flex gap={3} direction={['column', 'row']}>
                          <FormControl isInvalid={formik.touched.name && formik.errors.name} isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input
                              id='name'
                              name='name'
                              {...formik.getFieldProps('name')}
                            />
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                          </FormControl>
                          <FormControl isInvalid={formik.touched.email && formik.errors.email} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                              id='email'
                              name='email'
                              type='email'
                              {...formik.getFieldProps('email')}
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                          </FormControl>
                      </Flex>
                      <FormControl isInvalid={formik.touched.subject && formik.errors.subject} isRequired>
                        <FormLabel>Subject</FormLabel>
                        <Input
                          id='subject'
                          name='subject'
                          {...formik.getFieldProps('subject')}
                        />
                        <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={formik.touched.message && formik.errors.message} isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          minH={200}
                          id='message'
                          name='message'
                          {...formik.getFieldProps('message')}
                        />
                        <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                      </FormControl>
                      <Button type='submit' isLoading={formik.isSubmitting}>Send Message</Button>
                  </VStack>
              </form>
          </Container>
        </Flex>
    );
}

export default Contact;