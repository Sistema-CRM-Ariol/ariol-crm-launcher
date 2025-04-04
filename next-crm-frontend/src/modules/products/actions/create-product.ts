"use server"

import { handleActionError } from "@/lib";
import apiDb from "@/lib/apiDb";


interface CreateProductOptions {
    name: string;
    description: string;
    serialNumber: string;
    // image: string;
    pricePurchase: number;
    priceSale: number;
    brandId: string;
    providerId: string;
    categoryId: string;
}


export const createProduct = async (product: CreateProductOptions) => {

    try {
        const { data } = await apiDb.post('/products', product);
        
        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }
}