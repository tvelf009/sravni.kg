import { Box, Text, Container, SimpleGrid, Center } from '@chakra-ui/react';
import React from 'react';
import { LogoWhite } from '../../public/images/icons/icons';
import CSS from 'csstype';
import { CurrencyDecorIcon } from '../../public/images/icons/icons';


const fontStyle1:CSS.Properties = {
  fontWeight: 500,
  fontSize: "20px",
  color: "#FFF",
  textAlign: "center"
}

const fontStyle2:CSS.Properties = {
  color: "#FFF",
  fontSize: "18px"
}

const fontStyle3:CSS.Properties = {
  color: "#FFF",
  fontSize: "16px"
}

const boxStyle1:CSS.Properties = {
  bottom: "0",
  width: "100%"
}


export const Footer = () => {


    return (
        <Box bg="#292832" boxShadow="base" pt={10} style={boxStyle1}>
          <Container maxWidth="xl">
            <SimpleGrid columns={4} spacing={10}>
              <Box >
                <Center>
                  <LogoWhite/>
                </Center>                
                <Center>
                  <Text style={fontStyle1} mt={5}>
                    ПОМОЩНИК ПРИ ВЫБОРЕ КРЕДИТА
                  </Text>
                </Center>

              </Box>
              <Box pb={5}>
                <Text style={fontStyle2}>
                  Кредиты
                </Text>
                <CurrencyDecorIcon/>

                <Text style={fontStyle3}>
                Потребительский кредит
                </Text>
                
                <Text style={fontStyle3}>
                Кредит на авто
                </Text>
                
                <Text style={fontStyle3}>
                Кредит на недвижимость
                </Text>
                
                <Text style={fontStyle3}>
                Кредит под бизнес
                </Text>
              </Box>
              <Box >

              </Box>
              <Box ></Box>
          </SimpleGrid>
          </Container>
          <Box bg="#000" pt={2} pb={2}>
              <Container maxWidth="xl">
                <Text style={fontStyle3}>
                  2020 © Все права принадлежат Sravni.kg
                </Text>
              </Container>
              
          </Box>
        </Box>
    )
}



