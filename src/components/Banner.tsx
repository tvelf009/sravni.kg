import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import React from 'react';
import Link from 'next/link';



export const Banner = () => {



    return (
        <Box  bg="#F6F6F6" boxShadow="base">
            <Container maxWidth="xl">
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={8} >
                    <Text fontSize="4xl" mt="70px" as="h1">ПОМОЩНИК ПРИ ВЫБОРЕ КРЕДИТА</Text>
                    <Text fontSize="2xl" mt="30px" as="h2">Сравни условия кредитования банков и других финансово-кредитных учреждений Кыргызстана!</Text>
                    <Link href="#search">
                        <Button variant="cus-call" mt="60px" mb={5}>ПОДОБРАТЬ КРЕДИТ</Button>
                    </Link>
                </GridItem>
                <GridItem colSpan={4}  >
                    <Image src="/images/web/banner.png"/>
                </GridItem>
            </Grid>
            </Container>

        </Box>
    )
}



