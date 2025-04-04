"use server"
import { revalidatePath } from "next/cache";

import apiDb from "@/lib/apiDb";
import { handleActionError } from "@/lib";

import { CreateClientResponse } from "@/modules/clients";


export interface CreateClientOptions {
    name: string;
    position: string;
    departament: string;
    province: string;
    address: string;
    invoice: string;
    nit: string;
    phones: string[];
    emails: string[];
    companyId: string;
}


export const createClient = async (client: CreateClientOptions) => {

    // Filtrar propiedades que son `null` o `undefined`
    const filteredClient = Object.fromEntries(
        Object.entries(client).filter(([_, value]) => value !== null && value !== undefined)
    );

    console.log(filteredClient)


    try {

        const { data } = await apiDb.post<CreateClientResponse>('/clients', filteredClient);

        revalidatePath('/admin/contacts/clients');

        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }

}