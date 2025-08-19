"use server";
import { normalizeText } from "@/lib/normalize-text";
import { prisma } from "@/lib/prisma";
import { InsertPatientGlarginaSchema } from "@/schemas/Insert-patient-glargina-schema";
import { SearchPatientSchema } from "@/schemas/search-patient-schema";
import { revalidatePath } from "next/cache";

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

  // Atualiza o cache da página após criar
  revalidatePath("/patient");

  return { success: true };
}
