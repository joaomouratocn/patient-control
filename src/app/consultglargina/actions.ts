"use server";
import { prisma } from "@/lib/prisma";

// Server Action para buscar todos os pacientes
export async function getPatientsByName(name: string) {
  const patients = await prisma.patient.findMany({
    where: {
      name: name,
    },
    orderBy: {
      name: "asc", // opcional: ordena por nome
    },
  });

  return patients;
}

export async function getPatients() {
  const patients = await prisma.patient.findMany({
    orderBy: {
      name: "asc", // opcional: ordena por nome
    },
  });

  return patients;
}
