"use server"

import apiDb from "@/lib/apiDb";
import { Client } from "../interfaces/client";
import { handleActionError } from "@/lib";


export const getClientById = async (id: string) => {
    try {
        
        const { data } = await apiDb.get<{ client: Client}>(`/clients/${id}`);
        
        return {
            data: data.client,
            error: null,
        }

    } catch (error) {
        return handleActionError(error);
    }


}