export type Patient = {
  id: string;
  name: string;
  cpf: string;
  mother: string;
  birth: Date;
  sus?: string | null; // opcional
};

export type PatientFilterSearch = "name" | "cpf" | "mother" | "sus";
