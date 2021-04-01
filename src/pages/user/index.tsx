import { TopHeader } from '../../components/TopHeader';
import { Header } from '../../components/Header';
import Head from "next/head";
import { Footer } from '../../components/Footer';
import { BreadcrumbCmpnt } from '../../components/BreadcrumbCmpnt';
import { Box, Container, Spacer,Flex, Heading } from '@chakra-ui/react';
import { privateRoute } from '../../../src/components/dash/privateRoute';
import CSS from 'csstype';
import { BreadCrumb, MyCredits } from '../../interfaces/interface';
import { useCookies } from "react-cookie";
import SearchAPI from '../../../lib/api/search';
import {MyCreditItems} from '../../components/MyCreditItems';


const boxStyle1:CSS.Properties = {
  border: "1px solid #E6EAF0",
  borderRadius: "10px"
}

const BrCrm:BreadCrumb[] = [{
  link: "#",
  name: "Панель клиента"
}]



const UserIndex = (dataItem:any) => {

  const [cookie] = useCookies()

  console.log(dataItem.dataItem);
  
 
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
            <div suppressHydrationWarning={true}>
              { process.browser && <Heading size="md">{cookie.lastname}</Heading> }
            </div>
          </Box>
          <Spacer />
        </Flex>
        </Box>
          {
              dataItem.dataItem.map((item:MyCredits, index:any) => (
                  <MyCreditItems mCreditItems={item} key={index} />
              ))

          }
        </Container>

        <Footer/>
      </Box>
    </>
  )
};


UserIndex.getInitialProps = async (ctx:any) => {
  
  const {data} = await SearchAPI.getMyCredits(ctx.auth.token);

  return { 
    dataItem: data
  }
}


export default privateRoute(UserIndex) ;



