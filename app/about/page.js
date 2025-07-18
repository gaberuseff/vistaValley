import Image from 'next/image';
import { getCabins } from '../_lib/data-services';

export const metadata = {
    title: 'About Vista Valley Hotel | Our Story, Vision, and Commitment',
    description: 'Discover the story behind Vista Valley Hotel. Learn about our vision for luxury hospitality, our dedicated team, rich history since 1985, and our commitment to sustainability in the beautiful Vista Valley.',
    keywords: ['Vista Valley Hotel', 'luxury hotel', 'mountain retreat', 'sustainable hospitality', 'boutique hotel', 'our story', 'hotel history'],
    openGraph: {
        title: 'About Vista Valley Hotel | Our Story, Vision, and Commitment',
        description: 'Discover the story behind Vista Valley Hotel, a premier luxury destination nestled in a pristine valley.',
        url: '/about',
        siteName: 'Vista Valley Hotel',
        images: [
            {
                // It's recommended to use absolute URLs for OG images in production
                url: '/images/og-about.png',
                width: 1200,
                height: 630,
                alt: 'A stunning view of the Vista Valley Hotel at sunset.',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Vista Valley Hotel | Our Story, Vision, and Commitment',
        description: 'Discover the story behind Vista Valley Hotel, a premier luxury destination nestled in a pristine valley.',
        images: ['/images/og-about.png'],
    },
};

async function AboutPage() {
    const cabins = await getCabins();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Hotel',
        name: 'Vista Valley Hotel',
        description: 'A premier luxury destination nestled in a pristine valley, offering unforgettable experiences that blend timeless elegance with modern comfort.',
        image: '/images/aboutImages/about.png',
        url: '/about',
        telephone: '+1-555-123-4567',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Vista Valley Road',
            addressLocality: 'Mountain View',
            addressRegion: 'CA',
            postalCode: '94043',
            addressCountry: 'US',
        },
        starRating: {
            '@type': 'Rating',
            ratingValue: '5',
        },
        priceRange: '$$$$',
    };

    return (
        <>
            {/* Add JSON-LD structured data to the page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className='max-w-5xl mx-auto flex flex-col gap-10'>
                <div className="relative  h-[200px] overflow-hidden rounded-2xl sm:h-[400px] md:h-[270px]">
                    <Image src="/images/aboutImages/about.png" fill
                        alt="A panoramic view of the Vista Valley hotel nestled in a lush, green valley at sunset."
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 100vw, 1024px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    <h1 className='bottom-3 left-3 absolute'>Our Story</h1>
                </div>

                <article className='flex flex-col gap-3'>
                    <h2>Welcome to Vista Valley</h2>
                    <p className="p-small">
                        Welcome to Vista Valley Hotel, your serene escape nestled in the heart of nature.
                        Since our establishment in 1985, we have been dedicated to offering a unique blend
                        of luxury and tranquility. Our property features {cabins.length} exclusive cabins, each designed
                        to provide breathtaking views and unparalleled comfort. We invite you to explore our
                        story and discover the commitment to excellence that defines every aspect of your stay with us.
                    </p>
                </article>

                <article className='flex flex-col gap-3'>
                    <h2>Vision</h2>
                    <p className="p-small">
                        At Vista Valley Hotel, our vision is to redefine luxury hospitality by creating unforgettable experiences
                        that blend timeless elegance with modern comfort. We are
                        committed to providing exceptional service, exquisite accommodations, and unparalleled amenities,
                        ensuring every guest&apos;s stay is nothing short of extraordinary.
                    </p>
                </article>

                <article className='flex flex-col gap-3'>
                    <h2>Team</h2>
                    <p className="p-small">
                        Our team is composed of seasoned professionals dedicated to delivering personalized and
                        attentive service. From our expert chefs crafting culinary masterpieces to our
                        concierge team curating bespoke experiences, each member is passionate about exceeding guest
                        expectations and creating lasting memories.
                    </p>
                </article>

                <article className='flex flex-col gap-3'>
                    <h2>History</h2>
                    <p className="p-small">
                        Founded in 1985, Vista Valley Hotel began as a quaint retreat for nature lovers. Over the decades,
                        we have grown into a premier luxury destination, while preserving the natural beauty and tranquility
                        that first drew visitors to this valley. Our commitment to our heritage is reflected in our classic
                        architecture and the timeless hospitality we offer.
                    </p>
                </article>

                <article className='flex flex-col gap-3'>
                    <h2>Sustainability</h2>
                    <p className="p-small">
                        We are deeply committed to sustainability and preserving the pristine environment of Vista Valley.
                        Our practices include sourcing local ingredients, implementing energy-efficient systems, and
                        supporting community conservation projects. We believe in providing a luxury experience that is in
                        harmony with nature.
                    </p>
                </article>
            </section>
        </>
    );
}

export default AboutPage;
