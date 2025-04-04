"use client"
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from "@heroui/react";

interface Props {
    page: number;
    totalPages: number;
}

export const ProviderTablePagination = ({ page, totalPages }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePage = (newPage: number) => {
        setIsLoading(true); // Inicia la carga al cambiar de página

        // Crea una copia de los parámetros de consulta para actualizar el valor de `page`
        const updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set('page', newPage.toString());

        // Reconstruye la URL con los parámetros actualizados
        const newPath = `${pathname}?${updatedSearchParams.toString()}`;

        router.push(newPath);
        setIsLoading(false); // Detiene la carga después de la actualización
    };

    return (
        <div className="py-2 px-2 flex justify-between items-center">
            <Pagination
                showControls
                classNames={{
                    cursor: "bg-primary-500 text-background",
                }}
                color="default"
                isDisabled={isLoading}
                page={page}
                total={totalPages}
                variant="light"
                onChange={handleChangePage}
            />
        </div>
    );
};
