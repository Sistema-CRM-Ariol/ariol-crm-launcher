"use client"

import { useState } from "react";
import { deleteProduct } from "../actions/delete-product";
import { toast } from "sonner";



export const useDeleteProduct = (id: string) => {
    const [isLoading, setIsLoading] = useState(false);


    const handleDelete = async () => {
        setIsLoading(true);

        const { data, error } = await deleteProduct(id);

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
        isLoading,
        handleDelete,
    }

}