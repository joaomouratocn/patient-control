'use client'

import Image from "next/image";
import logo from "@/assets/logo.png";
import { ImExit } from "react-icons/im";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export function Header() {
  const route = usePathname()

  return (
    <>
      {route !== "/login" && (
        <header className="w-full max-w-7xl bg-[var(--surface)] p-4 mx-auto flex items-center">
          <div className="flex justify-between w-full">
            <Link href="/">
              <Image
                src={logo}
                alt="logo-arthivia"
                priority
                width={77}
                height={61}
              />
            </Link>
            <div className="flex flex-row w-[300] items-center gap-6">
              <p className=" hidden text-white text-lg flex-1 text-right sm:block">JOAO MOURATO</p>
              <button className="cursor-pointer">
                <ImExit size={28} color="#fff" />
              </button>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
