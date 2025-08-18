import { IconType } from "react-icons";

interface ReceivedProps {
  text: string;
  className: string;
  Icon?: IconType;
}

export function Button({ text, className, Icon }: ReceivedProps) {
  return (
    <button
      className={`w-full px-1 py-1 rounded font-bold cursor-pointer flex flex-row items-center text-white justify-center ${className}`}
    >
      {text}
      {Icon && <Icon className="ml-2" size={24} />}
    </button>
  );
}
