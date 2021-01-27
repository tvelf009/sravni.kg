import { Main } from '../components/Main';
import { TopHeader } from '../components/TopHeader';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Currency } from '../components/Currency';
import Head from "next/head";
import { Purposes } from '../components/Purposes';
import { CreditSearch } from '../components/CreditSearch';
import { Footer } from '../components/Footer';
import { Partners } from '../components/Partners';
import SearchAPI from '../../lib/api/search';
import { Category } from '../components/Category';




const Index = ({currencyData, partnersData, potreb, auto, business, education}: any) => (

    <>
      <Head>
        <title>Sravni.KG | Кредиты для счастья</title>
      </Head>
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

  console.log(currency);
  
  return{
    props:{
      partnersData: partners.data,
      currencyData: currency.data.quotes,
      potreb: potreb.data,
      auto: auto.data,
      business: business.data,
      education: education.data
    }    
  }
}

export default Index;



