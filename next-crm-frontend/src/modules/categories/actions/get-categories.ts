"use server"

import apiDb from "@/lib/apiDb";
import { GetCategoriesResponse } from "@/modules/categories";


export const getCategories = async ( page: number = 1, limit: number = 10, search: string | undefined = undefined ) => {
    try {
        const { data } = await apiDb.get<GetCategoriesResponse>('/categories', {
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
