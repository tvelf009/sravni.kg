import { Box, Container, Text, Grid, GridItem, Center, Button } from '@chakra-ui/react';
import React from 'react';
import { PayDetail } from '../interfaces/interface';
import { CurrencyDecorIcon, CheckIcon } from '../../public/images/icons/icons';
import CSS from 'csstype';

const gridStyle:CSS.Properties = {
    background: "#F7F9FA",
    border: "1px solid #e0e0e0"
}

const gridStyle1:CSS.Properties = {
    background: "#FFF",
    border: "1px solid #e0e0e0"
}

const fontStyle1:CSS.Properties = {
    color: "#000",
    fontSize: "16px",
    lineHeight: 1,
    fontWeight: 500
}

const fontStyle2:CSS.Properties = {
    color: "#000",
    fontSize: "25px",
    lineHeight: 1,
    fontWeight: 600
}

export const Calculate = ({data}:{data:PayDetail[]}) => {

    if(data === undefined){
        data = [];
    }

    
    

    return (
        <Box boxShadow="base">
            <Container maxWidth="xl" pt={10} pb={10}>
                <Text fontSize="4xl" fontWeight="500" >
                    Таблица расчета кредита
                </Text>
                <CurrencyDecorIcon/>
                <Grid templateColumns="repeat(12, 1fr)" mt={5} gap={10}>
                    <GridItem colSpan={9} pt={5}>
                        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                            <GridItem colSpan={2}>
                                <CheckIcon/>
                            </GridItem>
                            <GridItem colSpan={10}>
                                <Text>Информация</Text>
                                <Text>
                                Данный расчет является примерно-ориентированным. Окончательный график погашения необходимо уточнять у банковского сотрудника. Тут чисто что бы примерно понимать сколько будете платить. Разница с банковскими данными могут быть не значительна.
                                </Text>
                            </GridItem>
                        </Grid>
                        <Grid templateColumns="repeat(12, 1fr)" gap={6} style={gridStyle}>
                            <GridItem colSpan={2} >
                                <Center p={3}>
                                    Месяцы
                                </Center>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <Center p={3}>
                                Ежемесячный платеж
                                </Center>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <Center p={3} style={{textAlign: "center"}}>
                                    Начисленные проценты
                                </Center>
                            </GridItem>
                            <GridItem colSpan={2} style={{textAlign: "center"}}>
                                <Center p={3}>
                                    Погашение кредита
                                </Center>        
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Center p={3} style={{textAlign: "center"}}>
                                Остаток кредита 
                                </Center>
                             </GridItem>
                        </Grid>
                        {
                            data.map((item, index) => (
                                <Grid templateColumns="repeat(12, 1fr)" gap={6} style={index % 2? gridStyle:gridStyle1} key={index} >
                                <GridItem colSpan={2} p={2}>
                                    <Center>
                                        {index} мес. 
                                    </Center>                                   
                                </GridItem>
                                <GridItem colSpan={3} p={2}>
                                    <Center>
                                        {item.monthlyPayment}
                                    </Center>
                                </GridItem>
                                <GridItem colSpan={3} p={2}>
                                    <Center>
                                        {item.percentPayment}
                                    </Center>
                                </GridItem>
                                <GridItem colSpan={2} p={2}>
                                    <Center>
                                        {item.creditPayment}
                                    </Center>
                                </GridItem>
                                <GridItem colSpan={2} p={2}>
                                    <Center>
                                        {item.debt}
                                    </Center>
                                 </GridItem>
                            </Grid>
                            ))
                        }

                    </GridItem>
                    <GridItem colSpan={3}>
                        <Box bg="#F7F9FA" pt={5} pl={2}> 
                            <Text style={fontStyle1}>
                                Ставка
                            </Text>
                            <Text style={fontStyle2} mt={3}>
                                от 21 % в год.
                            </Text>
                            <Text style={fontStyle1} mt={8}>
                                Ежемесячный платёж:
                            </Text>
                            <Text style={fontStyle2} mt={3}>
                                {data[0] != undefined? "от " + data[0].monthlyPayment + " сом" : "загрузка"}
                            </Text>
                            <Button variant="cus-call" mt={5} mb={5}>
                                Оформить кредит онлайн
                            </Button>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}



