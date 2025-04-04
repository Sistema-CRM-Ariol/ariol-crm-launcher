"use server"

import apiDb from "@/lib/apiDb"
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";

export const deleteClient = async (id: number | string) => {
    try {
        
        const { data } = await apiDb.delete<{message: string}>(`/clients/${ id }`);

        revalidatePath('/admin/clients')

        return {
            error: null,
            data, 
        };

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