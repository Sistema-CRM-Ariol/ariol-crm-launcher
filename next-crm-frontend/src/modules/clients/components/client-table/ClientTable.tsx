"use client"
import { useRouter } from 'next/navigation';

import { tableClassNames } from '@/lib';
import { TablePaginationButtons } from '@/modules/shared';
import { ClientTableDeleteAction } from './ClientTableDeleteAction';
import { ButtonScheduleAppointment, type GetClientsResponse, ClientTableHeader } from '@/modules/clients';

import { EyeIcon } from 'hugeicons-react';
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react"



interface Props {
    clientResponse: GetClientsResponse;
}

export const ClientTable = ({ clientResponse }: Props) => {

    const router = useRouter();

    const { clients, meta } = clientResponse;

    return (
        <section className='container pt-8'>
            <Table
                aria-label="Tabla para la gestion de clientes"
                topContent={<ClientTableHeader/>}
                bottomContent={ <TablePaginationButtons totalPages={ meta.lastPage } page={meta.page}/> }
                classNames={tableClassNames}
            >
                <TableHeader>
                    <TableColumn>NIT</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Cargo</TableColumn>
                    <TableColumn>Direccion</TableColumn>
                    <TableColumn>Correo</TableColumn>
                    <TableColumn>Telefono</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No se encontradron clientes"}>
                    {
                        clients.map(client => (

                            <TableRow key={client.id} >
                                <TableCell className='max-w-[100px]'>
                                    <p className='line-clamp-1'>
                                        {client.nit}
                                    </p>
                                </TableCell>
                                <TableCell>{client.name}</TableCell>
                                <TableCell>{client.position}</TableCell>
                                <TableCell>{client.address}</TableCell>
                                <TableCell>{client.phones[0] ? client.phones[0] : 'No agregados'}</TableCell>
                                <TableCell>{client.emails[0] ? client.emails[0] : 'No agregados'}</TableCell>
                                <TableCell className='flex'>
                                    <ButtonScheduleAppointment client={ client }/>
                                    <Button isIconOnly size='sm' color='primary' variant='light' startContent={ <EyeIcon size={18}/> } onPress={() => router.push(`/admin/contacts/clients/${ client.id }`) } />
                                    <ClientTableDeleteAction client={ client } />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}
