"use client"
import React, { useState } from 'react'
import { toast } from 'sonner';

import { createWarehouse } from '@/modules/warehouses';


export const useNewWarehouseForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        
        const name = form.elements.namedItem('name') as HTMLInputElement;
        const direction = form.elements.namedItem('direction') as HTMLInputElement;
        const description = form.elements.namedItem('description') as HTMLInputElement;
        
        if ( name.value.trim() === '') {
            toast.warning("Debe agregar un nombre");
            setIsLoading(false);
            return;
        }

        if ( direction.value.trim() === '') {
            toast.warning("Debe agregar una direccion para el almacén");
            setIsLoading(false);
            return;
        }
        const { data, error } = await createWarehouse(name.value, direction.value, description.value);

        if (error) {
            name.value = "";
            direction.value = "";

            toast.error(error);
            setIsLoading(false);
            return;
        }

        name.value = "";
        direction.value = "";

        toast.success(data?.message || 'Proveedor registrada exitosamente');
        setIsLoading(false);
    };

    return {
        isLoading,
        handleSubmit,
    };
}
