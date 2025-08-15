export function Button({ text, className }: { text: string, className?: string }) {
    return (
        <button className={`w-full bg-[var(--accent-green)] px-1 py-1 rounded text-white font-medium ${className} hover:bg-[var(--accent-green-hover)] duration-300 cursor-pointer`}>
            {text}
        </button>
    )
}