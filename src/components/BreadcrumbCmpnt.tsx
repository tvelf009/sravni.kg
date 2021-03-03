import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from '@chakra-ui/react';
import React from 'react';
import { BreadCrumb } from '../interfaces/interface';



export const BreadcrumbCmpnt = ({inData}:{inData:BreadCrumb[]}) => {

    return (
        <Box  boxShadow="false" mt={3}>
            <Container maxWidth="xl">
            <Breadcrumb>
                    <BreadcrumbItem >
                        <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                    </BreadcrumbItem>
                    {
                        inData.map((item, index) => (
                            <BreadcrumbItem key={index}>
                                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                        ))
                    }
            </Breadcrumb>
            </Container>
        </Box>
    )
}



