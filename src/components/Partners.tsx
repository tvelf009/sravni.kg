import { Box, Container, Image, Text } from '@chakra-ui/react';
import { CurrencyDecorIcon } from '../../public/images/icons/icons';
import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
 

export const Partners = ({partners}:{partners:any[]}) => {
    const [activeItemIndex, setActiveItemIndex] = React.useState(0);
    const chevronWidth = 40;

    return (
        <Box bg="#F6F6F6" boxShadow="base" pb={8} pt={5}>
            <Container  maxWidth="xl">
                <Text fontSize="4xl" fontWeight="500">Доступен поиск по следующим банкам</Text>
                <CurrencyDecorIcon/>
                <Box mt={10}>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={4}
                        gutter={20}
                        leftChevron={<button><ArrowLeftIcon color="orange.500"/></button>}
                        rightChevron={<button><ArrowRightIcon color="orange.500"/></button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >
                        {
                            partners.map((item, index) => (
                                <div key={index} style={{width: "20vw"}}>
                                    <Link href={"/partner/" + item.id}>
                                        <Image src={"https://sravni.kg/images/logo/"+item.logo} />
                                    </Link>
                                    
                                </div>
                            ))
                        }
                        
                    </ItemsCarousel>
                </Box>

            </Container>
            
            
        </Box>
    )
}



