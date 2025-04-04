"use client"
import { useState } from 'react';

import { toast } from 'sonner';
import { createNewCategory } from '@/modules/categories';

export const useNewCategoryForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const name = form.elements.namedItem('name') as HTMLInputElement;

        if (name.value.trim() === '') {
            toast.warning("Debe agregar un name");
            setIsLoading(false);
            return;
        }

        const { data, error } = await createNewCategory(name.value);

        if (error) {
            name.value = "";
            
            toast.error(error);
            setIsLoading(false);

            return;
        }

        name.value = "";

        toast.success(data?.message || 'Categoria registrada exitosamente');
        setIsLoading(false);
    };

    return {
        isLoading,
        handleSubmit,
    };
};
