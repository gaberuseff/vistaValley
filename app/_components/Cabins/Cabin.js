import Image from "next/image"
import TextExpander from "../TextExpander"
import { EyeOff, MapPin, Users } from "lucide-react"

function Cabin({ cabin }) {
    const { name, description, image, maxCapacity } = cabin

    return (
        <div className="mb-24 border border-gray-800 p-6">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:gap-12 xl:gap-20 items-center">
                <figure className="relative w-full aspect-square">
                    <Image
                        src={image}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-cover "
                        alt={`View of cabin ${name} in Marassi`}
                    />
                </figure>

                <div className="space-y-8">
                    <h1 className="md:ml-[-60px]">Cabin {name}</h1>

                    <p className="p-small">
                        <TextExpander>{description}</TextExpander>
                    </p>

                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-4 items-center">
                            <Users className="icon-primary" />
                            <span className="text-lg">
                                For up to <span className="font-bold">{maxCapacity}</span> guests
                            </span>
                        </li>

                        <li className="flex gap-4 items-center">
                            <MapPin className="icon-primary" />
                            <span className="text-lg">
                                Located in the heart of <span className="font-bold">Marassi, North Coast</span> (Egypt)
                            </span>
                        </li>

                        <li className="flex gap-4 items-center">
                            <EyeOff className="icon-primary" />
                            <span className="text-lg">
                                Privacy <span className="font-bold">100%</span> guaranteed
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cabin
