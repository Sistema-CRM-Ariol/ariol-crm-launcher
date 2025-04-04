"use server"

import apiDb from "@/lib/apiDb";
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { Provider } from "../interfaces/provider";


export const createProvider = async (formData: FormData) => {

    const provider = {
        name: formData.get('name') as string ,
        phone1: formData.get('phone1') == '' ? undefined : formData.get('phone1') ,
        phone2: formData.get('phone2') == '' ? undefined : formData.get('phone2') ,
        direction: formData.get('direction') == '' ? undefined : formData.get('direction') ,
    }

    try {

        const { data } = await apiDb.post<{ message: string, provider: Provider }>('/providers', provider);

        revalidatePath("/admin/providers")

        return {
            data,
            error: null
        }



    } catch (error) {
        console.log(error);

        if (isAxiosError(error)) {
            return {
                data: null,
                error: error.response?.data.message,
            }
        }

        throw error;

    }
}