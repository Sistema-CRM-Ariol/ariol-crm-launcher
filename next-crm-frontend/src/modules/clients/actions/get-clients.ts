"use server"


import apiDb from "@/lib/apiDb"
import { type GetClientsResponse } from "../interfaces/get-clients-response.interface"

export const getClients = async (page: number = 1, limit: number = 10, search: string | undefined = undefined) => {
    try {
        const { data } = await apiDb.get<GetClientsResponse>('/clients', {
            params: {
                page,
                limit,
                search: search && search
            }
        })
        return data
    } catch (error) {
        throw error;
    }
} 