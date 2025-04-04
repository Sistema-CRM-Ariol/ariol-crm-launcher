"use client"

import React, { useState } from 'react'
import { toast } from 'sonner';
import { createProvider } from '../actions/create-provider';

export const useNewProviderForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const name = form.elements.namedItem('name') as HTMLInputElement;
        const direction = form.elements.namedItem('direction') as HTMLInputElement;
        const phone1 = form.elements.namedItem('phone1') as HTMLInputElement;
        const phone2 = form.elements.namedItem('phone2') as HTMLInputElement;

        const formData = new FormData(form);

        if (name.value.trim() === '') {
            toast.warning("Debe agregar un nombre");
            setIsLoading(false);
            return;
        }

        const { data, error } = await createProvider(formData);

        if (error) {
            name.value = "";
            direction.value = "";
            phone1.value = "";
            phone2.value = "";

            toast.error(error);
            setIsLoading(false);
            return;
        }

        name.value = "";
        direction.value = "";
        phone1.value = "";
        phone2.value = "";

        toast.success(data?.message || 'Proveedor registrada exitosamente');
        setIsLoading(false);
    };

    return {
        isLoading,
        handleSubmit,
    };
}
