import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import Image from "next/image";
import logo from '@/assets/logo-text.png'
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

export default function Login() {
    return (
        <Container>
            <div className="flex justify-center items-center h-[calc(100vh-44px)]">
                <div className="w-full max-w-[400px] mx-auto bg-[var(--surface)] rounded-2xl px-8 py-12 flex flex-col items-center gap-5">
                    <Image src={logo} width={216} height={116} alt="Arthivia Logo" />
                    <Input
                        type="text"
                        label="Usuário"
                        placeholder="Nome de usuário"
                    />
                    <div className="flex flex-row justify-end items-end w-full">
                        <Input
                            type="password"
                            label="Senha"
                            placeholder="Insira sua senha"
                        />
                        <IoIosEye size={24} className="bg-white p-1 rounded ml-1 h-[32px] cursor-pointer hover:bg-gray-500 duration-300" />
                    </div>
                    <Button
                        text="Acessar"
                        className="mt-3"
                    />
                </div>
            </div>
        </Container>
    )
}