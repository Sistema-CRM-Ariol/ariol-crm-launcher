"use client"
import { useState } from 'react';

import { toast } from 'sonner';
import { editCategory, type Category } from '@/modules/categories';

export const useEditCategoryForm = (category: Category, onClose: () => void) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const name = form.elements.namedItem('name') as HTMLInputElement;

        if (name.value.trim() === '') {
            toast.warning("Debe agregar un nombre");
            setIsLoading(false);
            return;
        }

        const { data, error } = await editCategory(category.id, name.value );

        if (error) {
            name.value = "";

            toast.error("Ocurrió un error", {
                description: error
            });
            setIsLoading(false);
            return;
        }

        name.value = "";

        toast.success(data?.message);
        setIsLoading(false);

        onClose();
    }

    return {
        isLoading,
        handleSubmit,
    };
}
