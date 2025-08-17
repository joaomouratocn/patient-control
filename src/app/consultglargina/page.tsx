"use client"
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { ModalGlarginaResgister } from "@/components/modal-glargina";
import { ModalContext } from "@/providers/modal"
import { useContext } from "react";
import { IoPersonAddOutline } from "react-icons/io5";

export default function ConsultGlargina() {
    const { showModal } = useContext(ModalContext)

    function handleOpenModal() {
        showModal(<ModalGlarginaResgister />)
    }

    return (
        <Container>
            <div className="flex flex-col items-center gap-3.5">
                <div className="flex flex-row justify-between w-full max-w-7xl items-center">
                    <h1 className="text-2xl font-bold text-white my-6 mt-">PACIENTES QUE PEGAM GLARGINA NO ALTO CUSTO</h1>
                    <div className="flex flex-row items-center bg-[var(--accent-orange)] px-2 py-1 rounded font-bold">
                        <button className="bg-[var(--accent-orange)] text-white flex flex-row gap-2 items-center cursor-pointer p-2 justify-center" onClick={handleOpenModal}>
                            Adicionar Paciente
                            <IoPersonAddOutline size={24} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row w-full max-w-[1000px] gap-3 items-center mb-2">
                    <Input
                        type="text"
                        label="Tipo de busca"
                        placeholder="Nome"
                        showIcon={false}
                    />

                    <Input
                        type="text"
                        label="Insira o que deseja procurar"
                        placeholder="Digite os dados"
                        showIcon={false}
                    />
                    <Button text="Buscar" className="mt-6 bg-[var(--accent-green)]" />
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
                                <td className="p-1">000.000.000.00</td>
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