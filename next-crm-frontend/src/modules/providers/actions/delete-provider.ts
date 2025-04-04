"use server"
import { revalidatePath } from "next/cache";

import { isAxiosError } from "axios";

import apiDb from "@/lib/apiDb"
import { Provider } from "../interfaces/provider";

export const deleteProvider = async ( id: number ) => {
    try {
        
        const { data } = await apiDb.delete<{ message:string, provider: Provider }>(`/providers/${ id }`);

        revalidatePath("/admin/inventory/providers")

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