import { Box, Grid, GridItem, ListItem, ListIcon } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import React from 'react';
import CSS from 'csstype';
import { CurrencyDecorIcon, SomIcon, UsdIcon } from '../../public/images/icons/icons';
import { Credits } from '../interfaces/interface';

const fontStyle1:CSS.Properties = {
    fontSize: "14px",
    fontWeight: 500
}

const fontStyle2:CSS.Properties = {
    fontSize: "22px",
    fontWeight: 500
}

const fontStyle3:CSS.Properties = {
    color: "#7C8793",
    fontSize: "16px",
    lineHeight: 1
}
const fontStyle4:CSS.Properties = {
    fontSize: "20px",
    fontWeight: 500
}

const fontStyle5:CSS.Properties = {
    fontSize: "18px",
    fontWeight: 500
}


export const Appointment = ({data}:{data:Credits}) => {


    return (
        <Box bg="#F6F6F6" boxShadow="base">
            <Container maxWidth="xl" pt={10}>
                <Text fontSize="4xl" fontWeight="500" >
                        Назначение
                </Text>
                <CurrencyDecorIcon/>
                <Text style={fontStyle1} mt={2} mb={2}>
                    {data.description}
                </Text>
                <Text style={fontStyle2} mt={5} mb={5}>
                    Условия кредитования
                </Text>
                {
                    data.condition.generalLimits.map((item, index) => (
                        <Grid templateColumns="repeat(24, 1fr)" gap={4} key={index} mb={8}>
                            <GridItem colSpan={1}>
                                {
                                    item.currency.code === "KGS" ? <SomIcon/> : <UsdIcon/>
                                }
                            </GridItem>
                            <GridItem colSpan={5}>
                                <Text style={fontStyle3}>
                                    Ставка
                                </Text>
                                <Text style={fontStyle4}>
                                    от {item.rateLimit.min}% до {item.rateLimit.max}% 
                                </Text>
                            </GridItem>
                            <GridItem colSpan={7}>
                                <Text style={fontStyle3}>
                                    Сумма кредита
                                </Text>
                                <Text style={fontStyle4}>
                                    от {item.amountLimit.min}{item.currency.code === "KGS" ? " Сом" : " $"} до {item.amountLimit.max}{item.currency.code === "KGS" ? " Сом" : " $"} 
                                </Text>
                            </GridItem>
                            <GridItem colSpan={5}>
                                <Text style={fontStyle3}>
                                    Срок кредита
                                </Text>
                                <Text style={fontStyle4}>
                                    от {item.termLimit.min} мес. до {item.termLimit.max} мес.
                                </Text>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Text style={fontStyle3}>
                                    Возраст
                                </Text>
                                <Text style={fontStyle4}>
                                    от {data.requirement.ageLimit.min} лет до {data.requirement.ageLimit.max} лет.
                                </Text>
                            </GridItem>
                        </Grid>
                    ))
                }
                <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={6}>
                        <Text style={fontStyle2} mb={5}>
                            Необходимые документы
                        </Text>
                        {
                            data.documents.map((item, index) => (
                                <ListItem key={index} style={{listStyleType:"none"}} mb={3}>
                                    <Text style={fontStyle5}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                        {item.name}
                                    </Text>
                                </ListItem>
                            ))
                        }
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Text style={fontStyle2} mb={5}>
                            Залог
                        </Text>
                        {
                            data.condition.pledges.map((item, index) => (
                                <ListItem key={index} style={{listStyleType:"none"}} mb={3}>
                                    <Text style={fontStyle5}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                        {item.name}
                                    </Text>
                                </ListItem>
                            ))
                        }
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Text style={fontStyle2} mb={5}>
                            Выдача
                        </Text>
                        {
                            data.condition.receiveTypes.map((item, index) => (
                                <ListItem key={index} style={{listStyleType:"none"}} mb={3}>
                                    <Text style={fontStyle5}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                        {item.name}
                                    </Text>
                                </ListItem>
                            ))
                        }
                    </GridItem>
                </Grid>
            </Container>

        </Box>
    )
}



