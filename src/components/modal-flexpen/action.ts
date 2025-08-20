"use server";

import { normalizeText } from "@/lib/normalize-text";
import { prisma } from "@/lib/prisma";
import { InsertPatientFlexPenSchema } from "@/schemas/insert-patient-flexpen-schema";
import { writeFile } from "fs/promises";
import path from "path";

type PatientFormState = {
  error?: {
    name?: string[];
    cpf?: string[];
    birth?: string[];
    mother?: string[];
    sus?: string[];
    file?: string[];
  };

  success?: boolean;
};

export async function createPatient(
  prevState: PatientFormState,
  formData: FormData
) {
  try {
    const rawData = {
      name: formData.get("name"),
      cpf: formData.get("cpf"),
      mother: formData.get("mother"),
      birth: formData.get("birth"),
      sus: formData.get("sus"),
      file: formData.get("file"),
    };

    const parsed = InsertPatientFlexPenSchema.safeParse(rawData);

    console.log(parsed);
    if (!parsed.success) {
      //criar os logs
      return { error: parsed.error.flatten().fieldErrors };
    }
    const file = formData.get("file") as File | null;
    let savedFilePath: string | null = null;

    if (!file) {
      return { error: { file: ["Deve-se importar o termo"] } };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, file.name);

    await writeFile(filePath, buffer);

    savedFilePath = `/uploads/${file.name}`;

    const { name, cpf, mother, birth, sus } = parsed.data;

    const cpfOnlyNumbers = cpf.replace(/\D/g, "");

    await prisma.patientFlexpen.create({
      data: {
        name: normalizeText(name),
        cpf: cpfOnlyNumbers,
        mother: normalizeText(mother),
        birth: new Date(birth),
        sus: sus ? normalizeText(sus) : null,
        term: savedFilePath,
      },
    });

    return { success: true };
  } catch (error: any) {
    if (error.code === "P2002") {
      const target = error.meta.target as string[];
      if (target?.includes("cpf")) {
        return { error: { cpf: ["CPF já cadastrado."] } };
      }

      if (target?.includes("sus")) {
        return { error: { sus: ["Cartão SUS já cadastrado."] } };
      }
    }

    return { error: { name: ["Erro inesperado, tente novamente."] } };
  }
}

export async function cadastrarPaciente(formData: FormData) {
  // pega o arquivo
  const file = formData.get("file") as File | null;
  let savedFilePath: string | null = null;

  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // cria pasta uploads dentro de public
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, file.name);

    // grava o arquivo no disco
    await writeFile(filePath, buffer);

    // caminho acessível pela web
    savedFilePath = `/uploads/${file.name}`;
  }

  // aqui você salva os dados no banco junto com o caminho do arquivo
  // exemplo usando prisma:
  // await prisma.paciente.create({
  //   data: { nome, cpf, nascimento: new Date(nascimento), mae, sus, foto: savedFilePath }
  // });

  return { success: true, filePath: savedFilePath };
}
