import { Box, Button, Grid, Image } from '@chakra-ui/react';
import { Container, GridItem, Text } from '@chakra-ui/layout';
import React from 'react';
import { CurrencyDecorIcon } from '../../public/images/icons/icons';
import { Credits, Purposes } from '../interfaces/interface';
import CSS from 'csstype';

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

const fontStyle1:CSS.Properties = {
    fontWeight: 500,
    fontSize: "small",
}

const fontStyle2:CSS.Properties = {
    fontSize: "22px",
    fontWeight: 500
}

const buttonStyle1:CSS.Properties  = {
    height: "45px",
    background: "#28467F",
    color: "#fff",
    width: "100%",
    marginTop: "17px"
}

export const CrAbout = ({data, condition}:{data:Credits, condition:any}) => {

    return (
        <Box boxShadow="false" mt={5} mb={10}>
            <Container maxWidth="xl" >
                <Text fontSize="4xl" fontWeight="500">
                    О Банке
                </Text>
                <CurrencyDecorIcon/>
                <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={4} >
                        <Image src={"https://sravni.kg/images/logo/"+ data.partner.logo} />
                    </GridItem>
                    <GridItem colSpan={5} >
                        <Text style={fontStyle1} mt={3}>
                            {purposesArray[condition.purposeId].name}
                        </Text>
                        <Text style={fontStyle2} mt={3}>
                            Кредит "{data.title}"
                        </Text>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <a href={data.partnerCreditUrl} target="_blank">
                            <Button style={buttonStyle1}>
                                Перейти на сайт банка
                            </Button>
                        </a>

                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}



