"use client";
import { useContext } from "react";
import { ModalContext } from "@/providers/modal";
import { Input } from "../input";
import { createPatient } from "./actions";
import { useActionState } from "react";
import { SubmitButton } from "../submitButton";

export function ModalGlarginaResgister({ onClose }: { onClose?: () => void }) {
  const [state, formAction] = useActionState(createPatient, { error: {} });
  const { hideModal } = useContext(ModalContext);
  function handleHideModal() {
    onClose?.();
    hideModal();
  }
  return (
    <main className="absolute bg-gray-900/80 w-full min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" shadow-lg w-4/5 max-w-2xl rounded-2xl  bg-[var(--primary)] p-4">
          <form className=" flex flex-col p-4 gap-4" action={formAction}>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold text-white">
                Cadastrar paciente
              </h1>
              <Input
                type="text"
                label="Nome"
                placeholder="Insira nome completo"
                showIcon={false}
                name="name"
                error={state.error?.name}
              />

              <Input
                type="text"
                label="CPF"
                placeholder="Insira CPF"
                showIcon={false}
                name="cpf"
                error={state.error?.cpf}
              />
              <Input
                type="date"
                label="Data Nascimento"
                placeholder="Insira data nascimento"
                showIcon={false}
                name="birth"
                error={state.error?.birth}
              />
              <Input
                type="text"
                label="Nome da Mãe"
                placeholder="Insira nome da mãe"
                showIcon={false}
                name="mother"
                error={state.error?.mother}
              />
              <Input
                type="text"
                label="Cartão SUS"
                placeholder="Insira carão do SUS"
                showIcon={false}
                name="sus"
                error={state.error?.sus}
              />
            </div>
            {state.success && (
              <p className="mt-2 font-medium">
                ✅ Paciente cadastrado com sucesso!
              </p>
            )}
            <div className="flex flex-row gap-2 justify-end pt-3">
              <SubmitButton
                text="Cadastrar"
                loadText="Cadastrando...."
                className="flex-1"
              />
              <button
                className="cursor-pointer bg-red-500 p-2 text-white rounded font-semibold hover:bg-red-700 duration-300 flex-1"
                onClick={handleHideModal}
              >
                Fechar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
