'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createPatient(formData: FormData) {
    const name = formData.get('name') as string
    const cpf = formData.get('cpf') as string
    const mother = formData.get('mother') as string
    const birth = formData.get('birth') as string
    const sus = formData.get('sus') as string | null

    await prisma.patient.create({
        data: {
            name,
            cpf,
            mother,
            birth,
            sus: sus || null,
        },
    })

    // Atualiza o cache da página após criar
    revalidatePath('/patient')
}
