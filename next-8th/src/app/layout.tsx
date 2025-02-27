import Header from '@/components/Header'
import './styles/globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default:'Next App - Sid',
    template:' %s | Sid',
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
            {children}
        <Footer />
      </body>
    </html>
  )
}
