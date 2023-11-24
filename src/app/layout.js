import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navigation/navbar/page'
import Footer from './components/navigation/footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beauty School - Official Website',
  description: 'Official Website for Beauty School.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children} 
      <Footer />
      </body>
    </html>
  )
}
