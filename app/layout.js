import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MKSite',
  description: 'Creiamo siti web moderni e veloci che portano clienti ai tuoi banchi. Soluzioni per bar, ristoranti, negozi a Verona.',
  keywords: ['siti web Verona', 'web design', 'e-commerce', 'seo locale', 'agencia web'],
  authors: [{ name: 'MKSITE Verona' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://mksiteverona-site.vercel.app',
    siteName: 'MKSite Verona',
    title: 'MKSite - Siti Web Professionali',
    description: 'Creiamo siti web moderni che portano clienti ai tuoi banchi. Soluzioni per bar, ristoranti, negozi a Verona.',
    images: [
      {
        url: 'https://mksiteverona-site.vercel.app/og-image.png',
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
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0F1419" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://mksiteverona-site.vercel.app" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'MKSITE Verona',
              description: 'Agenzia web per siti professionali',
              url: 'https://mksiteverona-site.vercel.app',
              telephone: '+39 3701093391',
              email: 'mksitestudio@gmail.com',
              areaServed: 'Verona',
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
