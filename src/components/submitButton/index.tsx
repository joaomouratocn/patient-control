"use client";

import { useFormStatus } from "react-dom";

interface ReceivedProps {
  text: string;
  loadText: string;
  className?: string;
}

export function SubmitButton(props: ReceivedProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`p-2 rounded text-white ${
        pending ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--accent-green)]"
      } cursor-pointer font-semibold hover:bg-[var(--accent-green-hover)] duration-300 ${
        props.className
      }`}
    >
      {pending ? props.loadText : props.text}
    </button>
  );
}
