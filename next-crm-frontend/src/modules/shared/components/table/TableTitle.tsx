"use client"
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { fullInputWrapper } from '@/lib'

import { Search01Icon } from 'hugeicons-react'
import { Button, Input } from "@heroui/react"

interface Props {
    title: string;
    description: string;
    placeholder?: string;
}


export const TableTitle = ({ description, placeholder, title }: Props) => {

    const router = useRouter();
    const pathname = usePathname();
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = () => {
        router.push(pathname + '?search=' + searchInput);
    }


    return (
        <div className='w-full'>
            <div className='mb-4'>
                <h1>{title}</h1>
                <p className='text-sm'>{description}</p>
            </div>
            {
                placeholder
                && (

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between gap-3 items-end">
                            <div className='flex w-full'>
                                <Input
                                    value={searchInput}
                                    onChange={e => setSearchInput(e.target.value)}
                                    classNames={fullInputWrapper}
                                    placeholder={placeholder}
                                    size="md"
                                    className='max-w-sm w-full'

                                />

                                <Button
                                    isIconOnly
                                    onPress={handleSearch}
                                    startContent={<Search01Icon size={16} />}
                                />

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
