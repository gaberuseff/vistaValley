import { unstable_noStore as noStore } from "next/cache";

import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-services";
import EmptyCabins from "@/app/_components/Cabins/EmpyCabins";


async function CabinList({ filter }) {
    noStore(); // No cache for this component

    const cabins = await getCabins();

    // 1. Filter
    let displayedCabins = cabins;
    if (filter === 'small')
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

    if (filter === 'medium')
        displayedCabins = cabins.filter(
            (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
        );

    if (filter === 'large')
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

    // 2. Render
    if (!displayedCabins.length) return <EmptyCabins />;

    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-8">
            {displayedCabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}

export default CabinList;