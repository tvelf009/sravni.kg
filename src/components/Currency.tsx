import { Box } from '@chakra-ui/react';
import React from 'react';
import { Container, SimpleGrid  } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import { CurrencyDecorIcon } from '../../public/images/icons/icons'
import CSS from 'csstype';
import { Currencies } from "../interfaces/interface"


const fontStyle1:CSS.Properties = {
    fontSize: "10px",
    color: "#7C8793"
}





export const Currency = ({data}: {data:Currencies[]}) => {
    return (
        <Box  bg="#FFF" boxShadow="base" pt={5} pb={5}>
          <Container  maxWidth="xl">
            <Text fontSize="4xl" as="h2">Курсы валют</Text>
            <CurrencyDecorIcon/>
            <SimpleGrid columns={[2, null, 4]} gap={6} mt={3}>
                {
                    data.map((item, index) => (
                        <Box rowSpan={2} colSpan={1} key={index}>
                            <Text>
                                {item.currency + " " + item.value} сом
                            </Text>
                        </Box>
                    ))
                }

            </SimpleGrid>
            <Text style={fontStyle1} mt={2}>
                Официальные курсы валют Национального банка Кыргызстана.
            </Text>
            <Text style={fontStyle1}>
            * цена указана в долларах
            </Text>
          </Container>
        </Box>
    )
}





