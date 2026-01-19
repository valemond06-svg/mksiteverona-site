import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ReactLenis } from 'lenis/react';
import StickyCTA from '@/components/ui/StickyCTA';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientLayoutElements from '@/components/ClientLayoutElements';

import LazyStarfield from '@/components/ui/LazyStarfield';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F1419',
};

export const metadata = {
  metadataBase: new URL('https://www.mksiteverona.com'),
  title: 'MKSite | Realizzazione Siti Web Verona',
  description: 'Creiamo siti web moderni e veloci che portano clienti ai tuoi banchi. Soluzioni per bar, ristoranti, negozi a Verona.',
  keywords: ['siti web Verona', 'web design', 'e-commerce', 'seo locale', 'agenzia web', 'realizzazione siti verona'],
  authors: [{ name: 'MKSITE Verona' }],
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
            <LazyStarfield />
            <ScrollProgress />
            <StickyCTA />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ClientLayoutElements />
          </div>
        </ReactLenis>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="b1e62037-34a0-4257-a386-57179f3db260"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
