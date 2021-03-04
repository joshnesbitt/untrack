import Head from 'next/head'

import Header from './header';
import Footer from './footer';
import Styles from './styles';

import Config from '../config';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta content="website" property="og:type" />
        <meta content={Config.title} property="og:title" />
        <meta content={Config.description} property="og:description" />
        <meta content={Config.url} property="og:url" />
        <meta content={Config.image} property="og:image" />

        <meta content="summary" name="twitter:card" />
        <meta content={Config.title} name="twitter:title" />
        <meta content={Config.description} name="twitter:description" />
        <meta content={Config.url} name="twitter:url" />
        <meta content={`@${Config.twitter.username}`} name="twitter:site" />
        <meta content={`@${Config.twitter.username}`} name="twitter:creator" />
        <meta content={Config.image} name="twitter:image" />

        <title>{Config.title}</title>
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
