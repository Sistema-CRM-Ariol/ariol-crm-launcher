"use client"
import { useRouter } from 'next/navigation'

import { TableTitle } from '@/modules/shared'

import { Button } from "@heroui/react"
import { Download01Icon, PlusSignIcon } from 'hugeicons-react'

export const ClientTableHeader = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between'>
            <TableTitle
                title='Listado de Clientes'
                description='Gestiona tus clientes y encuentra nuevas oportunidades de venta'
                placeholder='Buscar clientes'
            />
            <div className="flex gap-3">
                <Button
                    onPress={() => router.push('/admin/contacts/clients/new')}
                    endContent={<PlusSignIcon size={18} />}
                    size="md"
                    color='primary'
                >
                    Agregar Cliente
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
