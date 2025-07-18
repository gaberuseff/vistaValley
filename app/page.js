import Hero from "@/app/_components/Home/Hero";
import Book from "./_components/Home/Book";
import FeaturedCabins from "./_components/Home/FeaturedCabins";

export const metadata = {
  title: 'Vista Valley',
  description: 'Vista Valley Hotel - Experience luxury and comfort in the heart of the city. Enjoy elegant luxury suites, fine dining, modern amenities, and exceptional service for business or leisure stays.',
}

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturedCabins />
      <Book />
    </div>
  );
}
