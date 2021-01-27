import { Box } from '@chakra-ui/react';
import { Container, Flex, Spacer } from '@chakra-ui/layout';
import { Logo } from '../../public/images/icons/icons'
import { MainMenu } from './MainMenu';
import React from 'react';



export const Header = () => {


    return (
        <Box h="80px" bg="gray.50" boxShadow="base">
            <Container maxWidth="xl" >
                <Flex>
                    <Box pt="5">
                        <Logo/>
                    </Box>
                    <Spacer/>
                    <Box pt="5">
                        <MainMenu/>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}



