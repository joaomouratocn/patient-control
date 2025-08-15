import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Input } from "@/components/input";

export default function () {
    return (
        <Container>
            <div className="flex flex-col gap-3 items-center mt-6">
                <h1 className="text-4xl font-bold text-white">Cadastrar Pacientes</h1>
                <div className="flex gap-3 flex-wrap justify-center w-full max-w-[400px]">
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Insira o nome do paciente"
                    />

                    <Input
                        label="CPF"
                        type="text"
                        placeholder="Insira o CPF do paciente"
                    />

                    <Input
                        label="Data de nascimento"
                        type="text"
                        placeholder="Insira a data de nascimento do paciente"
                    />

                    <Input
                        label="Nome da mãe"
                        type="text"
                        placeholder="Insira o nome da mãe do paciente"
                    />

                    <Input
                        label="Numero do cartão do SUS"
                        type="text"
                        placeholder="Insira o numero do cartão do SUS do paciente"
                    />

                    <Button text="Cadastrar" className="mt-3" />
                </div>
            </div>
        </Container>
    )
}