"use client"

import { useState } from "react";
import { deleteCompany } from "../actions/delete-company";
import { toast } from "sonner";



export const useDeleteCompany = (id: string) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true);

        const { data, error } = await deleteCompany(id);

        if (error) {
            toast.error("Ocurrio un error", {
                description: error
            })
            setIsLoading(false);
            return;
        }

        toast.success(data?.message);
        setIsLoading(false);
    }

    return {
        handleDelete,
        isLoading
    }


}