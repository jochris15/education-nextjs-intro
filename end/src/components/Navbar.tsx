"use client"
import { usePathname } from "next/navigation"
import Link from 'next/link'

export default function Navbar() {
    const pathname = usePathname()
    const isActive = (href: string): boolean => pathname === href

    return (
        <>
            <nav className="sticky top-0 z-10 p-3 bg-purple-400 border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] flex justify-between items-center">
                <div className="flex justify-center">
                    <Link href="/" className={isActive('/') ? "text-2xl font-bold px-6 cursor-pointer underline decoration-purple-200" : "text-2xl font-bold px-6 cursor-pointer"}>
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/products"
                        className={isActive('/products') ? "text-2xl font-bold px-6 cursor-pointer underline decoration-purple-200" : "text-2xl font-bold px-6 cursor-pointer"}
                    >
                        <span>Products</span>
                    </Link>
                </div>
                <a className="text-2xl font-bold px-6 cursor-pointer text-red-700">
                    <span>Logout</span>
                </a>
            </nav>
        </>
    )
}