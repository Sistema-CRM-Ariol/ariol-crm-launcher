"use server"

import { handleActionError } from "@/lib";
import apiDb from "@/lib/apiDb"


export const getClientsStats = async () => {
    try {
        const { data } = await apiDb.get<{dates: string[], numberOfClients: number[]}>(`/clients/stadistics`);

        return {
            data,
            error: null
        }
        
    } catch (error) {
        return handleActionError(error)
    }

}