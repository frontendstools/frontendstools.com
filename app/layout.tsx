import 'css/tailwind.css'
// import 'pliny/search/algolia.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import { SearchProvider, SearchConfig } from 'pliny/search'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const font_inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${font_inter.variable} scroll-smooth`}
      suppressHydrationWarning
      data-theme="light"
    >
      <GoogleTagManager gtmId="GTM-MM6VNTJM" />
      <GoogleAnalytics gaId="G-ZP4QCJZBGX" />

      <link href="https://www.googletagmanager.com" rel="preconnect" />
      <link href="https://www.google-analytics.com" rel="preconnect" />

      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#1F2937" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1F2937" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <Analytics mode="development" />

      <body>
        <SectionContainer>
          <div className="flex h-screen flex-col justify-between font-sans">
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <SpeedInsights />
              <main className="mb-auto">{children}</main>
            </SearchProvider>
            <Footer />
          </div>
        </SectionContainer>
      </body>
    </html>
  )
}
