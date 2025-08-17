import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import Image from "next/image";
import logo from '@/assets/logo-text.png'


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
                        showIcon={false}
                    />
                    <div className="flex flex-row justify-end items-end w-full">
                        <Input
                            type="password"
                            label="Senha"
                            placeholder="Insira sua senha"
                            showIcon={true}
                        />

                    </div>
                    <Button
                        text="Acessar"
                        className="mt-3 bg-[var(--accent-green)]"
                    />
                </div>
            </div>
        </Container>
    )
}