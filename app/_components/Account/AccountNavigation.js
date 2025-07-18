'use client'

import { usePathname } from "next/navigation";
import Link from "../Link"
import SignOutButton from "./SignOutButton"

function AccountNavigation() {
    const pathname = usePathname();
    const active = (path) => pathname === path;

    const links = [
        { name: 'Home', href: '/account' },
        { name: 'Reservations', href: '/account/reservations' },
        { name: 'Profile', href: '/account/profile' },
    ]

    return (
        <div className="flex items-center gap-1 border-b 
        dark:border-gray-800 border-gray-200 sm:pb-6 pb-6 sm:text-lg text-base">
            {links.map((link) => (
                <Link key={link.name} href={link.href}
                    className={`dark:hover:text-gray-500 
                        hover:text-gray-700 sm:text-base text-sm px-3 py-1
                        ${active(link.href) ? 'dark:bg-gray-800' : ''}`}> {link.name}</Link>
            ))
            }

            <li className="text-red-500 pl-3">
                <SignOutButton />
            </li>
        </div >
    )
}

export default AccountNavigation
