'use client'

import { useState } from 'react'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'

interface receivedProps {
    label: string
    placeholder: string
    type: string
    showEye: boolean
}
export function Input(props: receivedProps) {
    const [showPass, setShowPass] = useState(true)
    const [type, setType] = useState(props.type)

    function visivility() {
        setShowPass(!showPass)
        if (showPass) {
            setType('text')
        } else {
            setType('password')
        }
    }

    return (
        <div className="flex flex-col w-full">
            <label className="pl-2 text-white font-medium">{`${props.label}:`}</label>
            <div className="bg-[var(--bg-inputs)] px-2 py-1 rounded flex flex-row">
                <input
                    type={type}
                    placeholder={props.placeholder}
                    className='flex-1'
                />
                {props.showEye && showPass && (
                    <IoIosEye size={24} className="p-1 rounded ml-1 cursor-pointer hover:bg-gray-500 duration-300" onClick={visivility} />
                )}

                {props.showEye && !showPass && (
                    <IoIosEyeOff size={24} className="p-1 rounded ml-1 cursor-pointer hover:bg-gray-500 duration-300" onClick={visivility} />
                )}
            </div>
        </div>
    )
}