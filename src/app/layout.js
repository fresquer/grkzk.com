import { Red_Hat_Mono } from 'next/font/google'
import './globals.css'

const font = Red_Hat_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'grkzk | prod. mix. master.',
  description: 'grkzk | prod. mix. master.',
  icons: {
    icon: 'favicon.png',
  },
  openGraph: {
    title: 'grkzk | prod. mix. master.',
    description: 'grkzk | prod. mix. master.',
    url: 'https://grkzk.com',
    images: [
      {
        url: 'https://grkzk-com.vercel.app/images/og-desc-grkzk_v2.jpg',
      },
    ],
  },
}

import NameRoller from './components/NameRoller'
import Menu from './components/Menu'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="container mx-auto border-[#2f2f2f] border border-t-0">
          <NameRoller></NameRoller>
          <Menu></Menu>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
