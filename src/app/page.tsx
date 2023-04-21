import Head from 'next/head'
import dynamic from 'next/dynamic'

import 'leaflet/dist/leaflet.css'

const Main = dynamic(() => import('./Main'), {
  ssr: false
})

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>
      <main className="flex flex-col min-h-screen items-stretch p-24">
        <Main />
      </main>
    </>
  )
}
