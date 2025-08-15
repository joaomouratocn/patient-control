import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Input } from "@/components/input";

export default function Consult() {
    return (
        <Container>
            <div className="flex flex-col items-center gap-3.5">
                <h1 className="text-4xl font-bold text-white my-6">Consultar Pacientes</h1>
                <div className="flex flex-row w-full max-w-[1000px] gap-3 items-center mb-2">
                    <Input
                        type="text"
                        label="Tipo de busca"
                        placeholder="Nome"
                    />

                    <Input
                        type="text"
                        label="Insira o que deseja procurar"
                        placeholder="Digite os dados"
                    />
                    <Button text="Buscar" className="mt-6" />
                </div>
                <div className="overflow-y-auto h- min-w-full">
                    <table className="min-w-full">
                        <thead>
                            <tr className="text-left bg-[var(--surface)]">
                                <th className="text-white px-2 py-1">Nome</th>
                                <th className="text-white px-2 py-1">CPF</th>
                                <th className="text-white px-2 py-1">Data nascimento</th>
                                <th className="text-white px-2 py-1">Nome da mãe</th>
                                <th className="text-white px-2 py-1">Cartão SUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-gray-100 even:bg-white">
                                <td className="p-1">JOAO MOURATO DA CRUZ NETO</td>
                                <td className="p-1">350.000.358.36</td>
                                <td className="p-1">07/05/1990</td>
                                <td className="p-1">Geralda de Fatima Santos</td>
                                <td className="p-1">12345678987</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Container >
    )
}