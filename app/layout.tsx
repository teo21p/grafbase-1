import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Flexsible',
  description: 'Showcase and discover remarcable developer projets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
