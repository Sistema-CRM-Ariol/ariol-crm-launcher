"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { fullInputWrapper } from '@/lib'

import { Search01Icon } from 'hugeicons-react'
import { Button, Input } from "@heroui/react"

export const BrandTableHeader = () => {

    const router = useRouter();
    const [searchInput, setSearchInput] = useState('')

    return (
        <>
            <div className='mb-4'>
                <h1>Listado de Marcas</h1>
                <p className='text-sm'>Marcas registradas en el sistema</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <div className='flex w-full'>
                        <Input
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            classNames={fullInputWrapper}
                            placeholder="Buscar marca"
                            size="md"
                            className='max-w-sm w-full'

                        />
                        <Button
                            isIconOnly
                            onPress={() => router.push(`/admin/inventory/brands?search=${searchInput}`)}
                            startContent={<Search01Icon size={16}/>}
                        />
                            
                    </div>
                </div>
            </div>
        </>
    )
}
