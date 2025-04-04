"use client"
import { formatDate, tableClassNames } from '@/lib'
import { GetProvidersResponse, ProviderTableHeader, ProviderTablePagination, DeleteProviderModal, EditProviderModal } from '@/modules/providers'

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"

interface Props {
    getProvidersResponse: GetProvidersResponse,
}

export const ProviderTable = ({ getProvidersResponse }: Props) => {

    const { meta, providers } = getProvidersResponse;
    
    return (
        <section className='container pt-8'>
            <Table
                classNames={tableClassNames}
                topContent={<ProviderTableHeader />}
                bottomContent={ <ProviderTablePagination totalPages={ meta.lastPage } page={meta.page}/> }
                aria-label="Providers table"
                // selectionMode='multiple'
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Teléfono 1</TableColumn>
                    <TableColumn>Teléfono 2</TableColumn>
                    <TableColumn>Dirección</TableColumn>
                    <TableColumn>F. Creación</TableColumn>
                    <TableColumn>F. Actualización</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>

                <TableBody>
                    {
                        providers.map(provider => (
                            <TableRow key={provider.id}>
                                <TableCell width={200}>
                                    <p className='line-clamp-1'>{provider.id}</p>
                                </TableCell>
                                <TableCell>{provider.name}</TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                        {provider.phone1 ? provider.phone1 : 'Sin número'}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                        {provider.phone2 ? provider.phone2 : 'Sin número'}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                        {provider.direction ? provider.direction : 'Sin dirección'}
                                    </p>
                                </TableCell>
                                <TableCell>{formatDate(provider.createdAt)}</TableCell>
                                <TableCell>{formatDate(provider.updatedAt)}</TableCell>
                                <TableCell>
                                    <EditProviderModal provider={provider}/>
                                    <DeleteProviderModal provider={provider}/>
                                    {/* <EditBrandModal brand={ brand }/>
                                    <DeleteBrandModal brand={ brand } /> */}
                                </TableCell>
                            </TableRow>

                        ))

                    }

                </TableBody>
            </Table>
        </section>
    )
}
