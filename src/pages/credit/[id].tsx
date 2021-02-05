import { TopHeader } from '../../components/TopHeader';
import { Header } from '../../components/Header';
import Head from "next/head";
import { Footer } from '../../components/Footer';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher  from '../../../lib/utils/fetcher';
import { BreadcrumbCmpnt } from '../../components/BreadcrumbCmpnt';
import { CrAbout } from '../../components/CrAbout';
import { ParsedUrlQuery } from 'querystring';
import { Appointment } from '../../components/Appointment';
import { Calculate } from '../../components/Calculate';
import { Box } from '@chakra-ui/react';





const CreditPage = () => {

  const router = useRouter();
  const condition:ParsedUrlQuery = router.query;


  const {data} = useSWR("https://sravni.kg:9090/api/v1/products/credits/" + condition.id, fetcher);
  const payDetail = useSWR("https://sravni.kg:9090/api/v1/payments?amount=" + condition.amount + "&term=" + condition.term + "&rate=" + condition.rate + "&type=annuity", fetcher);
  
  return (
    <>

      <Head>
        {
          data != null? <title>Sravni.KG | {data.partner.name + " " + data.title}</title> : <title>Sravni.KG | Ваш помощник при выборе кредита</title>
        }
        
      </Head>
      <Box minWidth="704px">
        <TopHeader/>
        <Header/>
        <BreadcrumbCmpnt/>
        {
          data != null? (
            <>
              <CrAbout data={data} condition={condition} />
              <Appointment data={data}/>
            </>
          )
          
          : (
            <h1>Загрузка</h1>
          )
        }
        
        {
          payDetail != null? (
            <Calculate data={payDetail.data} condition={condition.rate}/>
          ):(
            <h1>Загрузка</h1>
          )
        }
        

        <Footer/>
      </Box>

    </>
  )

};




export default CreditPage;



