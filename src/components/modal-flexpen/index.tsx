"use client";
import { useActionState, useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "@/providers/modal";
import { Input } from "../input";
import { LuFileSearch2 } from "react-icons/lu";
import { SubmitButton } from "../submitButton";
import { createPatient } from "./action";

export function ModalFlexpenResgister() {
  const { hideModal } = useContext(ModalContext);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("Nenhum arquivo");
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [state, formAction] = useActionState(createPatient, { error: {} });

  useEffect(() => {
    if (state.success) {
      setFile(null);
      setFileName("nenhum arquivo");
      setPreview(null)

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [state.success]);

  function handleHideModal() {
    hideModal();
  }

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

  return (
    <form
      className="bg-blue-400 shadow-lg w-4/5 max-w-2xl rounded-2xl p-4"
      action={formAction}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-white font-bold text-2xl">Cadastrar paciente</h1>
        <Input
          type="text"
          name="name"
          label="Nome"
          showIcon={false}
          placeholder="Insira nome do paciente"
          error={state.error?.name}
        />
        <Input
          type="text"
          name="cpf"
          label="CPF"
          showIcon={false}
          placeholder="Insira CPF paciente"
          error={state.error?.cpf}
        />
        <Input
          type="date"
          name="birth"
          label="Data nascimento"
          showIcon={false}
          placeholder="Data de nascimento"
          error={state.error?.birth}
        />
        <Input
          type="text"
          name="mother"
          label="Nome da mãe"
          showIcon={false}
          placeholder="Insira nome da mãe do paciente"
          error={state.error?.mother}
        />
        <Input
          type="text"
          name="sus"
          label="SUS"
          showIcon={false}
          placeholder="Insira numero do SUS do paciente"
          error={state.error?.sus}
        />
        <div className="flex flex-row items-center gap-2">
          <input
            type="file"
            name="file"
            accept="image/jpeg, image/jpg"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleClick}
            className="flex flex-row gap-1 px-2 py-1 rounded text-white cursor-pointer bg-[var(--accent-orange)] hover:bg-[var(--accent-orange-hover)] duration-300"
          >
            <LuFileSearch2 size={24} />
            Procurar
          </button>
          <span className="text-white">{fileName}</span>
          {preview && (
            <img
              src={preview}
              alt="Pré-visualização"
              className="w-40 rounded"
            />
          )}
          {state.errors?.file && (
            <p className="text-red-500">{state.errors.file}</p>
          )}
        </div>
        {state.success && (
          <p className="mt-2 font-medium">
            ✅ Paciente cadastrado com sucesso!
          </p>
        )}
        <div className="flex flex-row gap-1.5">
          <SubmitButton
            loadText="Salvando...."
            text="Salvar"
            className="flex-1"
          />
          <button
            className="cursor-pointer bg-red-500 p-2 text-white rounded font-semibold hover:bg-red-700 duration-300 flex-1"
            onClick={handleHideModal}
          >
            Fechar
          </button>
        </div>
      </div>
    </form>
  );
}
