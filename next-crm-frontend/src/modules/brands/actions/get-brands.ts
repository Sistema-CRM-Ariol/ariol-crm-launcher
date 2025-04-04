"use server"

import apiDb from "@/lib/apiDb";
import { GetBrandsResponse } from "../interfaces/get-brands-response.interface";


export const getBrands = async ( page: number = 1, limit: number = 10, search: string | undefined = undefined ) => {
    try {
        const { data } = await apiDb.get<GetBrandsResponse>('/brands', {
            params: {
                page,
                limit,
                search: search && search
            }
        })
        return data;

    } catch (error) {
        throw error;
    }
    
}