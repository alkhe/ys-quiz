import { Fira_Mono } from 'next/font/google'

import dynamic from 'next/dynamic'

import 'leaflet/dist/leaflet.css'

const fira_mono = Fira_Mono({ weight: ['400', '700'], subsets: ['latin'] })

const Main = dynamic(() => import('./Main'), {
  ssr: false
})

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex flex-col h-full items-stretch ${fira_mono.className}`}>
      <Main />
    </main>
  )
}
