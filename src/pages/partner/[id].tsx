import Head from "next/head";
import { Box } from '@chakra-ui/react';
import { BreadcrumbCmpnt } from "../../components/BreadcrumbCmpnt";
import { TopHeader } from "../../components/TopHeader";
import SearchAPI from "../../../lib/api/search";
import { Header } from "../../components/Header";
import { BankTitle } from "../../components/BankTitle";
import { BankCredits } from "../../components/BankCredits";
import { Credits } from "../../interfaces/interface";
import { Footer } from '../../components/Footer';





const Partner = ({partnerData, banksCreditsList}:{partnerData:any, banksCreditsList:Credits[]}) => {
    
    return (
        <>

        <Head>
            <title>Sravni.KG | Ваш помощник при выборе кредита</title>
        </Head>
        <Box minWidth="704px">
            <TopHeader/>
            <Header/>
            <BreadcrumbCmpnt/>
            {
                partnerData != undefined? (
                    <BankTitle data={partnerData}/>
                ):(
                    <h3>Загрузка</h3>
                )
            }

            {
                banksCreditsList != null ? (
                    banksCreditsList.map((item, index) => (
                        <BankCredits data={item} key={index} index={index}/>
                    ))
                ):(
                    <h1>Загрузка</h1>
                )
            }
            <Footer/>
        </Box>

        </>
    )

};

export async function getStaticPaths() {

    const {data}:{data:any[]} = await SearchAPI.partners();

    console.log(data);
    

    const paths = data.map((item:any) => (
        {
            params: {
                id: item.id.toString()
            }
        }
       ))


    return {
      paths,
      fallback: true
    };
}

export async function getStaticProps(context:any) {
    const {data} = await SearchAPI.getPartnerById(context.params.id);
    const banksCreditsList = await SearchAPI.getPartnerCredits(context.params.id);
    return{
      props:{
        partnerData: data,
        banksCreditsList: banksCreditsList.data
      }    
    }
}




export default Partner;



