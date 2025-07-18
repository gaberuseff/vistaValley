import Image from "next/image"
import Link from "../Link"
import { UsersRound } from "lucide-react";
import { formatCurrency } from "@/app/_utils/helpers";



function CabinCard({ cabin }) {
    const { id, name, image, maxCapacity, regularPrice, discount } = cabin;

    return (
        <div className="group flex flex-row overflow-hidden border
            border-gray-100 dark:border-gray-800">
            <div className="relative w-2/5 aspect-square md:aspect-auto">
                <Image
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-108"
                    src={image}
                    alt={`View of cabin ${name} in Marassi`}
                    quality={70}
                    fill
                    priority
                />
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                        {name}
                    </h3>

                    <div className="flex items-baseline justify-end gap-2">
                        {discount > 0 ? (
                            <div className="flex sm:flex-row flex-col sm:gap-2">
                                <p className="text-base text-gray-400 dark:text-gray-500 line-through">
                                    {formatCurrency(regularPrice)}
                                </p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {formatCurrency(regularPrice - discount)}
                                </p>
                            </div>
                        ) : (
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                {formatCurrency(regularPrice)}
                            </p>
                        )}
                    </div>
                </div>

                <p className="p-small flex items-center gap-2">
                    <UsersRound className="icon-primary" /> <span>up to {maxCapacity} guests</span>
                </p>
                <div className="mt-4 flex justify-end">
                    <Link href={`/cabins/${id}`} className="btn-secondary 
                        group">
                        Details <span aria-hidden="true" className="ml-1">→</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CabinCard
