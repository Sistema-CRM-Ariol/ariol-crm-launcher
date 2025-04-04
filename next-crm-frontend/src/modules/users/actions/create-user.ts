"use server"

import apiDb from "@/lib/apiDb";
import { UserData } from "../interfaces/user-data";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { handleActionError } from "@/lib";
import { User } from "@/modules/auth/interfaces/user.interface";

export const createUser = async (user: string) => {

    const newUser = JSON.parse(user) as UserData;
    const token = (await cookies()).get('ARIOL_TOKEN')?.value;

    console.log(newUser)

    try {
        const { data } = await apiDb.post<{ user: User, message: string }>('/auth/register', newUser, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        
        revalidatePath('/admin/users/register', 'page');

        return {
            data,
            error: null
        }
        
    } catch (error) {
        return handleActionError(error);
    }
    




}