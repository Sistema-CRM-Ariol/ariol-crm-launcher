"use server"
import { revalidatePath } from "next/cache"

import { isAxiosError } from "axios"

import apiDb from "@/lib/apiDb"
import { Category } from "@/modules/categories"


export const createNewCategory = async (name:string) => {

    try {
        
        const { data } = await apiDb.post<{ message: string, category: Category }>("/categories", { name })

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