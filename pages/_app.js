import '../styles/globals.css'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }){
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="HFT Prime Marketing — We build product-grade apps and clean code that scales." />
        <title>HFT Prime Marketing</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default MyApp
