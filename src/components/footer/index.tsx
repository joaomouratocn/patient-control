'use client'

import { usePathname } from "next/navigation"

export function Footer({ className }: { className?: string }) {
    const route = usePathname()
    const fullYear = new Date().getFullYear()

    const bgProp = route !== "/login" ? "bg-[var(--surface)]" : ""

    return (
        <footer className={`w-full max-w-7xl mx-auto pb-1.5 pt-3.5 flex justify-center ${className} ${bgProp}`}>
            <p className="text-white">{`Copyright © ${fullYear} | Arthivia Solutions`}</p>
        </footer>
    )
}