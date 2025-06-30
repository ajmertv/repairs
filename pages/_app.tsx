import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Varsha Enterprise"
        defaultTitle="Varsha Enterprise - Home Appliance Service Center in Ajmer"
        description="Expert repair and service center for AC, LED TV, Washing Machine, Refrigerator and other home appliances in Ajmer. Authorized service for all major brands."
        canonical="https://www.varshaenterprise.com/"
        openGraph={{
          type: 'website',
          locale: 'en_IN',
          url: 'https://www.varshaenterprise.com/',
          siteName: 'Varsha Enterprise',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
} 