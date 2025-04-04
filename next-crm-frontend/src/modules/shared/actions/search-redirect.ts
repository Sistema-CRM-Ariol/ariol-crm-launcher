"use server"

import { redirect } from "next/navigation"

export const searchRedirect = async (formData: FormData) => {

    const search = formData.get('search');

    redirect(`/admin/inventory/providers/search/${search}`)

}