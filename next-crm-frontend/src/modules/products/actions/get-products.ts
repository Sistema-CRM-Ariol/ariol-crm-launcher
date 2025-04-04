"use server"

import apiDb from "@/lib/apiDb"
import { GetProductsResponse } from "../interfaces/get-products-response.interface";

export const getProducts = async (page: number = 1, limit: number = 10, search: string | undefined = undefined) => {

    try {
        const { data } = await apiDb.get<GetProductsResponse>('/products', {
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