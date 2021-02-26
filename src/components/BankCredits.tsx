import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import React from 'react';
import { CurrencyDecorIconStyle2 } from "../../public/images/icons/icons";
import { Credits } from "../interfaces/interface";
import CSS from 'csstype';
import Link from 'next/link';

const fontStyle2: CSS.Properties = {
    fontSize: "small",
    color: "#000",
    fontWeight: 500
}

const fontStyle3: CSS.Properties = {
    fontSize: "medium",
    color: "#000",
    fontWeight: 500
}


export const BankCredits = ({data, index, role}:{data:Credits, index:any, role:any}) => {

    return (
        <Box boxShadow="false" mb={5} > 
            {
                data != null? (
                    <Container maxWidth="xl">
                <Box border="1px" borderColor="#E6EAF0" p={5} bg={index % 2 === 0 ? "#FFF" : "#F4F5F5"}>
                <Grid>
                    <GridItem>
                        <Box>
                            <Text fontSize="4xl" fontWeight="500" >
                                {data.title}
                            </Text>
                            <CurrencyDecorIconStyle2/>
                            <Text>
                                {data.description}
                            </Text>
                        </Box>
                    </GridItem>
                </Grid>
                
                <SimpleGrid columns={[1, null, 4]} mt={4}>
                    <GridItem>
                        <Text style={fontStyle2} mb={3}>
                            Цели кредитования
                        </Text>
                        {
                            data.purposes.map((item, index) => (
                                <Text style={fontStyle3} key={index}> 
                                    {item.name}
                                </Text>
                            ))
                        }
                    </GridItem>
                    <GridItem>
                        <Text style={fontStyle2} mb={3}>
                            Доступен в валютах
                        </Text>
                        {
                            data.condition.generalLimits.map((item, index) => (
                                <Text key={index}>
                                    {item.currency.name}
                                </Text>
                            ))
                        }
                    </GridItem>
                    <GridItem>
                        <Text style={fontStyle2} mb={3}>
                            Условия
                        </Text>
                        {
                            data.condition.generalLimits.map((item, index) => (
                                <Text key={index}>
                                   от  {item.amountLimit.min} {item.currency.code === "KGS"? " сом": " $"} до {item.amountLimit.max} {item.currency.code === "KGS"? " сом": " $"}
                                </Text>
                            ))
                        }
                    </GridItem>
                    <GridItem>
                        
                        {
                            role === "ROLE_STAFF"? (
                                <>
                                <Text> 
                                    <Link href={"/dash/create/" + data.id}>Изменить</Link>
                                </Text>
                                <Text>
                                    <Link href="/">Удалить</Link>
                                </Text>
                                </>

                            ):(
                                <Text mt={7} style={{color: "#28467F", fontWeight: 600}}>
                                    <Link href="/">Узнать подробнее</Link>
                                </Text>
                            )
                        }                        
                    </GridItem>
                </SimpleGrid>
                </Box>
            </Container>    
                ):(
                    <Text>Loading</Text>
                )
            }
        </Box>
    )
}



