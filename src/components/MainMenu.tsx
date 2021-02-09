import { Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box } from '@chakra-ui/react';
import React from 'react';
import { PhoneIcon } from '../../public/images/icons/icons';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';


export const MainMenu = () => {

    return (
            
        <Box>
            <Box display={{base: "none", md:"block"}}>
                <Menu>
                    <Link href="/">
                        <MenuButton
                            as={Button}
                            variant="cus-menu">
                                
                                    Главная
                                
                        </MenuButton>
                    </Link>
                </Menu>
                <Menu>
                <MenuButton 
                    as={Button}
                    variant="cus-menu"
                    >
                    Кредиты
                </MenuButton>
                <MenuList>
                    <MenuItem>Потребительский кредит</MenuItem>
                    <MenuItem>Кредит на авто</MenuItem>
                    <MenuItem>Кредит на недвижимость</MenuItem>
                    <MenuItem>Кредит под бизнес</MenuItem>
                </MenuList>
                </Menu>
                <Menu>
                    <MenuButton
                        as={Button}
                        variant="cus-menu"
                        >
                            Статьи
                    </MenuButton>
                </Menu>
                <Menu>
                <Link href="/about">
                    <MenuButton
                        as={Button}
                        leftIcon={<PhoneIcon/>}
                        variant="cus-call"
                        >
                            Связаться с нами
                    </MenuButton>
                    </Link>
                </Menu>
            </Box>
            <Box display={{base: "block",  sm: "block", md: "none"}}>
                <Menu>
                    <MenuButton
                        as={Button}
                        variant="cus-menu"
                        >
                        <HamburgerIcon/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Главная</MenuItem>
                        <MenuItem>Кредиты</MenuItem>
                        <MenuItem>Статьи</MenuItem>
                        <Link href="/about">
                            <MenuItem>Связаться с нами</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
            
        </Box>


    )
}



