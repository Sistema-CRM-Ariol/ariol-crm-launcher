"use server"

import apiDb from "@/lib/apiDb"
import { GetProvidersResponse } from "@/modules/providers";


export const getProviders = async (page: number = 1, limit: number = 10, search: string | undefined = undefined ) => {


    try {
        
        const { data } = await apiDb.get<GetProvidersResponse>("/providers",{
            params: {
                page,
                limit,
                search
            }
        });

        return data

    } catch (error) {
        
        console.log(error)

        throw error

    }

}