import { Box, Text } from '@chakra-ui/react';
import { Container, Flex, SimpleGrid, Spacer } from '@chakra-ui/layout';
import { FbIcon, InstaIcon, MailIcon } from '../../public/images/icons/icons'
import React from 'react';
import { useCookies } from "react-cookie"
import Router from "next/router";
import Cookies from "js-cookie";
import CSS from 'csstype';

const textStyle1:CSS.Properties = {
    cursor: "pointer"
}

export const TopHeader = () => {

    const [cookie] = useCookies()
    const logOut = () => {

        Cookies.remove('access_token');
        Cookies.remove('lastname');
        Cookies.remove('role');
        Cookies.remove('username');
        console.log(cookie);
        Router.push("/dash/login");
    }
    
    const login = () => {
        Router.push("/dash/login");
    }

    const getProfile = () => {

        if(Cookies.get("role") == "ROLE_STAFF"){
            Router.push("/dash");
        }else{
            Router.push("/user");
        }
        
    }


    return (
        <Box h="39px" bg="gray.900" >
            <Container maxWidth="xl" >
                <Flex>
                    <Spacer/>
                    <Box textStyle="title" p="2">
                        Мы в соц.сетях:
                    </Box>
                    <Box textStyle="title" p="2">
                        <FbIcon color="white" />
                    </Box>
                    <Box textStyle="title" p="2">
                        <InstaIcon color="white" />
                    </Box>
                    <Box textStyle="title" p="2">
                        <MailIcon color="white" />
                    </Box>
                    <Box>
                    {
                        cookie.access_token?(
                            <SimpleGrid  columns={[1, null, 2]} suppressHydrationWarning={true}>
                                <Box>
                                    <Text textStyle="title" p="2" color="#FFF" onClick={getProfile} style={textStyle1} suppressHydrationWarning={true}>
                                        Профиль
                                    </Text>
                                </Box>
                                <Box>
                                    <Text textStyle="title" p="2" color="#FFF" onClick={logOut} style={textStyle1} suppressHydrationWarning={true}>
                                        Выход
                                    </Text>
                                </Box>
                            </SimpleGrid>
                        ):(
                            <Box>
                                <Text textStyle="title" p="2" color="#FFF" onClick={login}  style={textStyle1} suppressHydrationWarning={true}>
                                    Вход
                                </Text>
                            </Box>
                        )
                    }                        
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}




