import { isValidCPF } from "@/lib/isValidCpf";
import { z } from "zod";

export const PatientSchema = z.object({
  name: z.string().min(3, "Nome dever conter pelo menos 3 caracteres"),
  cpf: z.string().refine(isValidCPF, { message: "CPF inválido" }),
  birth: z.string().refine((val) => new Date(val) <= new Date(), {
    message: "Data de nascimento não pode ser no futuro",
  }),
  mother: z.string().min(3, "Nome da mãe deve ter pelo menos 3 caracteres"),
  sus: z.string().optional(),
});

export type PatientSchema = z.infer<typeof PatientSchema>;
