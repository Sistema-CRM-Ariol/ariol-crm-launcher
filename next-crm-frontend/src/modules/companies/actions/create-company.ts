"use server"

import { handleActionError } from "@/lib"
import apiDb from "@/lib/apiDb"
import { Company } from "../interfaces/company.interface"
import { revalidatePath } from "next/cache"


export const createCompany = async (name: string, direction: string, description: string) => {
    
    try {

        const { data } = await apiDb.post<{message: string, company: Company}>('/companies', { name, direction, description })

        revalidatePath('/admin/contacts/companies');

        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }

}