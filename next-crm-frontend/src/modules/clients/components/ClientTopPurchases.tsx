import { Button, Divider, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { InformationCircleIcon } from 'hugeicons-react';


export const ClientTopPurchases = () => {

    return (
        <div className='col-span-6 bg-white p-8 rounded-md'>
            <h2>Productos mas comprados</h2>
            <Divider className='mb-4' />
            <ul className='space-y-5'>
                {
                    purchases.map(purchase => (
                        <li key={purchase.productName} className='flex justify-between'>
                            <p className='text-black text-lg flex flex-col'>
                                <span className='text-gray-500 text-base'>Vendido ultima vez: {purchase.lastPurchaseDate}</span>
                                {purchase.productName}
                            </p>
                            <div className='flex items-center'>
                                <p>{purchase.purchasePercentage}%</p>
                                <Popover placement="right">
                                    <PopoverTrigger>
                                        <Button isIconOnly size='sm' variant='light' radius='full' startContent={ <InformationCircleIcon size={16}/> } />
                                    </PopoverTrigger>
                                    <PopoverContent className='max-w-[200px]'>
                                        <p>Porcentaje que representa la frecuencia de compra de este producto en relación con el total de compras realizadas por el cliente.</p>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </li>
                    ))
                }

            </ul>

        </div>
    )
}

type Purchase = {
    productName: string;
    lastPurchaseDate: string;
    purchasePercentage: number;
};

const purchases: Purchase[] = [
    {
        productName: "Cheeseburger",
        lastPurchaseDate: "2024-11-20",
        purchasePercentage: 35.6,
    },
    {
        productName: "Fries",
        lastPurchaseDate: "2024-11-22",
        purchasePercentage: 20.8,
    },
    {
        productName: "Soft Drink",
        lastPurchaseDate: "2024-11-25",
        purchasePercentage: 15.4,
    },
    {
        productName: "Chicken Nuggets",
        lastPurchaseDate: "2024-11-23",
        purchasePercentage: 12.3,
    },
    {
        productName: "Salad",
        lastPurchaseDate: "2024-11-18",
        purchasePercentage: 10.9,
    },
];