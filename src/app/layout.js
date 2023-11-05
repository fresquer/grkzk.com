import { Red_Hat_Mono } from 'next/font/google'
import './globals.css'

const font = Red_Hat_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'grkzk | no place for fear',
  description: 'grkzk | "no place for fear" is out',
  icons: {
    icon: 'favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
