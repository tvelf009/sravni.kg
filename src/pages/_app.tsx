import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';


import '../../public/styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
       <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'ru_RU',
            url: 'https://sravni.kg',
            site_name: 'Sravni.kg',
          }}
        />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}




export default MyApp
