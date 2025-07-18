import { signInAction } from "@/app/_lib/actions";
import Image from "next/image";

function SignInButton() {
    return (
        <form action={signInAction}>
            <button className='flex items-center gap-6 sm:text-lg text-base border
            border-gray-300 sm:px-10 px-6 py-4 font-medium cursor-pointer'>
                <Image
                    src='https://authjs.dev/img/providers/google.svg'
                    alt='Google logo'
                    height='24'
                    width='24'
                />
                <span>Continue with Google</span>
            </button>
        </form>
    );
}

export default SignInButton;