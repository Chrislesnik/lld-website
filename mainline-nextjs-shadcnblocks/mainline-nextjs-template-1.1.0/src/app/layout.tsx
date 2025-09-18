import { DM_Mono, Inter } from 'next/font/google';
import localFont from 'next/font/local';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const dmSans = localFont({
  src: [
    {
      path: '../../fonts/dm-sans/DMSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/dm-sans/DMSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/dm-sans/DMSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/dm-sans/DMSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../fonts/dm-sans/DMSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../fonts/dm-sans/DMSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Laks Luxury Detailing - Premium Auto Detailing Services',
    template: '%s | Laks Luxury Detailing',
  },
  description:
    'Premium auto detailing services with luxury care for your vehicle. Professional detailing, ceramic coating, paint correction, and more.',
  keywords: [
    'Auto Detailing',
    'Car Detailing',
    'Ceramic Coating',
    'Paint Correction',
    'Luxury Detailing',
    'Car Wash',
    'Vehicle Care',
    'Professional Detailing',
  ],
  authors: [{ name: 'Laks Luxury Detailing Team' }],
  creator: 'Laks Luxury Detailing Team',
  publisher: 'Laks Luxury Detailing',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Laks Luxury Detailing - Premium Auto Detailing Services',
    description:
      'Premium auto detailing services with luxury care for your vehicle. Professional detailing, ceramic coating, paint correction, and more.',
    siteName: 'Laks Luxury Detailing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Laks Luxury Detailing - Premium Auto Detailing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laks Luxury Detailing - Premium Auto Detailing Services',
    description:
      'Premium auto detailing services with luxury care for your vehicle. Professional detailing, ceramic coating, paint correction, and more.',
    images: ['/og-image.jpg'],
    creator: '@laksluxurydetailing',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`h-screen ${dmSans.variable} ${dmMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
