"use server"

import apiDb from "@/lib/apiDb"
import { isAxiosError } from "axios";
import { Brand } from "../interfaces/brand";
import { revalidatePath } from "next/cache";

export const deleteBrand = async ( id:string ) => {
    try {
        
        const { data } = await apiDb.delete<{ message:string, marca: Brand }>(`/brands/${ id }`);

        revalidatePath("/admin/inventory/brands")

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