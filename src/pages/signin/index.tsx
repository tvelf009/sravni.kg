import React, {useState} from 'react';
import Head from "next/head";
import {TopHeader} from "../../components/TopHeader";
import {Box, Container, Flex, Input, Heading, Button, FormControl, FormLabel} from "@chakra-ui/react";


const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`Email: ${login} & Password: ${password}`);

    };

    return (
        <>
            <Head>
                <title>Sravni.KG | О Нас</title>
            </Head>
            <TopHeader/>
            <Box minWidth="704px" mt={15}>
                <Container maxWidth="xl" centerContent>

                    <Flex width="full" align="center" justifyContent="center">
                        <Box p={2}>
                            <Box textAlign="center">
                                <Heading>Вход</Heading>
                            </Box>
                            <Box my={4} textAlign="left">
                                <form onSubmit={handleSubmit}>
                                    <FormControl isRequired>
                                        <FormLabel>Логин</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="test@test.com"
                                            size="lg"
                                            onChange={e => setLogin(e.currentTarget.value)}
                                        />
                                    </FormControl>
                                    <FormControl mt={4} isRequired>
                                        <FormLabel>Пароль</FormLabel>
                                        <Input
                                            type="password"
                                            placeholder="*******"
                                            size="lg"
                                            onChange={e => setPassword(e.currentTarget.value)}
                                        />
                                    </FormControl>
                                    <Button
                                        colorScheme="teal"
                                        variant="solid"
                                        width="full"
                                        mt={4}
                                        size="lg"
                                        type="submit"
                                    >
                                        Sign In
                                    </Button>
                                </form>
                            </Box>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
)
}

export default SignIn;