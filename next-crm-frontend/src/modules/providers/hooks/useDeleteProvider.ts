"use client"
import { useState } from "react";
import { toast } from "sonner";

import { deleteProvider } from "../actions/delete-provider";



export const useDeleteProvider = (id: number) => {

    const [isLoading, setIsLoading] = useState(false);

    
    const handleDelete = async () => {
        setIsLoading(true);
        
        const { data, error } = await deleteProvider(id);
        
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