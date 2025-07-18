import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from './Link';

function Footer() {
    const SocialLinks = [
        { href: "https://www.facebook.com/gaberuseff", icon: <Facebook /> },
        { href: "https://www.linkedin.com/in/gaberuseff/", icon: <Linkedin /> },
        { href: "https://www.instagram.com/gaberuseff", icon: <Instagram /> },
    ];

    const QuickLinks = [
        { href: "/cabins", label: "Cabins" },
        { href: "/about", label: "About" },
        { href: "/account", label: "Guest area" },
    ];

    return (
        <footer className="bg-gray-200 text-gray-700 dark:bg-gray-900
        dark:text-gray-400 border-t border-gray-300 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="mb-6 md:mb-0 col-span-1 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center mb-4">
                            <Image src="/logo.svg" width={32} height={32} alt="Vista Valley Logo" />
                            <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">Vista Valley</span>
                        </Link>
                        <p className="text-sm">
                            Experience luxury and comfort in the heart of the city. Your perfect getaway awaits.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {QuickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-primary-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>123 Luxury Lane, Marassi City</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: contact@vistavalley.com</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {SocialLinks.map((link, index) => (
                                <Link key={index} href={link.href} target="_blank"
                                    className="icon-primary">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Made by <a href="https://www.facebook.com/gaberuseff"
                        className="text-gray-50 dark:text-gray-300 hover:text-gray-400 transition-colors"
                        target="_blank" rel="noopener noreferrer">Gaber Usef</a> for learning purposes.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;