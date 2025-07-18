import { getCabin, getCabins } from "@/app/_lib/data-services";
import { Suspense } from "react";

import Cabin from "@/app/_components/Cabins/Cabin";
import Reservation from "@/app/_components/Cabins/Reservation";
import Loader from "@/app/_components/Loader";


export async function generateMetadata({ params }) {
    const { name, description, image } = await getCabin(params.cabinId);
    const title = `Cabin ${name} in Marassi | Vista Valley Hotel`;
    const fullDescription = `Book Cabin ${name} at Vista Valley Hotel in Marassi, North Coast. ${description}`;

    return {
        title,
        description: fullDescription,
        openGraph: {
            title,
            description: fullDescription,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: `View of Cabin ${name} at Vista Valley, Marassi`,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    const cabins = await getCabins();
    const ids = cabins.map((cabin) => ({
        cabinId: String(cabin.id),
    }));
    return ids;
}

export default async function Page({ params }) {
    const cabin = await getCabin(params.cabinId);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HotelRoom",
        name: `Cabin ${cabin.name} at Vista Valley Hotel`,
        description: cabin.description,
        image: cabin.image,
        "occupancy": {
            "@type": "QuantitativeValue",
            "maxValue": cabin.maxCapacity
        },
        "offers": {
            "@type": "Offer",
            "price": cabin.regularPrice,
            "priceCurrency": "EGP"
        },
        "containedInPlace": {
            "@type": "Hotel",
            "name": "Vista Valley Hotel",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Marassi",
                "addressRegion": "North Coast",
                "addressCountry": "EG"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="mt-8">
                <Cabin cabin={cabin} />

                <div>


                    <Suspense fallback={<Loader />}>
                        <Reservation cabin={cabin} />
                    </Suspense>
                </div>
            </article>
        </>
    );
}