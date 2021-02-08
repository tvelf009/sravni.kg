import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'


import '../../public/styles/fonts.css';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
       <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'ru_RU',
            url: 'https://sravni.kg/',
            site_name: 'Sravni.kg',
            description: "Персональный подбор кредита, подробная информация по условиям кредитования, расчёт примерного графика погашения."
          }}
        />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}




export default MyApp
