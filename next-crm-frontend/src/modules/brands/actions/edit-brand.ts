"use server"
import apiDb from "@/lib/apiDb";
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { Brand } from "../interfaces/brand";


export const editBrand = async (id: string , name: string, description: string | undefined ) => {
    try {
        const { data } = await apiDb.patch<{ message: string, marca: Brand }>(`/brands/${ id }`, { name, description })

        revalidatePath('/admin/inventory/brands');

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