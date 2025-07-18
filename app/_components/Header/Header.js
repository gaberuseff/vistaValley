import { auth } from "@/app/_lib/auth"
import HeaderLogo from "./HeaderLogo"
import Navigation from "./Navigation"

async function Header() {
    const session = await auth();

    return (
        <header className="flex justify-between items-center 
            sm:px-8 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
            <HeaderLogo />
            <Navigation session={session} />
        </header>
    )
}

export default Header
