import { Box, Flex, Text, Container, Spacer, Image } from '@chakra-ui/react';
import React from 'react';
import CSS from 'csstype';
import { CurrencyDecorIcon } from '../../public/images/icons/icons'
import { Partner } from "../interfaces/interface";
import { LinkIcon } from '@chakra-ui/icons'


const fontStyle1:CSS.Properties = {
    fontSize: "38px",
    fontWeight: 600
}

const fontStyle2:CSS.Properties = {
    textAlign: "right",
    color: "#28467F"
}



export const BankTitle = ({data}:{data:Partner}) => {



    return (
        <Box   boxShadow="false">
            <Container maxWidth="xl" pt={5}>
                <Flex>
                    <Box mt={5}>
                        <Text style={fontStyle1}>
                            {data.name}
                        </Text>
                        <CurrencyDecorIcon/>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image src={"https://sravni.kg/images/logo/" + data.logo} />
                        <Box mt={5} style={fontStyle2}>
                            <LinkIcon/> Перейти на сайт банка
                        </Box>
                    </Box>
                </Flex>
            </Container>

        </Box>
    )
}



