"use server";
import { normalizeText } from "@/lib/normalize-text";
import { prisma } from "@/lib/prisma";
import { InsertPatientGlarginaSchema } from "@/schemas/Insert-patient-glargina-schema";

type PatientFormState = {
  error?: {
    name?: string[];
    cpf?: string[];
    birth?: string[];
    mother?: string[];
    sus?: string[];
  };
  success?: boolean;
};

export async function createPatient(
  prevState: PatientFormState,
  formData: FormData
): Promise<PatientFormState> {
  try {
    // pega os dados do formulário
    const rawData = {
      name: formData.get("name"),
      cpf: formData.get("cpf"),
      mother: formData.get("mother"),
      birth: formData.get("birth"),
      sus: formData.get("sus"),
    };

    const parsed = InsertPatientGlarginaSchema.safeParse(rawData);

    if (!parsed.success) {
      //criar logs
      return { error: parsed.error.flatten().fieldErrors };
    }

    const { name, cpf, mother, birth, sus } = parsed.data;

    const cpfOnlyNumbers = cpf.replace(/\D/g, "");

    await prisma.patient.create({
      data: {
        name: normalizeText(name),
        cpf: cpfOnlyNumbers,
        mother: normalizeText(mother),
        birth: new Date(birth),
        sus: sus ? normalizeText(sus) : null,
      },
    });

    return { success: true };

  } catch (error: any) {
    if (error.code === "P2002") {
      const target = error.meta.target as string[]
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
