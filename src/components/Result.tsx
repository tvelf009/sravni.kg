
import { Box, Button, Grid, GridItem,  List, ListItem, ListIcon } from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import React from 'react';
import { Credit, SearchCondition } from '../interfaces/interface';
import CSS from 'csstype';
import { MdCheckCircle } from "react-icons/md";
import Link from 'next/link'



const fontStyle1: CSS.Properties = {
    color: "#000",
    fontSize: "16px",
    fontWeight: 500,
    textAlign: "center"
}

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

const fontStyle4: CSS.Properties = {
    fontSize: "medium",
    color: "#F57C00",
    fontWeight: 500
}

export const Result = ({data, bgcolorid, currency, searchCondition}:{data:Credit, bgcolorid:number, currency:number, searchCondition:SearchCondition},) => {

    const [credit] = React.useState(data);

    console.log(searchCondition);
    

    return (
        <Box bg={bgcolorid % 2 === 0 ? "#FFF" : "#F4F5F5"} mt={2} border="1px" borderColor="#E6EAF0">
            <Grid templateColumns="repeat(12, 1fr)" gap={10} mt={2}>
                <GridItem  pt={10} pb={10} pl={2} pr={2} colSpan={3}>
                    <Center>
                        <Image src={"https://sravni.kg/img/logo/" + credit.partner.logo} alt={credit.partner.name} h={41}/>    
                    </Center>
                    <Center mt={3}>
                        <Text style={fontStyle1}>
                            {credit.title}
                        </Text>
                    </Center>

                </GridItem>
                <GridItem  colSpan={2} >
                    <Text style={fontStyle2}>
                        Ставка
                    </Text>
                    <Text style={fontStyle3}>
                        ~{credit.payment.percentRate} % в год
                    </Text>
                    <Text style={fontStyle2} mt={1}>
                        Эффективная ставка
                    </Text>
                    <Text style={fontStyle3}>
                        ~{credit.payment.effectiveRate} % в год
                    </Text>
                    <Text style={fontStyle2} mt={1}>
                        Коммиссия
                    </Text>
                    <Text style={fontStyle3}>
                        ~{credit.payment.commission} % 
                    </Text>
                </GridItem>
                <GridItem  colSpan={2} >
                    <Text style={fontStyle2}>
                        Ежемесячно
                    </Text>
                    <Text style={fontStyle3}>
                        ~{credit.payment.monthlyPayment} {currency === 1 ? " с/мес" : " $/мес"}
                    </Text>
                    <Text style={fontStyle2}>
                        Переплата
                    </Text>
                    <Text style={fontStyle4}>
                        ~{parseFloat(credit.payment.percentPayment).toFixed(2)} {currency === 1 ? " сом" : " $"}
                    </Text>
                </GridItem>
                <GridItem  colSpan={3} >
                    <List spacing={3}>
                        {
                            credit.documents.map((item, index) => (
                                <ListItem key={index}>
                                    <Text style={fontStyle2}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                        {item.name}
                                    </Text>
                                </ListItem>
                            ))
                        }
                    </List>
                </GridItem>
                <GridItem  colSpan={2} pr={2}>
                    <Button w="100%" variant="cus-call">
                        <Link 
                            href={{
                                pathname: '/credit/[id]',
                                query: { 
                                    id: data.id,
                                    amount: searchCondition.amount, 
                                    currency: searchCondition.currency,
                                    term: searchCondition.term,
                                    purposeId: searchCondition.purposeId,
                                },
                              }}
                        >
                        Подробнее
                        </Link>
                        
                    </Button>
                </GridItem>
            </Grid>
        </Box>
    )
}



