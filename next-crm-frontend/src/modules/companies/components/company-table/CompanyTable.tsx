"use client"
import { formatDate, tableClassNames } from '@/lib'

import { GetCompaniesResponse } from '@/modules/companies'
import { TablePaginationButtons, TableTitle } from '@/modules/shared'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react"
import { DeleteCompanyModal } from './DeleteCompanyModal'

interface Props {
    companiesResponse: GetCompaniesResponse;
}


export const CompanyTable = ({ companiesResponse }: Props) => {

    const { companies, meta } = companiesResponse;

    return (
        <section className='pt-8'>
            <Table
                className='container'
                classNames={tableClassNames}
                topContent={<TableTitle title='Gestion de empresas' description='Gestiona las empresas asociadas a tus clientes' placeholder='Buscar empresas'/>}
                bottomContent={<TablePaginationButtons page={meta.page} totalPages={meta.lastPage} />}
                aria-label="Company table"
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
                        companies.map(company => (
                            <TableRow key={company.id}>
                                <TableCell width={200}>
                                    <p className='line-clamp-1'>{company.id}</p>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                        {company.direction}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                        {company.description.trim() === '' ? 'Sin descripción' : company.description}
                                    </p>
                                </TableCell>
                                <TableCell>{formatDate(company.createdAt)}</TableCell>
                                <TableCell>{formatDate(company.updatedAt)}</TableCell>
                                <TableCell>
                                    <DeleteCompanyModal company={company} />
                                </TableCell>
                            </TableRow>
                        ))
                    }


                </TableBody>
            </Table>


        </section>
    )
}
