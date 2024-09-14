import { Red_Hat_Mono } from 'next/font/google'
import './globals.css'

const font = Red_Hat_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'grkzk | no place for fear',
  description: 'grkzk | "no place for fear" is out',
  icons: {
    icon: 'favicon.png',
  },
  openGraph: {
    title: 'grkzk | no place for fear',
    description: 'grkzk | "no place for fear" is out',
    url: 'https://grkzk.com',
    images: [
      {
        url: 'https://grkzk-com.vercel.app/images/og-desc-grkzk.png',
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
        <div className="container mx-auto border-[#2f2f2f] border-b-2 border-r-2 border-l-2">
          <NameRoller></NameRoller>
          <Menu></Menu>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
