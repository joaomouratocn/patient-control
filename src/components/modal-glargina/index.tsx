"use client"
import { useContext } from "react"
import { ModalContext } from "@/providers/modal"
import { Input } from "../input"

export function ModalGlarginaResgister() {
    const { hideModal } = useContext(ModalContext)
    function handleHideModal() {
        hideModal()
    }
    return (
        <main className="absolute bg-gray-900/80 w-full min-h-screen">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className=" bg-white shadow-lg w-4/5 max-w-2xl rounded">
                    <div className=" flex flex-col p-4 gap-4 bg-blue-300">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-bold text-white">Cadastrar paciente</h1>
                            <Input
                                type="text"
                                label="Nome"
                                placeholder="Insira nome completo"
                                showIcon={false}
                            />

                            <Input
                                type="number"
                                label="CPF"
                                placeholder="Insira CPF"
                                showIcon={false}
                            />
                            <Input
                                type="text"
                                label="Data Nascimento"
                                placeholder="Insira data nascimento"
                                showIcon={false}
                            />
                            <Input
                                type="text"
                                label="Nome da Mãe"
                                placeholder="Insira nome da mãe"
                                showIcon={false}
                            />
                            <Input
                                type="text"
                                label="Cartão SUS"
                                placeholder="Insira carão do SUS"
                                showIcon={false}
                            />

                        </div>
                        <div className="flex flex-row gap-2 justify-end">
                            <button className="cursor-pointer bg-blue-600 p-2 text-white rounded" onClick={handleHideModal}>Salvar</button>
                            <button className="cursor-pointer bg-red-600 p-2 text-white rounded" onClick={handleHideModal}>Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
