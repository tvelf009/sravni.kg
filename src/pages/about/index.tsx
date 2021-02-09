import Head from "next/head";
import { Box, Container, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { TopHeader } from '../../components/TopHeader';
import { Header } from '../../components/Header';
import { CurrencyDecorIcon } from "../../../public/images/icons/icons";
import { BreadcrumbCmpnt } from "../../components/BreadcrumbCmpnt";
import { PhoneIcon, Icon, EmailIcon } from '@chakra-ui/icons';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { Footer } from "../../components/Footer";



const About = () => {


  return (
    <>

        <Head>
            <title>Sravni.KG | О Нас</title>
        </Head>
        <TopHeader/>
        <Header/>
        <BreadcrumbCmpnt/>
        <Box minWidth="704px" mt={15}>
            <Container maxWidth="xl">
                <Text fontSize="4xl" fontWeight="500"  as="h1">
                    Контакты
                </Text>
                <CurrencyDecorIcon/>
                <Text>
                    Если у Вас возникли вопросы или хотите предложить нам что то, Вы можете воспользоваться одним из следующих каналов связи
                </Text>
                <SimpleGrid mt={10} columns={[1, null, 6]} >
                    <GridItem  textAlign="right">
                        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                            <Box>
                                <Icon as={PhoneIcon} w={8} h={8} color="orange.500" />
                            </Box>
                            <Box>
                                <IconContext.Provider value={{ size: "2em", color: "green" }}>
                                    <AiOutlineWhatsApp />
                                </IconContext.Provider>
                            </Box>
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <a href="https://wa.me/996505122111" target="_blank">
                            <Text as="h1" fontSize="xl" fontWeight="600">
                                +996 505 122 111
                            </Text>    
                        </a>                    
                    </GridItem>
                </SimpleGrid>
                <SimpleGrid mt={10} columns={[1, null, 6]} >
                    <GridItem  textAlign="right">
                        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                            <Box>
                                <Icon as={EmailIcon} w={8} h={8} color="orange.500" />
                            </Box>
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <a href="mailto:info@sravni.kg" target="_blank">
                            <Text as="h1" fontSize="xl" fontWeight="600">
                                info@sravni.kg
                            </Text>    
                        </a>                    
                    </GridItem>
                </SimpleGrid>
            </Container>
            <Box mt={100}></Box>
            <Footer/>
        </Box>        

    </>
  )

};




export default About;



