import Image from "next/image";
import Link from "../Link";

function Hero() {
    return (
        <section className="relative mx-auto h-[300px] max-w-5xl overflow-hidden rounded-2xl sm:h-[400px] md:h-[550px]">
            <Image
                src="/images/heroImages/hero.webp"
                fill
                priority
                alt="A panoramic view of the Vista Valley hotel nestled in a lush, green valley at sunset."
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center font-bold text-white">
                <h1 className="text-2xl sm:text-4xl md:text-5xl">
                    Beyond the Horizon, Your Sanctuary Awaits.
                </h1>

                <p className="mt-4 max-w-3xl text-base sm:text-lg 
                    md:text-xl lg:text-2xl dark:text-gray-300">
                    At Vista Valley, every view is a masterpiece and every moment is a treasure.
                </p>

                <Link href="/cabins" className="btn-primary mt-8">
                    Our Cabins
                </Link>
            </div>
        </section>
    );
}

export default Hero;
