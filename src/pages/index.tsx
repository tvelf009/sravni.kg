import { Main } from '../components/Main';
import { TopHeader } from '../components/TopHeader';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Currency } from '../components/Currency';
import Head from "next/head";
import { Purposes } from '../components/Purposes';
import { CreditSearch } from '../components/CreditSearch';
import { Footer } from '../components/Footer';
import SearchAPI from '../../lib/api/search';
import { Category } from '../components/Category';
import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import {Partners} from '../components/Partners';



const Index = ({currencyData, partnersData,  potreb, auto, business, education}: any) => (
    
    <>
      <NextSeo
        title="Кредиты в Кыргызстанe"
        description="Используйте сервис для быстрого поиска кредитов в Кыргызстане онлайн. Персональный подбор кредита, подробная информация по условиям кредитования, расчёт примерного графика погашения." 
        openGraph={{}}
       />
      <Head>
        <meta charSet="utf-8" />
        
        <title>Кредиты в Кыргызстане</title>
      </Head>

      <Box minW="704px">
        <TopHeader/>
        <Header/>
        <Banner/>
        <Currency data={currencyData} />
        <Purposes />
        <CreditSearch/>
        <Partners partners={partnersData}/>
        <Category potreb={potreb} auto={auto} business={business} education={education} />
        <Main>

        </Main>
        <Footer/>
      </Box>

    </>
);




export async function getStaticProps() {


  // const {data} = await SearchAPI.partners();
  const partners = await SearchAPI.partners();
  const currency = await SearchAPI.getCurrency();
  const potreb = await SearchAPI.offersPotreb();
  const auto = await SearchAPI.offersAuto();
  const business = await SearchAPI.offersBusiness();
  const education = await SearchAPI.offersEduc();

  return{
    props:{
      partnersData: partners.data,
      currencyData: currency.data.currencies,
      potreb: potreb.data,
      auto: auto.data,
      business: business.data,
      education: education.data
    }    
  }
}

export default Index;



