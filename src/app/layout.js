import './globals.css'
import Header from './component/header'
import { Mulish } from 'next/font/google';
import Footer from './component/footer';

const mulish = Mulish({
  weight:['300','400','500','600','700','800','900'],
  subsets:['latin'],
  display:'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
