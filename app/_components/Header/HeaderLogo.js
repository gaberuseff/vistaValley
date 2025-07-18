import Image from "next/image"
import Link from "@/app/_components/Link"


function HeaderLogo() {
    return (
        <>
            <Link href="/" className="text-2xl font-bold w-8 h-8 relative">
                <Image src="/logo.svg" fill alt="Vista Valley" />
            </Link>
        </>
    )
}

export default HeaderLogo