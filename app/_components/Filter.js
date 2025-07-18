'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeFilter = searchParams.get('capacity') ?? 'all';

    function handleFilter(filter) {
        const params = new URLSearchParams(searchParams);
        params.set('capacity', filter);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    const filters = [
        { value: 'all', label: 'All' },
        { value: 'small', label: '1-3 guests' },
        { value: 'medium', label: '4-7 guests' },
        { value: 'large', label: '8-12 guests' },
    ];

    return (
        <div className="border dark:border-gray-800 border-gray-300 flex p-1 gap-1">
            {filters.map(filter =>
                <button
                    key={filter.value}
                    onClick={() => handleFilter(filter.value)}
                    className={`px-5 py-2 text-sm font-medium hover:bg-gray-700 
                        hover:text-gray-50 transition-all duration-300 cursor-pointer
                    ${filter.value === activeFilter ? 'dark:bg-gray-800 dark:text-gray-50 bg-gray-300 text-gray-50' : ''}`}
                >
                    {filter.label}
                </button>)}
        </div>
    )
}

export default Filter
