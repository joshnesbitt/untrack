import Head from 'next/head'

import Header from './header';
import Footer from './footer';
import Styles from './styles';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Untrack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container">
        {children}
      </div>

      <Footer />

      <Styles />
    </div>
  )
}
