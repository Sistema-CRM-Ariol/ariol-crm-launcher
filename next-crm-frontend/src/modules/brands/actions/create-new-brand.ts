"use server"

import { isAxiosError } from "axios"

import apiDb from "@/lib/apiDb"
import { CreateNewBrandResponse } from "@/modules/brands"
import { revalidatePath } from "next/cache"


export const createNewBrand = async (name:string, description: string | undefined) => {

    try {
        
        const { data } = await apiDb.post<CreateNewBrandResponse>("/brands", { name, description })

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