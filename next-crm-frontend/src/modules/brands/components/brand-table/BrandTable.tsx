"use client"

import { formatDate, tableClassNames } from '@/lib';
import { GetBrandsResponse, EditBrandModal, DeleteBrandModal} from '@/modules/brands';
import { TablePaginationButtons, TableTitle } from '@/modules/shared';

import { TableHeader, TableColumn, TableBody, TableRow, TableCell, Table } from "@heroui/react";


interface Props {
    getBrandsResponse: GetBrandsResponse;
}

export const BrandTable = ({ getBrandsResponse }: Props) => {

    const { brands, meta } = getBrandsResponse;
    
    return (
        <section className='container pt-8'>
            <Table
                classNames={tableClassNames}
                topContent={<TableTitle title='Listado de Marcas' description='Gestion de marcar registradas' placeholder='Buscar marca'/>}
                bottomContent={ <TablePaginationButtons totalPages={ meta.lastPage } page={meta.page}/> }
                aria-label="Brand table"
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Descripción</TableColumn>
                    <TableColumn>F. Creación</TableColumn>
                    <TableColumn>F. Actualización</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>

                <TableBody>
                    {
                        brands.map(brand => (
                            <TableRow key={brand.id}>
                                <TableCell width={100}>
                                    <p className='line-clamp-1'>{brand.id}</p>
                                </TableCell>
                                <TableCell>{brand.name}</TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>{brand.description ? brand.description : 'Sin descripción'}</p>
                                </TableCell>
                                <TableCell>{formatDate(brand.createdAt)}</TableCell>
                                <TableCell>{formatDate(brand.updatedAt)}</TableCell>
                                <TableCell>
                                    <EditBrandModal brand={ brand }/>
                                    <DeleteBrandModal brand={ brand } />
                                </TableCell>
                            </TableRow>

                        ))

                    }

                </TableBody>
            </Table>
        </section>
    )
}
