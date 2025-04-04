"use client"
import { useRouter } from 'next/navigation';

import { TableTitle } from '@/modules/shared';
import { useCartStore } from '../stores/cart.store';
import { formatCurrencyToBolivians, tableClassNames } from '@/lib';
import { Add01Icon, CheckmarkBadge01Icon, Delete01Icon, MinusSignIcon } from 'hugeicons-react';
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";


export const ShoppingCartCard = () => {

    const router = useRouter();
    const { cart, removeProductToCart, incrementQuantity, decrementQuantity } = useCartStore();

    return (
        <div className='bg-white col-span-12'>
            <Table
                classNames={tableClassNames}
                topContent={<TableTitle title='Carrito de compras' description='Gestion de marcar registradas' />}
                aria-label="Shopping cart card table"
                isCompact
                isStriped
            >
                <TableHeader>
                    <TableColumn>Producto</TableColumn>
                    <TableColumn>Precio</TableColumn>
                    <TableColumn>Quantity</TableColumn>
                    <TableColumn>Total</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody
                    isLoading={ cart.length == 0 ? false : true }
                    emptyContent={<p>No se encontro productos</p>}
                >
                    {
                        cart.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <p>{item.name}</p>
                                </TableCell>
                                <TableCell>{formatCurrencyToBolivians(+item.price)}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{+item.price * item.quantity}</TableCell>
                                <TableCell>
                                    
                                    <Button
                                        onClick={() => decrementQuantity(item.id)}
                                        size='sm'
                                        isIconOnly
                                        startContent={<MinusSignIcon size={16} />}
                                        color='primary'
                                        radius='full'
                                        variant='light'
                                    />
                                    <Button
                                        onClick={() => incrementQuantity(item.id)}
                                        size='sm'
                                        isIconOnly
                                        startContent={<Add01Icon size={16} />}
                                        color='primary'
                                        radius='full'
                                        variant='light'
                                    />
                                    <Button
                                        onClick={() => removeProductToCart(item.id)}
                                        size='sm'
                                        isIconOnly
                                        startContent={<Delete01Icon size={16} />}
                                        color='danger'
                                        radius='full'
                                        variant='light'
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
            <div className='flex justify-end bg-white p-8'>
                <Button onPress={() => router.push('/admin/business/ecommerce/checkout')} startContent={<CheckmarkBadge01Icon />} color='primary'>Checkout</Button>
            </div>
        </div>

    )
}
