interface receivedProps {
    label: string
    placeholder: string
    type: string
}
export function Input(props: receivedProps) {
    return (
        <div className="flex flex-col w-full">
            <label className="pl-2 text-white font-medium">{`${props.label}:`}</label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className="bg-[var(--bg-inputs)] px-2 py-1 rounded"
            />
        </div>
    )
}