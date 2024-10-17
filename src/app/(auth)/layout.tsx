"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'Forgot Password', href: '/forgot-password' },
]

export default function OuterAuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname()
    const [input, setInput] = useState("");
    return (
        <>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div>Outer Auth layout</div>
            {
                navLinks.map((link) => {
                    const isActive = path.startsWith(link.href)
                    return (
                        <Link className={isActive ? "font-bold mr-4 text-red-500" : "text-blue-500 mr-4"}
                            href={link.href} key={link.name}>{link.name}</Link>
                    )
                })
            }
            {children}
        </>
    );
}