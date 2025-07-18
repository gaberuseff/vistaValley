import { MountainSnow, Sparkles, UtensilsCrossed } from 'lucide-react';

const features = [
    {
        id: 1,
        name: 'Breathtaking Vistas',
        description: "Perched in the heart of the valley, our cabins offer panoramic windows that frame nature's ever-changing masterpiece.",
        icon: MountainSnow,
    },
    {
        id: 2,
        name: 'Gourmet Dining',
        description: 'Savor locally-sourced, world-class cuisine at our signature restaurant, where every dish is a celebration of flavor.',
        icon: UtensilsCrossed,
    },
    {
        id: 3,
        name: 'Unforgettable Experiences',
        description: "From guided nature hikes to serene spa treatments, curate a stay that's as adventurous or as tranquil as you desire.",
        icon: Sparkles,
    },
];

function Features() {
    return (
        <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <h2>
                        An Experience Beyond Compare
                    </h2>
                    <p className="p-small">
                        Discover what makes a stay at Vista Valley truly unique.
                    </p>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-1">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-start p-8 rounded-md bg-gray-50 dark:bg-gray-800/50">
                            <div>
                                <feature.icon className="icon-secondary" />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {feature.name}
                                </h3>
                                <p className="p-small">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
