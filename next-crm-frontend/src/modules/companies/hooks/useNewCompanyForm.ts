"use client"
import { useState } from "react";
import { toast } from "sonner";
import { createCompany } from "../actions/create-company";

export const useNewCompanyForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const nombre = form.elements.namedItem('name') as HTMLInputElement;
        const descripcion = form.elements.namedItem('description') as HTMLInputElement;
        const direction = form.elements.namedItem('direction') as HTMLInputElement;

        if (nombre.value.trim() === '') {
            toast.warning("Debe agregar un nombre");
            setIsLoading(false);
            return;
        }

        const { data, error } = await createCompany(nombre.value, descripcion.value, direction.value);

        if (error) {
            nombre.value = "";
            descripcion.value = "";
            
            toast.error(error);
            setIsLoading(false);
            return;
        }

        nombre.value = "";
        descripcion.value = "";
        direction.value = "";

        toast.success(data?.message || 'Marca registrada exitosamente');
        setIsLoading(false);
    };

    return {
        isLoading,
        handleSubmit,
    };
}