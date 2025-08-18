"use client";

import { useState } from "react";
import { LuEyeClosed, LuEye } from "react-icons/lu";

interface receivedProps {
  label: string;
  placeholder: string;
  type: string;
  showIcon: boolean;
  accept?: string;
  name?: string;
  error?: string[];
  max?: string | number;
}
export function Input(props: receivedProps) {
  const [showPass, setShowPass] = useState(true);
  const [type, setType] = useState(props.type);

  function visivility() {
    setShowPass(!showPass);
    if (showPass) {
      setType("text");
    } else {
      setType("password");
    }
  }

  return (
    <div className="flex flex-col w-full">
      <label className="pl-2 text-white font-medium">{`${props.label}:`}</label>
      <div className="bg-[var(--bg-inputs)] px-2 py-1 rounded flex flex-row">
        <input
          type={type}
          placeholder={props.placeholder}
          className="flex-1"
          accept={props.accept}
          name={props.name}
          max={props.max}
        />
        {props.showIcon && !showPass && (
          <LuEye
            size={24}
            className="p-1 rounded ml-1 cursor-pointer hover:bg-gray-500 duration-300"
            onClick={visivility}
          />
        )}

        {props.showIcon && showPass && (
          <LuEyeClosed
            size={24}
            className="p-1 rounded ml-1 cursor-pointer hover:bg-gray-500 duration-300"
            onClick={visivility}
          />
        )}
      </div>
      {props.error && <p className="text-red-800">{props.error}</p>}
    </div>
  );
}
