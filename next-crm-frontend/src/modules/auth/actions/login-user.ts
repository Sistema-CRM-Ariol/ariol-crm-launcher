"use server"

import apiDb from "@/lib/apiDb"
import { LoginUserResponse } from "../interfaces/login-user-response.interface";
import { isAxiosError } from "axios";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";


export const loginUser = async (email: string, password: string) => {
    
    const cookiesStore = await cookies();

    try {
        const { data } = await apiDb.post<LoginUserResponse>('/auth/login', { email, password });
        
        cookiesStore.set('ARIOL_USER', JSON.stringify(data.user))
        cookiesStore.set('ARIOL_TOKEN', data.token);
        
        revalidatePath('/auth', 'layout');


        return {
            data,
            error: null
        }


    } catch (error) {
        
        if( isAxiosError(error) ){
            console.log(error.response?.data)
            return {
                data: null,
                error: error.response?.data.message
            }
        }

        console.log(error)
        return {
            data: null,
            error: "Revise los logs del sistema"
        }

    }


}