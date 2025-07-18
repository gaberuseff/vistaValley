import '@/app/_styles/globals.css';
import "react-day-picker/style.css";
import { Josefin_Sans } from 'next/font/google';
import Header from "@/app/_components/Header/Header";
import Footer from '@/app/_components/Footer';
import { ReservationProvider } from './_context/ReservationContext';
import { Analytics } from '@vercel/analytics/next';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://vista-valley.vercel.app/'),
  title: {
    default: 'Vista Valley Hotel | فندق فيستا فالي - Luxury Hotel in Marassi, North Coast',
    template: '%s | Vista Valley Hotel',
  },
  description: 'Experience luxury at Vista Valley Hotel, your perfect destination in Marassi, North Coast, Egypt for relaxation and adventure. Enjoy elegant suites, fine dining, and exceptional service. | استمتع بتجربة فاخرة ومريحة في فندق فيستا فالي. أجنحة أنيقة، طعام فاخر، وخدمة استثنائية. وجهتك المثالية في مراسي، الساحل الشمالي، مصر للاسترخاء والمغامرة.',
  keywords: [
    'Marassi hotel', 'Marassi North Coast', 'luxury resort Marassi', 'Egypt North Coast hotels', 'hotel booking Marassi', 'beach resort Egypt',
    'فندق في مراسي', 'منتجع مراسي الساحل الشمالي', 'حجز فنادق مراسي', 'عطلات الساحل الشمالي', 'فنادق فاخرة في مصر', 'فيستا فالي'
  ],
  creator: 'Gaber Usef',
  openGraph: {
    title: 'Vista Valley Hotel | فندق فيستا فالي - Luxury Hotel in Marassi, North Coast',
    description: 'Experience luxury at Vista Valley Hotel, your perfect destination in Marassi, North Coast, Egypt for relaxation and adventure. | استمتع بتجربة فاخرة ومريحة في فندق فيستا فالي.',
    url: '/',
    siteName: 'Vista Valley Hotel | فندق فيستا فالي',
    images: [
      {
        url: '/images/og-main.png', // Assuming a main OG image
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Vista Valley Hotel in Marassi | منظر بانورامي لفندق فيستا فالي في مراسي',
      },
    ],
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vista Valley Hotel | فندق فيستا فالي - Luxury Hotel in Marassi, North Coast',
    description: 'Experience luxury at Vista Valley Hotel, your perfect destination in Marassi, North Coast, Egypt for relaxation and adventure. | استمتع بتجربة فاخرة ومريحة في فندق فيستا فالي.',
    images: ['/images/og-main.png'],
    creator: '@gaberuseff',
  },
  alternates: {
    canonical: '/',
    languages: {
      'ar-EG': '/',
      'en-US': '/en', // Assuming an English version exists at /en
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
  category: 'hotel',
}

function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body className={`dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-800 min-h-screen flex flex-col`}>
        <Header />

        <main className='flex-1 sm:px-8 px-4 sm:py-12 py-6'>
          <div className='max-w-5xl mx-auto'>
            <ReservationProvider>
              {children}
              <Analytics />
            </ReservationProvider>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
