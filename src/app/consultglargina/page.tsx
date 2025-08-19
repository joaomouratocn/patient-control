"use client";
import { Container } from "@/components/container";
import { ModalGlarginaResgister } from "@/components/modal-glargina";
import { ModalContext } from "@/providers/modal";
import { useContext, useEffect, useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { getAllPatients, getPatientsByField } from "./actions";
import { formatCPF } from "@/lib/formatCpf";
import { Patient, PatientFilterSearch } from "@/types/types";
import { SubmitButton } from "@/components/submitButton";
import { FiLoader } from "react-icons/fi";
import { normalizeText } from "@/lib/normalize-text";

export default function ConsultGlargina() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [dataTable, setDataTable] = useState(false);
  const [searchType, setSearchType] = useState<PatientFilterSearch>("name");
  const [searchValue, setSearchValue] = useState("");
  const { showModal } = useContext(ModalContext);

  function handleOpenModal() {
    showModal(<ModalGlarginaResgister onClose={() => fetchPatients(true)} />);
  }

  async function fetchPatients(all?: boolean) {
    try {
      setDataTable(true);
      let data: Patient[] = [];
      if (all) {
        data = await getAllPatients();
      } else {
        if (!searchValue) {
          alert("Digite um valor para a busca");
          return;
        }

        let searchNormalized = ""

        if (searchType === "cpf") {
          searchNormalized = searchValue.replace(/\D/g, "")
        } else {
          searchNormalized = normalizeText(searchValue)
        }

        data = await getPatientsByField(
          searchType,
          searchNormalized
        );
      }
      setPatients(data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    } finally {
      setDataTable(false);
    }
  }

  useEffect(() => {
    fetchPatients(true);
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-3.5 px-2">
        <h1 className="text-xl text-center font-bold text-white my-6 sm:text-2xl">
          PACIENTES QUE RETIRAM GLARGINA ALTO CUSTO
        </h1>
        <div className="w-full gap-3 flex flex-col md:flex-row md:justify-center">
          <form
            className="flex flex-col flex-1 gap-3 md:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              fetchPatients(false);
            }}
          >
            <div className="flex flex-col justify-end flex-1">
              <label className="text-white font-medium">Tipo de busca:</label>
              <select
                id="unit"
                value={searchType}
                onChange={(e) =>
                  setSearchType(e.target.value as PatientFilterSearch)
                }
                className="rounded p-2.5 bg-[var(--bg-inputs)] text-center text-[var(--text-input)] justify-end items-center"
              >
                <option value="name">NOME</option>
                <option value="cpf">CPF</option>
                <option value="sus">SUS</option>
                <option value="mother">NOME DA MÃE</option>
              </select>
            </div>

            <div className="flex flex-col justify-end flex-1">
              <label className="text-white font-medium">
                Dados para busca:
              </label>
              <input
                type="text"
                placeholder="Insira os dados"
                className="bg-[var(--bg-inputs)] p-2 rounded"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>

            <SubmitButton
              text="Buscar"
              loadText="Buscando...."
              className="md:mt-[36px] flex-1"
            />
          </form>
          <button
            onClick={handleOpenModal}
            className="flex gap-1 bg-[var(--accent-orange)] hover:bg-[var(--accent-orange-hover)] duration-300 p-2 rounded text-white font-bold items-center justify-center md:mt-[36px]"
          >
            Adicionar
            <IoPersonAddOutline size={24} />
          </button>
        </div>

        {dataTable && (
          <div className="flex flex-col items-center mt-6">
            <FiLoader size={42} color="#FFF" className="animate-spin" />
            <p className="font-bold text-2xl text-white">
              Carregando dados.....
            </p>
          </div>
        )}

        {patients.length === 0 && dataTable === false && (
          <p className="font-bold text-2xl text-white mt-6">
            Sem dados no filtro
          </p>
        )}

        {patients.length > 0 && (
          <div className=" overflow-x-auto w-full">
            <table className="min-w-full table-auto border-collapse">
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
                {patients.map((p) => (
                  <tr className="odd:bg-gray-300 even:bg-white" key={p.id}>
                    <td className="p-1">{p.name}</td>
                    <td className="p-1">{formatCPF(p.cpf)}</td>
                    <td className="p-1">
                      {new Date(p.birth).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="p-1">{p.mother}</td>
                    <td className="p-1">{p.sus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Container>
  );
}
