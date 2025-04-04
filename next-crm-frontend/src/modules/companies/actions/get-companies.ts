"use server"

import apiDb from "@/lib/apiDb";
import { GetCompaniesResponse } from "../interfaces/get-companies-response.interface";




export const getCompanies = async (page: number = 1, limit: number = 10, search: string | undefined = undefined) => {
    try {
        const { data } = await apiDb.get<GetCompaniesResponse>('/companies', {
            params: {
                page,
                limit,
                search: search && search
            }
        });
        
        return data;

    } catch (error) {
        throw error;
    }
}