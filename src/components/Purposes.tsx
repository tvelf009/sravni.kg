import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react";
import React from 'react';
import { BusinessIcon, ConsumerIcon, MedicineIcon, AutoIcon, EducationIcon, BuildIcon } from '../../public/images/icons/icons'



const json = [
    {
        title: "Кредит для развития бизнеса",
        desc: "На развитие  малого и среднего предпринимательства, приобретение оборудования для бизнеса и прочее",
        icon: <BusinessIcon/>
    },
    {
        title: "Потребительский кредит",
        desc: "Приобрести мебель или бытовую технику, съездить в отпуск, на проведение семейных торжеств и т.д",
        icon: <ConsumerIcon/>
    },
    {
        title: "Медицина",
        desc: "На лечение, профилактику здоровья, операцию, стоматологию и прочее.",
        icon: <MedicineIcon/>
    },
    {
        title: "Кредит на авто",
        desc: "Кредит на покупку нового или подержанного авто",
        icon: <AutoIcon/>
    },
    {
        title: "Кредит на образование",
        desc: "Для получения образования в ВУЗах, средне-специальных учебных заведениях и школах.",
        icon: <EducationIcon/>
    },
    {
        title: "Кредит на ремонт",
        desc: "Строительство, реконструкция и ремонт недвижимости, покупка строительных материалов.",
        icon: <BuildIcon/>
    },
]

export const Purposes = () => {

    

    return (
        <Box h="403px" bg="#F4F5F5" boxShadow="base">
            <Container maxWidth="xl" pt={10}>
                <Grid templateColumns="repeat(3, 1fr)" gap={3}> 
                {json?.map((item:any, index) => (
                    <GridItem rowSpan={2} colSpan={1} w="358px" h="153px" bg="white" key={index} >
                        <Grid
                            w="100%" h="100%"
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(3, 1fr)"
                            gap={0}
                            >
                            <GridItem colSpan={2} >
                                <Text fontSize="1xl" fontWeight="500" pt={2} pl={2}>
                                    {item.title}
                                </Text>
                            </GridItem>
                            <GridItem colSpan={2} align="right" pt={2} pr={3} >
                                {item.icon}
                            </GridItem>
                            <GridItem colSpan={4} pb={2} >
                                <Text fontSize="1xl" fontWeight="400"  pt={2} pl={2}>
                                    {item.desc}
                                </Text>
                            </GridItem>
                            </Grid>
                    </GridItem>
                ))}
                </Grid>
            </Container>
        </Box>
    )
}



