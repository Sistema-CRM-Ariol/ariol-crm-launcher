"use client"
import { useRouter } from 'next/navigation'

import { fullInputWrapper } from '@/lib'

import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import { Search01Icon } from 'hugeicons-react'
import { useState } from 'react'

export const ProviderTableHeader = () => {

    const router = useRouter();
    const [search, setSearch] = useState('')

    const handleSearchRedirect = () => {
        console.log(search)
        router.push('/admin/inventory/providers?search=' + search)
    }

    return (
        <>
            <div className='mb-4'>
                <h1>Listado de Proveedores</h1>
                <p className='text-sm'>Proveedores registradas en el sistema</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <div className='flex w-full'>
                        <Input
                            classNames={fullInputWrapper}
                            placeholder="Buscar proveedor"
                            size="md"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            name="search"
                            className='max-w-sm w-full'

                        />
                        <Button
                            isIconOnly
                            type='submit'
                            onClick={() => handleSearchRedirect()}
                            startContent={<Search01Icon size={16}/>}
                        />
                            
                    </div>
                </div>
            </div>
        </>
    )
}
