import './globals.css'
import Navbar from '@/containers/navbar'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Glafyros',
  description: '',
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='dark'>
      <body className={'min-h-screen bg-zinc-900 scroll-smooth ' + poppins.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
