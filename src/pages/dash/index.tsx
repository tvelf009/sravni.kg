import { TopHeader } from '../../components/TopHeader';
import { Header } from '../../components/Header';
import Head from "next/head";
import { Footer } from '../../components/Footer';
import { BreadcrumbCmpnt } from '../../components/BreadcrumbCmpnt';
import { Text, Box, Button, Menu, MenuButton, Container, Spacer,Flex, Heading } from '@chakra-ui/react';
import { privateRoute } from '../../../src/components/dash/privateRoute';
import CSS from 'csstype';
import Router from "next/router";
import useSWR from 'swr';
import ServerCookie from "next-cookies";
import { BankCredits } from '../../components/BankCredits';
import { BreadCrumb } from '../../interfaces/interface';
import Cookies from 'js-cookie';

const boxStyle1:CSS.Properties = {
  border: "1px solid #E6EAF0",
  borderRadius: "10px"
}

const BrCrm:BreadCrumb[] = [{
  link: "#",
  name: "Список кредитов"
}]



const BackIndex = (ctx:any) => {


  const getCreatePage = async() => {
    await Router.push("/dash/create/new");
  }

  const logOut = () => {

      Cookies.remove('access_token');
      Cookies.remove('lastname');
      Cookies.remove('role');
      Cookies.remove('username');
      console.log(Cookies.get());
      Router.push("/dash/login");
  }

  const fetcher = (url:string) => {
    return fetch(url, {
      method: 'GET',
      headers: {
       Authorization: `Bearer ${ServerCookie(ctx).access_token}`,
       'Content-Type': 'application/json',
      },
     }).then(response => response.json());
  }

  const {data} = useSWR('https://sravni.kg:9090/api/v1/products/credits', fetcher);

  return (
    <>

      <Head>
        <title>Ваш помощник при выборе кредита</title>   
      </Head>
      <Box minWidth="704px">
        <TopHeader/>
        <Header/>
        
        <BreadcrumbCmpnt inData={BrCrm}/>
        <Container maxWidth="xl">
        <Box style={boxStyle1} p={2} mt={5} mb={5}>
        <Flex>
          <Box p="2">
            <Heading size="md">{Cookies.get('lastname')}</Heading>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="teal" mr="4" variant="outline" onClick={getCreatePage}>
              Добавить продукт
            </Button>
            <Button colorScheme="teal" mr="4" variant="outline">
              Список заявок
            </Button>
            <Button colorScheme="pink" mr="4" variant="outline" onClick={logOut}>
              Выход
            </Button>
          </Box>
        </Flex>
        </Box>
        </Container>

          {
            data != null? (
              data.map((item:any, index:number) => (
                <BankCredits data={item} key={index} index={index} role={ServerCookie(ctx).role} />
             ))
            ):(
              <Text> 
                Загрузка данных
              </Text>
            )
          }
        <Footer/>
      </Box>
    </>
  )
};

export default privateRoute(BackIndex) ;



