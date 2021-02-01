import { Box } from '@chakra-ui/react';
import React from 'react';
import { Container, Grid, GridItem  } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import { CurrencyDecorIcon } from '../../public/images/icons/icons'
import CSS from 'csstype';


const fontStyle1:CSS.Properties = {
    fontSize: "10px",
    color: "#7C8793"
}





export const Currency = ({data}: {data:any}) => {
    return (
        <Box  bg="#FFF" boxShadow="base" pt={5} pb={5}>
          <Container  maxWidth="xl">
            <Text fontSize="4xl">Курсы валют</Text>
            <CurrencyDecorIcon/>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={3}>
                <GridItem rowSpan={2} colSpan={1} >
                    <Text>
                        USD $  {data.USDKGS} сом
                    </Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} >
                    <Text>
                        EUR € 103.0066 сом
                    </Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} >
                    <Text>
                        RUB ₽ 1.1301 сом
                    </Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} >
                    <Text>
                        KZT ₸ 0.2009 сом
                    </Text>
                </GridItem>
            </Grid>
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





