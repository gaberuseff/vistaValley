'use client';

import Link from "@/app/_components/Link";
import { Text, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation({ session }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const active = (path) => pathname === path;

    const links = [
        { href: "/cabins", label: "Cabins" },
        { href: "/about", label: "About" },
    ];

    return (
        <nav className="z-10 text-xl">
            <button
                onClick={() => setOpen(!open)}
                className="block md:hidden"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
                <Text className="text-lg" />
            </button>

            <ul className={`
                md:flex md:items-center md:gap-10 md:text-lg 
                ${open
                    ? "fixed inset-0 z-50 flex flex-col justify-center items-center text-xl gap-8 dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-800 p-8"
                    : "hidden"
                } 
            `}>
                <button className="md:hidden absolute top-6 right-4"
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation menu">
                    <X />
                </button>

                {links.map((link) => (
                    <Link key={link.href} href={link.href}
                        onClick={() => setOpen(false)}
                        className={`hover:text-gray-400 dark:hover:text-gray-600 transition-colors
                            ${active(link.href) ? 'text-gray-400 dark:text-gray-600' : ''}`}>
                        {link.label}
                    </Link>
                ))}

                {session ? (
                    <Link href="/account" onClick={() => setOpen(false)}
                        className="flex items-center gap-2">
                        <Image src={session.user.image} width={35} height={35}
                            alt="Guest" className="rounded-full" referrerPolicy="no-referrer" />
                        <p className="p-small">Guest Area</p>
                    </Link>
                ) : (
                    <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                )}
            </ul>
        </nav>
    );
}