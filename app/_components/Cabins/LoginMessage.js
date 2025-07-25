import Link from "../Link";

function LoginMessage() {
    return (
        <div className='grid bg-gray-800 '>
            <p className='text-center text-xl py-12 self-center'>
                Please{' '}
                <Link href='/login' className='underline text-gray-400'>
                    login
                </Link>{' '}
                to reserve this
                <br /> cabin right now
            </p>
        </div>
    );
}

export default LoginMessage;