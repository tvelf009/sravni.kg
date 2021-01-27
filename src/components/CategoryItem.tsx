import { Box, Center, Image, Text, Grid, Link  } from '@chakra-ui/react';
import React from 'react';
import CSS from 'csstype';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { BestOffers } from '../interfaces/interface';
import { Divider } from "@chakra-ui/react";



const fontStyle1:CSS.Properties = {
    fontWeight: 500,
    fontSize: "large"
}

const fontStyle2:CSS.Properties = {
    fontWeight: 400,
    fontSize: "medium"
}

const fontStyle3:CSS.Properties = {
    fontWeight: 400,
    fontSize: "small"
}

export const CategoryItem = ({data}:{data:BestOffers}) => {


    return (
        <Box  boxShadow="base" >
            <Box boxShadow="false" border="1px"  borderColor="#E6EAF0" p={4}>
                <Center>
                    <Image src={"https://sravni.kg/images/logo/"+ data.partner.logo} h="40px"/>
                </Center>                
            </Box>
            <Box border="1px"  borderColor="#E6EAF0" p={2} boxShadow="false">
                <Text style={fontStyle1}>
                    {data.partner.name}
                </Text>
                <Text style={fontStyle2}>
                    {data.title}
                </Text>
                {
                        data.condition.generalLimits.map((item, index) => (
                            <Box pb={1} key={index}>
                                <Grid  templateColumns="repeat(2, 1fr)" spacing={0} mt={3}>
                                    <Box >
                                        <Text style={fontStyle1}>
                                            {item.rateLimit.min} %
                                        </Text>
                                    </Box>
                                    <Box >
                                        <Text style={fontStyle3}>
                                            от {item.amountLimit.min} {item.currency.code}
                                        </Text>
                                    </Box>
                                </Grid>
                                <Grid  templateColumns="repeat(2, 1fr)" spacing={0}>
                                    <Box >
                                        <Text style={fontStyle2}>
                                            годовых
                                        </Text>
                                    </Box>
                                    <Box >
                                        <Text style={fontStyle3}>
                                            до {item.amountLimit.max} {item.currency.code}
                                        </Text>
                                    </Box>
                                </Grid>
                                {
                                    index === 0 ? <Divider mt={2}/> : null
                                }
                            </Box>
                        ))
                    }

            </Box>
            <Box boxShadow="false" border="1px" p={2} borderColor="#E6EAF0">
                <Link>
                    Подробнее  <ArrowForwardIcon/>
                </Link>
            </Box>
        </Box>
    )
}



