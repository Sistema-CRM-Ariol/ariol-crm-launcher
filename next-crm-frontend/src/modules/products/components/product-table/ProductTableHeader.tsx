import { useRouter } from 'next/navigation'

import { TableTitle } from '@/modules/shared'

import { Button } from "@heroui/button"
import { Download01Icon, PlusSignIcon } from 'hugeicons-react'

export const ProductTableHeader = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between'>
            <TableTitle
                title="Productos"
                placeholder='Buscar producto'
                description='Gestiona los productos de tu empresa'
            />
            <div className="flex gap-3">
                <Button
                    onPress={() => router.push('/admin/inventory/products/new')}
                    endContent={<PlusSignIcon size={18} />}
                    size="md"
                    color='primary'
                >
                    Agregar producto
                </Button>
                <Button
                    onPress={() => router.push('/admin/contacts/clients/new')}
                    endContent={<Download01Icon size={18} />}
                    size="md"
                    className='bg-indigo-500 text-white'
                >
                    Descargar reporte
                </Button>
            </div>
        </div>
    )

}
