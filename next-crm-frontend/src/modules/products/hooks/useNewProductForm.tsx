"use client"

import { useState } from "react";
import { toast } from "sonner";
import { createProduct } from "@/modules/products";
import { useRouter } from "next/navigation";

export const useNewProductForm = () => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const name = form.elements.namedItem('name') as HTMLInputElement;
        const description = form.elements.namedItem('description') as HTMLInputElement;
        const serialNumber = form.elements.namedItem('serialNumber') as HTMLInputElement;
        const pricePurchase = form.elements.namedItem('pricePurchase') as HTMLInputElement;
        const priceSale = form.elements.namedItem('priceSale') as HTMLInputElement;
        const brandId = form.elements.namedItem('brandId') as HTMLInputElement;
        const providerId = form.elements.namedItem('providerId') as HTMLInputElement;
        const categoryId = form.elements.namedItem('categoryId') as HTMLInputElement;

        const newProduct = {
            name: name.value,
            description: description.value,
            serialNumber: serialNumber.value,
            pricePurchase: +pricePurchase.value,
            priceSale: +priceSale.value,
            brandId: brandId.value,
            providerId: providerId.value,
            categoryId: categoryId.value,
        }


        // TODO: PROCESAR IMAGEN

        const { data, error } = await createProduct(newProduct);

        if (error) {
            toast.error("Ocurrio un error", {
                description: error
            })
            setIsLoading(false);
            return;
        }

        toast.success(data?.message || 'Producto registrado exitosamente');
        setIsLoading(false);
        router.push('/admin/inventory/products');
    };

    return {
        isLoading,
        handleSubmit,
    };
}