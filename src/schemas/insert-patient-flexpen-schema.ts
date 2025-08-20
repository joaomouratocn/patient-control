import { isValidCPF } from "@/lib/isValidCpf";
import { z } from "zod";

export const InsertPatientFlexPenSchema = z.object({
  name: z.string().min(3, "Nome dever conter pelo menos 3 caracteres"),
  cpf: z.string().refine(isValidCPF, { message: "CPF inválido" }),
  birth: z.string().refine((val) => new Date(val) <= new Date(), {
    message: "Data de nascimento não pode ser no futuro",
  }),
  mother: z.string().min(3, "Nome da mãe deve ter pelo menos 3 caracteres"),
  sus: z.string().optional(),
  file: z
    .instanceof(File, { message: "Arquivo é obrigatório" })
    .refine((file) => file.size > 0, { message: "Arquivo vazio" })
    .refine((file) => file.size <= 2 * 1024 * 1024, { message: "Máx. 2MB" })
    .refine(
      (file) => ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      { message: "Somente JPG ou PNG" }
    ),
});

export type InsertPatientFlexPenData = z.infer<
  typeof InsertPatientFlexPenSchema
>;
