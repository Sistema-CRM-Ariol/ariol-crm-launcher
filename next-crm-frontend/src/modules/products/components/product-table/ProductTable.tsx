"use client"
import Link from 'next/link';
import Image from 'next/image';
import NotImageFound from '@/assets/images/not-image.jpg'

import { formatDate, tableClassNames, formatCurrencyToBolivians } from '@/lib';

import { TablePaginationButtons } from '@/modules/shared';
import { DeleteProductModal, GetProductsResponse } from '@/modules/products'

import { EyeIcon } from 'hugeicons-react';
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { ProductTableHeader } from './ProductTableHeader';


interface Props {
    productsResponse: GetProductsResponse;
}

export const ProductTable = ({ productsResponse }: Props) => {

    const { meta, products } = productsResponse

    return (
        <section className='container pt-8'>
            <Table
                classNames={tableClassNames}
                topContent={<ProductTableHeader />}
                bottomContent={<TablePaginationButtons totalPages={meta.lastPage} page={meta.page} />}
                aria-label="Brand table"
            >
                <TableHeader>
                    <TableColumn>Nro de Serie</TableColumn>
                    <TableColumn>Imagen</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Precio de Compra</TableColumn>
                    <TableColumn>Precio de Venta</TableColumn>
                    <TableColumn>F. Creación</TableColumn>
                    <TableColumn>F. Actualización</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>

                <TableBody>
                    {
                        products.map(product => (
                            <TableRow key={product.id}>
                                <TableCell>{product.serialNumber}</TableCell>
                                <TableCell>
                                    <div className='rounded-full object-coverh-12 w-12 flex'>

                                        <Image
                                            src={NotImageFound}
                                            width={45}
                                            height={45}
                                            alt={product.name}
                                            className='rounded-full object-cover'
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{formatCurrencyToBolivians(product.pricePurchase)}</TableCell>
                                <TableCell>{formatCurrencyToBolivians(product.priceSale)}</TableCell>
                                <TableCell>{formatDate(product.createdAt)}</TableCell>
                                <TableCell>{formatDate(product.updatedAt)}</TableCell>
                                <TableCell>
                                    <Link href={`/admin/inventory/products/${product.slug}`}>
                                        <Button
                                            isIconOnly
                                            startContent={<EyeIcon size={18} />}
                                            color='primary'
                                            variant='light'
                                            size='sm'
                                        />
                                    </Link>
                                    <DeleteProductModal product={product} />
                                </TableCell>
                            </TableRow>

                        ))

                    }

                </TableBody>
            </Table>
        </section>
    )
}
