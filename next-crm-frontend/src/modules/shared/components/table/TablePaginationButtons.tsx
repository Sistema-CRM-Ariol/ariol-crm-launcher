"use client"
import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Pagination } from "@heroui/react";


interface Props {
    page: number;
    totalPages: number;
}

export const TablePaginationButtons = ({ page, totalPages }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePage = (newPage: number) => {
        setIsLoading(true);

        const updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set('page', newPage.toString());

        const newPath = `${pathname}?${updatedSearchParams.toString()}`;

        router.push(newPath);

        setIsLoading(false);
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
}
