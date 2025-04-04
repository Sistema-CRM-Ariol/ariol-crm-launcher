"use client"
import { Pagination } from "@heroui/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
    page:  number;
    totalPages: number;
}

export const ClientTablePagination = ({ page, totalPages }: Props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePage = (page: number) => {
        setIsLoading(true);
        router.push(`/admin/clients/page/${ page }`);
        setIsLoading(false);
    }

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
