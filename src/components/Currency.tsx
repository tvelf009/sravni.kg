import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Container, Grid, GridItem  } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import { CurrencyDecorIcon } from '../../public/images/icons/icons'





export const Currency = ({data}: {data:any}) => {
    return (
        <Box h="182px" bg="#FFF" boxShadow="base">
          <Container  maxWidth="xl">
            <Text fontSize="4xl">Курсы валют</Text>
            <CurrencyDecorIcon/>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <GridItem rowSpan={2} colSpan={1} >
                    <Text>
                        USD $ {data.USDKGS}
                    </Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} >
                    <Text>
                        EUR $ {data.USDEUR}
                    </Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} >
                    <Text>
                        RUB $ {data.USDRUB}
                    </Text>
                </GridItem>

            </Grid>
            <Text>
                Курсы валют есть же
            </Text>
          </Container>
        </Box>
    )
}





