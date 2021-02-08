import { Box, Button, Collapse, Grid, GridItem } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { Text  } from "@chakra-ui/react";
import React from 'react';
import { CurrencyDecorIcon } from '../../public/images/icons/icons';
import {NumberInput, NumberInputField, Select  } from "@chakra-ui/react";
import SearchAPI from '../../lib/api/search';
import { Purposes, Currency, Term, SearchCondition } from '../interfaces/interface';
import { Result } from './Result';
import CSS from 'csstype';
import NumberFormat from 'react-number-format';



const fontStyle3: CSS.Properties = {
    fontSize: "large",
    color: "#000",
    fontWeight: 500
}

const fontStyle2: CSS.Properties = {
    fontSize: "small",
    color: "#000",
    fontWeight: 500
}

const squardStyle = {
    borderRadius: "0px",
    widht: "50px"
}

const purposesArray: Purposes[] = [
    {
        id: 1,
        name: "Потребительский"
    },
    {
        id: 2,
        name: "Покупка авто"
    },
    {
        id: 3,
        name: "Развитие бизнеса"
    },
    {
        id: 4,
        name: "Ремонт и строительство"
    },
    {
        id: 5,
        name: "Медицина"
    },
    {
        id: 6,
        name: "Образование"
    },
    {
        id: 7,
        name: "Погашение долгов"
    },
]

const currencyArray: Currency[] = [
    {
        id: 1,
        name: "Кыргызский сом",
        code: "KGZ"
    },
    {
        id: 2,
        name: "Американский доллар",
        code: "RUB"
    }
]

const termArray: Term[] = [
    {
        id: 3,
        name: "3 месяца"
    },
    {
        id: 6,
        name: "6 месяцев"
    },
    {
        id: 9,
        name: "9 месяцев"
    },
    {
        id: 12,
        name: "1 год"
    },
    {
        id: 18,
        name: "18 месяцев"
    },
    {
        id: 24,
        name: "2 года"
    },
    {
        id: 36,
        name: "3 года"
    },
    {
        id: 48,
        name: "4 года"
    },
    {
        id: 60,
        name: "5 лет"
    },
    {
        id: 72,
        name: "6 лет"
    },
    {
        id: 84,
        name: "7 лет"
    },
    {
        id: 96,
        name: "8 лет"
    },
    {
        id: 108,
        name: "9 лет"
    },
    {
        id: 120,
        name: "10 лет"
    },
    {
        id: 180,
        name: "15 лет"
    },
    {
        id: 240,
        name: "20 лет"
    }

]

export const CreditSearch = () => {

    const [amount, setAmount] = React.useState(10000);
    const [term, setTerm] = React.useState(3);
    const [purpose, setPurpose] = React.useState(1);
    const [currency, setCurrency] = React.useState(1);
    const [credit, setCredit] = React.useState([]);
    const [termName, setTermName] = React.useState(termArray[0].name);
    const [purposeName, setPurposeName] = React.useState(purposesArray[0].name);
    const [show, setShow] = React.useState(false);
    const [searchCondition, setSearchCondition] =  React.useState<SearchCondition>({
        amount: amount,
        purposeId: purpose,
        currency: currency,
        term: term
    });

    const hanlderChange = (e:any) => {
        // (ev: React.ChangeEvent<HTMLInputElement>): void => setAmount(parseInt(ev.target.value))
        setAmount(e)
    }

    const termChange = (e:any) => {
        setShow(false)
        setTermName(termArray[e.nativeEvent.target.selectedIndex].name)
        setTerm(e.target.value)
    }

    const purposeChange = (e:any) => {
        setShow(false)
        setPurposeName(purposesArray[e.nativeEvent.target.selectedIndex-1].name)
        setPurpose(e.target.value)
    }

    const currencyChange = (e:any) => {
        setShow(false)
        setCurrency(e.target.value)
    }

    const getResult = async() => {
        // const { data, status } = await SearchAPI.all();
        setShow(true)
        const {data} = await SearchAPI.getCredits(amount, term,purpose, currency);

        
        
        setSearchCondition({
            amount: amount,
            purposeId: purpose,
            currency: currency,
            term: term
        })


        setCredit([]);
        setCredit(data);
    }


    return (
        <Box  bg="#FFF" boxShadow="base" pb={5} id="search">
            <Container maxWidth="xl" pt={5} pb={5}>
                <Text fontSize="4xl" fontWeight="500" as="h1">Подбор кредита онлайн</Text>
                <CurrencyDecorIcon/>

                <Grid templateColumns="repeat(2, 1fr)" gap={10} mt={10}>
                    <Box w="100%" >
                        <Text mb="8px">Срок кредитования: </Text>
                        <Select  {...squardStyle} value={term} onChange={termChange} > 
                            {
                                termArray.map((item, index) => (
                                    <option value={item.id} key={index}>{item.name}</option>
                                ))
                            }                            
                        </Select>
                    </Box>
                    <Box w="100%" >
                        <Text mb="8px">Укажите цель кредита: </Text>
                        <Select {...squardStyle} value={purpose} onChange={purposeChange} > 
                            {
                                purposesArray.map((item, index) => (
                                    <option value={item.id} key={index}>{item.name}</option>
                                ))
                            }                            
                        </Select>
                    </Box>
                </Grid>
                <Grid templateColumns="repeat(2, 1fr)" gap={10} mt={10}>
                    <Box w="100%" >
                        <Text mb="8px">Сумма кредита: </Text>
                        
                        <NumberInput value={amount} onChange={hanlderChange} >
                            <NumberInputField {...squardStyle} />
                        </NumberInput>
                        
                    </Box>
                    <Box w="100%" >
                        <Grid templateColumns="repeat(2,1fr)" gap={10}>
                            <Box w="100%">
                                <Text mb="8px">Выберите валюту: </Text>
                                <Select  {...squardStyle} value={currency} onChange={currencyChange}> 
                                    {
                                        currencyArray.map((item, index) => (
                                            <option value={item.id} key={index}>{item.name}</option>
                                        ))
                                    }                            
                                </Select>
                            </Box>
                            <Box w="100%">
                                <Button colorScheme="blue" onClick={getResult} variant="cus-call" w="100%" mt={8}>ПОДОБРАТЬ</Button>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>

            </Container>
            <Collapse in={show} animateOpacity>
                <Box bg="#F4F5F5">
                    <Container maxWidth="xl" pt={5} pb={5}>
                        <Text fontSize="4xl" fontWeight="500">Результат поиска</Text>
                        <CurrencyDecorIcon/>
                        <Grid templateColumns="repeat(12, 1fr)" gap={10} mt={10}>
                            <GridItem colSpan={4}>
                                <Text style={fontStyle2}>
                                    Вы выбрали кредит на сумму
                                </Text>
                                <Text style={fontStyle3}>
                                ~ <NumberFormat value={amount} displayType={'text'} thousandSeparator={" "}  />{currency == 1 ? " сом" : " $"} 
                                </Text>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Text style={fontStyle2}>
                                    Сроком на
                                </Text>
                                <Text style={fontStyle3}>
                                    {termName}
                                </Text>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Text style={fontStyle2}>
                                    Цель кредита
                                </Text>
                                <Text style={fontStyle3}>
                                    {purposeName}
                                </Text>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>
                <Container maxWidth="xl" pt={5}>
                    {credit.map((item, index) => (
                        <Result data={item}  bgcolorid={index} key={index} currency={currency} searchCondition={searchCondition} />
                    ))}
                </Container>
            </Collapse>
        </Box>
    )
}



