"use client"
import { useState } from 'react';

import { toast } from 'sonner';
import { editBrand, type Brand } from '@/modules/brands';

export const useEditBrandForm = (brand: Brand, onClose: () => void) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const name = form.elements.namedItem('name') as HTMLInputElement;
        const description = form.elements.namedItem('description') as HTMLInputElement;

        if (name.value.trim() === '') {
            toast.warning("Debe agregar un nombre");
            setIsLoading(false);
            return;
        }

        const { data, error } = await editBrand(brand.id, name.value, description.value);

        if (error) {
            name.value = "";
            description.value = "";

            toast.error("Ocurrió un error", {
                description: error
            });
            setIsLoading(false);
            return;
        }

        name.value = "";
        description.value = "";

        toast.success(data?.message);
        setIsLoading(false);

        onClose();
    }

    return {
        isLoading,
        handleSubmit,
    };
}
