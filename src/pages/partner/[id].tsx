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
import { NextSeo } from 'next-seo';
import { BreadCrumb } from '../../interfaces/interface';

const BrCrm:BreadCrumb[] = [{
    link: "/dash/",
    name: "Список кредитов"
  },{
    link: "#",
    name: "Создание кредита"
}]
  


const Partner = ({partnerData, banksCreditsList}:{partnerData:any, banksCreditsList:Credits[]}) => {
    
    return (
        <>
            {
                partnerData != null? (
                    <>
                        <NextSeo
                            title={"Кредиты от " + partnerData.name}
                            description={"Персональный подбор кредитов от " + partnerData.name + ". Подробная информация по условиям кредитования, расчёт примерного графика погашения"}
                            openGraph={{}}
                        />
                        <Head>
                            <title>Кредиты от {partnerData.name}</title>
                        </Head>
                    </>
                ) : (
                    <>
                        <NextSeo
                            title={"Список кредитов" }
                            description={"Персональный подбор кредитов. Подробная информация по условиям кредитования, расчёт примерного графика погашения"}
                            openGraph={{}}
                        />
                    <Head>
                        <title>Список кредитов</title>
                    </Head>
                    </>

                )
            }

        <Box minWidth="704px">
            <TopHeader/>
            <Header/>
            <BreadcrumbCmpnt inData={BrCrm}/>
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
                        <BankCredits role={"ROLE_USER"} data={item} key={index} index={index}/>
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



