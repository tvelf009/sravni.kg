import { Box } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, Text, SimpleGrid } from "@chakra-ui/react"
import React from 'react';
import { CurrencyDecorIcon } from '../../public/images/icons/icons';
import { CategoryItem } from './CategoryItem';
import { BestOffers } from '../interfaces/interface';

export const Category = ({potreb, auto, business, education}:{potreb:BestOffers[], auto:BestOffers[], business:BestOffers[], education:BestOffers[] }) => {


    return (
        <Box boxShadow="base">
            <Container  maxWidth="xl" mt={5}>
                <Text fontSize="4xl" fontWeight="500" as="h3">Лучшие предложения</Text>
                <CurrencyDecorIcon/>
                <Tabs mt={10} variant="cus-tabs-block" isFitted >
                <TabList>
                    <Tab>ПОТРЕБИТЕЛЬСКИЕ</Tab>
                    <Tab>ПОКУПКА АВТО</Tab>
                    <Tab>РАЗВИТИЕ БИЗНЕСА</Tab>
                    <Tab>ОБРАЗОВАНИЕ</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <SimpleGrid columns={[1, null, 4]} mt={10} spacing={5}>
                            {
                                potreb.map((item, index) => (
                                    <Box key={index}>
                                        <CategoryItem data={item}  />
                                    </Box>
                                ))
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={[1, null, 4]} mt={10} spacing={5}>
                            {
                                auto.map((item, index) => (
                                    <Box key={index}>
                                        <CategoryItem data={item}  />
                                    </Box>
                                ))
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={[1, null, 4]} mt={10} spacing={5}>
                            {
                                business.map((item, index) => (
                                    <Box key={index}>
                                        <CategoryItem data={item}  />
                                    </Box>
                                ))
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={[1, null, 4]} mt={10} spacing={5}>
                            {
                                education.map((item, index) => (
                                    <Box key={index}>
                                        <CategoryItem data={item}  />
                                    </Box>
                                ))
                            }
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Container>
        </Box>
    )
}





