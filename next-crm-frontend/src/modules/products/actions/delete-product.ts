"use server"

import { handleActionError } from "@/lib";
import apiDb from "@/lib/apiDb"
import { revalidatePath } from "next/cache";


export const deleteProduct = async (id: string) => {
    
    try {
        const { data } = await apiDb.delete(`/products/${ id }`);
        
        revalidatePath('/admin/inventory/products');
        
        return {
            data,
            error: null
        }
    } catch (error) {
        return handleActionError(error)
    }

}