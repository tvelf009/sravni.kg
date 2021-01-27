import { Box, Container, Text, Grid, GridItem, Center } from '@chakra-ui/react';
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

export const Calculate = ({data}:{data:PayDetail[]}) => {

    if(data === undefined){
        data = [];
    }


    return (
        <Box boxShadow="base">
            <Container maxWidth="xl" pt={10}>
                <Text fontSize="4xl" fontWeight="500" >
                    Таблица расчета кредита
                </Text>
                <CurrencyDecorIcon/>
                <Grid templateColumns="repeat(12, 1fr)" mt={5}>
                    <GridItem colSpan={9}>
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
                            <GridItem colSpan={2}>
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
                </Grid>
            </Container>
        </Box>
    )
}



