import { Suspense } from "react";
import CabinList from "../_components/Cabins/CabinList";
import Loader from "@/app/_components/Loader";
import { getCabins } from "../_lib/data-services";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/Cabins/ReservationReminder";

export const revalidate = 3600;

export const metadata = {
    title: 'Luxury Cabins in Marassi | Vista Valley Hotel',
    description: 'Explore our luxury cabins at Vista Valley Hotel in Marassi, North Coast. Your sanctuary for an unparalleled escape into nature. | استكشف أكواخنا الفاخرة في فندق فيستا فالي بمراسي، الساحل الشمالي. ملاذك للهروب إلى الطبيعة.',
    keywords: ['Marassi cabins', 'luxury cabins Marassi', 'Vista Valley cabins', 'private retreat North Coast', 'book cabin Marassi', 'أكواخ فاخرة في مراسي', 'أكواخ فيستا فالي', 'عطلة في الساحل الشمالي', 'حجز كوخ في مراسي'],
    openGraph: {
        title: 'Luxury Cabins in Marassi | Vista Valley Hotel',
        description: 'Explore our luxury cabins at Vista Valley Hotel in Marassi, North Coast. Your sanctuary for an unparalleled escape into nature.',
        url: '/cabins',
        siteName: 'Vista Valley Hotel | فندق فيستا فالي',
        images: [
            {
                // It's recommended to use absolute URLs for OG images in production
                url: '/images/og-cabins.png',
                width: 1200,
                height: 630,
                alt: 'A beautiful luxury cabin at Vista Valley in Marassi. | كوخ فاخر وجميل في فيستا فالي بمراسي.',
            },
        ],
        locale: 'ar_EG',
        alternateLocale: ['en_US'],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luxury Cabins in Marassi | Vista Valley Hotel',
        description: 'Explore our luxury cabins at Vista Valley Hotel in Marassi, North Coast. Your sanctuary for an unparalleled escape into nature.',
        // It's recommended to use absolute URLs for Twitter card images in production
        images: ['/images/og-cabins.png'],
    },
    alternates: {
        canonical: '/cabins',
        languages: {
            'ar-EG': '/cabins',
            'en-US': '/en/cabins',
        },
    },
}

export default async function Page({ searchParams }) {
    const cabins = await getCabins();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Luxury Cabins at Vista Valley Hotel in Marassi',
        'description': 'A collection of luxury cabins available for booking at Vista Valley Hotel in Marassi, North Coast.',
        'itemListElement': cabins.map((cabin, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'url': `/cabins/${cabin.id}`, // Use absolute URL in production
            'name': `Cabin ${cabin.name}`
        }))
    };

    const filter = searchParams?.capacity ?? 'all';

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section>
                <h1>Our Luxury Cabins in Marassi</h1>

                <p className="p-small">
                    Co-authored by nature and refined by modern luxury, our cabins offer an unparalleled escape.
                    Nestled in the heart of Marassi, each cabin is a sanctuary of peace and comfort,
                    designed to bring you closer to the serene beauty of the wilderness without sacrificing the plush
                    amenities you deserve. Explore our collection and find your perfect private retreat.
                </p>

                <div className="mt-8 flex justify-end">
                    <Filter />
                </div>

                <Suspense fallback={<Loader />} key={filter}>
                    <CabinList filter={filter} />

                    <ReservationReminder />
                </Suspense>
            </section>
        </>
    )
}
