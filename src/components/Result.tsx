
import { Box, Button, GridItem,  List, ListItem, ListIcon, SimpleGrid  } from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import React from 'react';
import { Credit, SearchCondition } from '../interfaces/interface';
import CSS from 'csstype';
import { MdCheckCircle } from "react-icons/md";
import Link from 'next/link';
import NumberFormat from 'react-number-format';



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

    console.log(currency);


    return (
        <Box bg={bgcolorid % 2 === 0 ? "#FFF" : "#F4F5F5"} mt={2} border="1px" borderColor="#E6EAF0">
            <SimpleGrid  columns={[1, null, 12]} gap={10} mt={2}>
                <GridItem  pt={10} pb={10} pl={2} pr={2} colSpan={3}>
                    <Center>
                        <Image src={"https://sravni.kg/images/logo/" + credit.partner.logo} alt={credit.partner.name} h={41}/>    
                    </Center>
                    <Center mt={3}>
                        <Text style={fontStyle1}>
                            {credit.title}
                        </Text>
                    </Center>

                </GridItem>
                <GridItem  colSpan={2} >
                    <Text style={fontStyle2}>
                        Процентная ставка
                    </Text>
                    <Text style={fontStyle3}>
                        ~{credit.payment.percentRate} % в год
                    </Text>
                    <Text style={fontStyle2} mt={1}>
                        Коммиссия
                    </Text>
                    <Text style={fontStyle3}>
                        ~{credit.payment.commission} % 
                    </Text>
                    <Text style={fontStyle2} mt={1}>
                        Эффективная ставка
                    </Text>
                    <Text style={fontStyle3}>
                        ~{credit.payment.effectiveRate} % в год
                    </Text>
                </GridItem>
                <GridItem  colSpan={2} >
                    <Text style={fontStyle2}>
                        Ежемесячные выплаты
                    </Text>
                    <Text style={fontStyle3}>
                        ~ <NumberFormat value={credit.payment.monthlyPayment} displayType={'text'} thousandSeparator={' '} />{currency != 2 ? " с/мес" : " $/мес"}
                    </Text>
                    <Text style={fontStyle2} mt={1}>
                        Итого сумма процентов
                    </Text>
                    <Text style={fontStyle4}>
                        ~ <NumberFormat value={parseFloat(credit.payment.percentPayment).toFixed(2)} displayType={'text'} thousandSeparator={' '} />{currency != 2 ? " сом" : " $"}
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
                                    rate: credit.payment.percentRate
                                },
                              }}
                        >
                        Подробнее
                        </Link>
                        
                    </Button>
                </GridItem>
            </SimpleGrid>
        </Box>
    )
}



