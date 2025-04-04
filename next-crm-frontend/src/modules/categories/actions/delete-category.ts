"use server"

import apiDb from "@/lib/apiDb"
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { Category } from "../interfaces/category";

export const deleteCategory = async ( id:number ) => {
    try {
        
        const { data } = await apiDb.delete<{ message:string, category: Category }>(`/categories/${ id }`);

        revalidatePath("/admin/inventory/categories")

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