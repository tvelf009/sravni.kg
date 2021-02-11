import React, {useState} from 'react';
import Head from "next/head";
import {TopHeader} from "../../components/TopHeader";
import {Box, Container, Flex, Input, Heading, Button, FormControl, FormLabel, Alert, AlertIcon} from "@chakra-ui/react";
import SearchAPI from "../../../lib/api/search";
import Router from 'next/router';
import {authenticate} from '../../middleware/utils';


const SignIn = () => {

    const [values, setValues] = useState({
        username: '',
        password: '',
        error: null,
        loading: false,
        message: '',
    });

    const {username, password, error, loading, message} = values;

    const handleChange = (name: string ) => (e: any) => {
            setValues({...values, [name]: e.target.value});
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setValues({...values, loading: true});

        const {data} = await SearchAPI.signIn({username, password});

        if (data.error) {
            setValues({ ...values, loading: false, error: data.error, message: data.message });
        } else {
            authenticate(data, () => {
                Router.push('/');
            })
            setValues({...values, loading: false});
        }
    };

    return (
        <>
            <Head>
                <title>Sravni.KG | О Нас</title>
            </Head>
            <TopHeader/>
            <Box minWidth="704px" mt={130}>
                <Container maxWidth="xl" centerContent>

                    <Flex width="full" align="center" justifyContent="center">
                        <Box p={3}>
                            {error && <Alert status="error"> <AlertIcon />
                                        {error}
                                     </Alert>
                            }

                            <Box textAlign="center">
                                <Heading>Вход</Heading>
                            </Box>
                            <Box my={4} textAlign="left">
                                <form onSubmit={handleSubmit}>
                                    <FormControl isRequired>
                                        <FormLabel>Имя пользователя</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="test@test.com"
                                            size="lg"
                                            value={username}
                                            onChange={handleChange('username')}
                                        />
                                    </FormControl>
                                    <FormControl mt={4} isRequired>
                                        <FormLabel>Пароль</FormLabel>
                                        <Input
                                            type="password"
                                            placeholder="*******"
                                            size="lg"
                                            value={password}
                                            onChange={handleChange('password')}
                                        />
                                    </FormControl>
                                    <Button
                                        isLoading={loading}
                                        loadingText="Отправка"
                                        colorScheme="teal"
                                        variant="solid"
                                        width="full"
                                        mt={4}
                                        size="lg"
                                        type="submit"
                                    >
                                        Войти
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