import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

// SEO metadata
export const metadata: Metadata = {
  title: 'CodeChef BVCOE',
  description: 'Official website of CodeChef Chapter at BVCOE. Explore contests, events, and coding resources.',
  keywords: ['CodeChef', 'BVCOE', 'Competitive Programming', 'Coding Club', 'DSA', 'Contests'],
  authors: [{ name: 'CodeChef BVCOE Team', url: 'https://codechefbvcoe.vercel.app' }],
  creator: 'CodeChef BVCOE',
  metadataBase: new URL('https://codechefbvcoe.vercel.app'),
  openGraph: {
    title: 'CodeChef BVCOE',
    description: 'Explore CodeChef BVCOE\'s contests, events, and coding resources.',
    url: 'https://codechefbvcoe.vercel.app',
    siteName: 'CodeChef BVCOE',
    images: [
      {
        url: '/CodeChef_Logo.svg.png',
        width: 1200,
        height: 630,
        alt: 'CodeChef BVCOE',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/fav.jpg',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
