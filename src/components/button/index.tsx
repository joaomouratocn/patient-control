export function Button({ text, className }: { text: string, className?: string }) {
    return (
        <button className={`w-full max-w-3xs bg-[var(--accent-green)] px-1 py-1.5 rounded text-white font-medium ${className} hover:bg-[var(--accent-green-hover)] duration-300`}>
            {text}
        </button>
    )
}