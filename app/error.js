'use client'

function Error({ error, reset }) {
    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1>Something went wrong!</h1>
            <p className='text-gray-200 sm:text-lg text-base'>{error.message}!</p>

            <button
                onClick={() => reset()}
                className='btn-third'>
                Try again
            </button>
        </main>
    )
}

export default Error
