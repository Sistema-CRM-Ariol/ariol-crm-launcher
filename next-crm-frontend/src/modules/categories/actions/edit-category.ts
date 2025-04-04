"use server"
import apiDb from "@/lib/apiDb";
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { Category } from "@/modules/categories";


export const editCategory = async (id: number , name: string ) => {
    try {
        const { data } = await apiDb.patch<{ message: string, category: Category }>(`/categories/${ id }`, { name })

        revalidatePath('/admin/inventory/categories');

        return {
            data,
            error: null
        }

    } catch (error) {
        
        console.log(error);
        if( isAxiosError(error) ){
            return {
                error: error.response?.data.message,
                data: null
            }
        }

        throw error;
    }
}