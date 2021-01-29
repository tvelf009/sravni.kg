import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import React from 'react';
import Link from 'next/link';



export const Banner = () => {



    return (
        <Box h="433px" bg="#F6F6F6" boxShadow="base">
            <Container maxWidth="xl">
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={3} >
                    <Text fontSize="4xl" mt="70px">ПОМОЩНИК ПРИ ВЫБОРЕ КРЕДИТА</Text>
                    <Text fontSize="2xl" mt="30px">Сравни условия кредитования банков и других финансово-кредитных учреждений Кыргызстана!</Text>
                    <Link href="#search">
                        <Button variant="cus-call" mt="60px">ПОДОБРАТЬ КРЕДИТ</Button>
                    </Link>
                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10" >
                    <Image src="/images/web/banner.png"/>
                </GridItem>
            </Grid>
            </Container>

        </Box>
    )
}



