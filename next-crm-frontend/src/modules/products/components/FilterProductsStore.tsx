"use client"

import React from 'react'
import { Select, SelectItem } from "@heroui/select"


export const FilterProductsStore = () => {
    return (
        <section className='pt-8'>
            <div className="container bg-white p-8">

                


                <h3 className='text-2xl mb-2 font-semibold'>Filtros</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-start justify-start'>
                    <Select
                        label="Categoria"
                        className="max-w-xs"
                        variant='underlined'
                        labelPlacement='outside'
                    >
                        <SelectItem key='a'>
                            Categoria
                        </SelectItem>
                    </Select>

                    <Select
                        label="Marca"
                        className="max-w-xs"
                        variant='underlined'
                        labelPlacement='outside'
                    >
                        <SelectItem key='a'>
                            Samsung
                        </SelectItem>
                    </Select>

                    <Select
                        label="Categoria"
                        className="max-w-xs"
                        variant='underlined'
                        labelPlacement='outside'
                    >
                        <SelectItem key='a'>
                            Categoria
                        </SelectItem>
                    </Select>

                </div>
            </div>
        </section>
    )
}
