"use client"
import { useContext, useRef, useState } from "react"
import { ModalContext } from "@/providers/modal"
import { Input } from "../input"

export function ModalFlexpenResgister() {
    const { hideModal } = useContext(ModalContext)

    function handleHideModal() {
        hideModal()
    }

    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const [fileName, setFileName] = useState("Nenhum arquivo selecionado");
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    function handleClick() {
        fileInputRef.current?.click();
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) {
            setFile(null);
            setPreview(null);
            setFileName("Nenhum arquivo selecionado");
            return;
        }

        if (!selectedFile.type.includes("image/jpeg")) {
            alert("Apenas arquivos .jpg são permitidos");
            return;
        }

        setFile(selectedFile);
        setFileName(selectedFile.name);
        setPreview(URL.createObjectURL(selectedFile));
    }

    async function handleSaveRegister() {
        setLoading(true)
        if (!file) return alert("Selecione uma imagem primeiro");

        const formData = new FormData();
        formData.append("file", file); // "file" = nome do campo esperado pela API

        setLoading(true);

        //faz requisição com await

        setLoading(false);
    }

    return (
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

                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            {/* Input real (escondido) */}
                            <input
                                type="file"
                                accept="image/jpeg, image/jpg"
                                onChange={handleFileChange} // este sim seta o preview
                                ref={fileInputRef}
                                className="hidden"
                            />

                            {/* Botão customizado */}
                            <button
                                type="button"
                                onClick={handleClick}
                                className="bg-blue-600 text-white p-2 rounded"
                            >
                                Selecionar imagem JPG
                            </button>

                            {/* Texto do arquivo selecionado */}
                            <span className="text-sm text-gray-600">{fileName}</span>
                        </div>

                        {preview && (
                            <img src={preview} alt="Pré-visualização" className="w-40 rounded" />
                        )}
                    </div>

                </div>
                <div className="flex flex-row gap-2 justify-end">
                    <button
                        disabled={loading}
                        onClick={handleSaveRegister}
                        className="cursor-pointer bg-blue-600 p-2 text-white rounded"
                    >
                        {loading ? "Cadastrando...." : "Cadastrar"}
                    </button>
                    <button className="cursor-pointer bg-red-600 p-2 text-white rounded" onClick={handleHideModal}>Fechar</button>
                </div>
            </div>
        </div>
    )
}
