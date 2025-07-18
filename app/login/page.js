import SignInButton from "../_components/auth/SignInButton";

export const metadata = {
    title: "Login",
    description: "Sign in to access your guest area",
}

export default function Page() {
    return (
        <div className="flex flex-col gap-10 mt-10 items-center">
            <h2>
                Sign in to access your guest area
            </h2>
            <SignInButton />
        </div>
    );
}