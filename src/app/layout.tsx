import type { Metadata } from 'next'
import './../scss/index.scss';
import "animate.css/animate.min.css";
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import { BurgerProvider } from '@/contexts/BurgerContext';

export const metadata: Metadata = {
  title: 'Stoyan Grozdanov Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BurgerProvider>
          <Navigation />
          {children}
          <Footer />
        </BurgerProvider>
      </body>
    </html>
  )
}
