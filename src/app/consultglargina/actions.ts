"use server";
import { prisma } from "@/lib/prisma";
import { Patient, PatientFilterSearch } from "@/types/types";

export async function getAllPatients() {
  const patients = await prisma.patientGlargina.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return patients;
}

export async function getPatientsByField(
  field: PatientFilterSearch,
  value: string
): Promise<Patient[]> {
  const whereClause = {
    [field]: {
      contains: value,
      mode: "insensitive",
    },
  };

  const patients = await prisma.patientGlargina.findMany({
    where: whereClause,
    orderBy: { name: "asc" },
  });

  return patients;
}
