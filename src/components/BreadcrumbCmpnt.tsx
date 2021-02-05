import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from '@chakra-ui/react';
import React from 'react';



export const BreadcrumbCmpnt = () => {


    return (
        <Box  boxShadow="false" mt={3}>
            <Container maxWidth="xl">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Подбор кредита</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">О Кредите</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            </Container>

        </Box>
    )
}



