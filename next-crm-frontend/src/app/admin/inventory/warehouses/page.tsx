import { Metadata } from "next";
import { NewWarehouseForm, WarehouseTable } from '@/modules/warehouses';

export default function WarehousesPage() {
    return (
        <>
            <NewWarehouseForm/>
            <WarehouseTable/>     

        </>
    );
}

export const metadata: Metadata = {
    title: "Almacenes - Ariol SA",
    description: "Gestion de almacenes para los inventarios"
}