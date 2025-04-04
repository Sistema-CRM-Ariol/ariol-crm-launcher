"use client"
import React from 'react'

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"
import { tableClassNames } from '@/lib'
import { TableTitle } from '@/modules/shared'

export const WarehouseTable = () => {

    return (
        <section className='container pt-8'>
            <Table
                classNames={tableClassNames}
                topContent={
                    <TableTitle 
                        description='Gestiona los almacenes'
                        title='Almacenes'
                        placeholder='Buscar almacen'
                    />
                }
                // bottomContent={<BrandTablePagination totalPages={meta.lastPage} page={meta.page} />}
                aria-label="Warehouses table"
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Dirección</TableColumn>
                    <TableColumn>Descripción</TableColumn>
                    <TableColumn>F. Creación</TableColumn>
                    <TableColumn>F. Actualización</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>

                <TableBody>
                    {
                            [1,2,3,4,5,6].map(brand => (
                            <TableRow key={brand}>
                                <TableCell>
                                    <p className='line-clamp-1'>ID</p>
                                </TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Direccion</TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                        {'Sin descripción'}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                        {'Sin descripción'}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                        {'Sin descripción'}
                                    </p>
                                </TableCell>
                                {/* <TableCell>{formatDate(brand.createdAt)}</TableCell> */}
                                {/* <TableCell>{formatDate(brand.updatedAt)}</TableCell> */}
                                <TableCell>
                                    Actions
                                    {/* <EditBrandModal brand={brand} /> */}
                                    {/* <DeleteBrandModal brand={brand} /> */}
                                </TableCell>
                            </TableRow>

                        ))

                    }

                </TableBody>
            </Table>
        </section>
    )
}
