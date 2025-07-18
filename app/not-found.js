import Link from "@/app/_components/Link";

function NotFound() {
    return (
        <main className='text-center space-y-6 mt-4'>
            <h1>
                This page could not be found :(
            </h1>
            <Link
                href='/'
                className='btn-third'
            >
                Go back home
            </Link>
        </main>
    );
}

export default NotFound;