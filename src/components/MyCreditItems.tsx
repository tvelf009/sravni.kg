import { Text, SimpleGrid , GridItem, Button } from '@chakra-ui/react';
import React from 'react';
import CSS from 'csstype';
import { MyCredits } from '../interfaces/interface';

const boxStyle1:CSS.Properties = {
    border: "1px solid #E6EAF0",
    borderRadius: "10px"
  }


export const MyCreditItems = ({mCreditItems}:{mCreditItems:MyCredits}) => {


    return (
        <SimpleGrid columns={[1, null, 12]} style={boxStyle1} p={5} mb={5}>
            <GridItem colSpan={2} >
                <Text>
                    {mCreditItems.step}
                </Text>
            </GridItem>
            <GridItem colSpan={8}>
                <Text>
                    Заявка подана Вами на сумму {mCreditItems.creditAmount} сом, сроком на {mCreditItems.creditTerm} месяца, по категории кредита "{mCreditItems.credit.title}".
                </Text>
            </GridItem>
            <GridItem colSpan={2}>
                <Button colorScheme="red">
                Отменить
                </Button>
            </GridItem>
        </SimpleGrid>
    )
}




