import {
    Input,
    InputGroup,
    InputLeftAddon,
    Box,
    Link,
    Flex,
    Center,
    Text
} from '@chakra-ui/react';

import React from 'react';



export const NumInp = ({defaultNumber}: {defaultNumber: number}) => {
    const [value, setValue] = React.useState<number>(defaultNumber)
    
 
    return (
        <Box>
            <InputGroup size="sm">
                <InputLeftAddon children="https://wa.me/" />
                <Input borderRadius="0" placeholder="Введите Ваш ванючий номер" value={value} onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setValue(parseInt(ev.target.value))} />
            </InputGroup>
            <Flex mt="50">
                <Center w="100vh" >
                    <Link href={'https://wa.me/' + value} isExternal>
                        <Text fontSize="2vw" color="tomato">
                            Открыть чат с номером {value}
                        </Text>
                    </Link>
                </Center>

            </Flex>

        </Box>
    )
}



NumInp.defaultProps = {
  defaultNumber: 0,
}



