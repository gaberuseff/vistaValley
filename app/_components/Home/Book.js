import Link from "../Link"

function Book() {
    return (
        <section className='max-w-4xl mx-auto flex flex-col  text-center py-16 px-4 sm:px-6 lg:px-8
            bg-gray-50 dark:bg-gray-800/50 my-8 rounded-lg'>
            <div>
                <h2>
                    Book Your Stay
                </h2>

                <p className="p-small">
                    Find the perfect cabin for your next adventure.
                </p>
            </div>

            <Link href="/cabins" className="btn-primary mx-auto mt-8">
                Book Now
            </Link>
        </section>
    )
}

export default Book
