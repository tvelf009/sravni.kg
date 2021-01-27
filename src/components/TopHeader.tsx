import { Box } from '@chakra-ui/react';
import { Container, Flex, Spacer } from '@chakra-ui/layout';
import { FbIcon, InstaIcon, MailIcon } from '../../public/images/icons/icons'
import React from 'react';


export const TopHeader = () => {


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
                </Flex>
            </Container>
        </Box>
    )
}



