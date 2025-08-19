import { z } from "zod";

export const SearchPatientSchema = z.object({
  type: z.enum(["name", "cpf", "mother", "sus"], {
    message: "Selecione um tipo de busca válido",
  }),
  value: z
    .string()
    .min(2, "Digite pelo menos 2 caracteres")
    .max(100, "Valor muito longo"),
});

export type SearchPatientInput = z.infer<typeof SearchPatientSchema>;
