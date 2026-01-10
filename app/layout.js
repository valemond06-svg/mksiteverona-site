import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ReactLenis } from 'lenis/react';
import CookieBanner from '@/components/CookieBanner';
import ScrollProgress from '@/components/ui/ScrollProgress';
import StickyCTA from '@/components/ui/StickyCTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Starfield from '@/components/ui/Starfield';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  metadataBase: new URL('https://www.mksiteverona.com'),
  title: 'MKSite | Realizzazione Siti Web Verona',
  description: 'Creiamo siti web moderni e veloci che portano clienti ai tuoi banchi. Soluzioni per bar, ristoranti, negozi a Verona.',
  keywords: ['siti web Verona', 'web design', 'e-commerce', 'seo locale', 'agenzia web', 'realizzazione siti verona'],
  authors: [{ name: 'MKSITE Verona' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mksiteverona.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.mksiteverona.com',
    siteName: 'MKSite Verona',
    title: 'MKSite - Siti Web Professionali',
    description: 'Creiamo siti web moderni che portano clienti ai tuoi banchi. Soluzioni per bar, ristoranti, negozi a Verona.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MKSite Verona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKSite - Siti Web Professionali',
    description: 'Siti web moderni che portano clienti ai tuoi banchi. Verona.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0F1419" />
        <link rel="icon" href="/favicon.ico" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'MKSITE Verona',
              description: 'Agenzia web per siti professionali',
              url: 'https://www.mksiteverona.com',
              telephone: '+39 3701093391',
              email: 'mksitestudio@gmail.com',
              areaServed: 'Verona',
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-slate-950 text-white antialiased`}>
        <ReactLenis root>
          <div id="root">
            <Starfield />
            <ScrollProgress />
            <StickyCTA />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <CookieBanner />
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
