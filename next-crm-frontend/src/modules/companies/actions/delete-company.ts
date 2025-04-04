"use server"

import { handleActionError } from "@/lib";
import apiDb from "@/lib/apiDb"
import { revalidatePath } from "next/cache";


export const deleteCompany = async (id: string) => {
    try {
        
        const { data } = await apiDb.delete<{ message: string }>(`/companies/${ id }`);

        revalidatePath('/admin/contacts/companies');
        
        return {
            data,
            error: null
        }


    } catch (error) {
        return handleActionError(error);
    }
}