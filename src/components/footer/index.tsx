export function Footer({ className }: { className?: string }) {
    const fullYear = new Date().getFullYear()
    return (
        <footer className={`w-full max-w-7xl mx-auto pb-1.5 pt-3.5 bg-[var(--surface)] flex justify-center ${className}`}>
            <p className="text-white">{`Copyright © ${fullYear} | Arthivia Solutions`}</p>
        </footer>
    )
}