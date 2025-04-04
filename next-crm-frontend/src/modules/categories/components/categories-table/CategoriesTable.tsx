"use client"

import { formatDate, tableClassNames } from '@/lib';


import { CategoriesTablePagination, CategoryTableHeader, DeleteCategoryModal, EditCategoryModal, GetCategoriesResponse } from '@/modules/categories';
import { TableHeader, TableColumn, TableBody, TableRow, TableCell, Table } from "@heroui/react";


interface Props {
    categoriesResponse: GetCategoriesResponse;
}

export const CategoriesTable = ({ categoriesResponse }: Props) => {

    const { categories, meta } = categoriesResponse;
    
    return (
        <section className='container pt-8'>
            <Table
                aria-label="Categories table"
                classNames={tableClassNames}
                topContent={<CategoryTableHeader />}
                bottomContent={ <CategoriesTablePagination totalPages={ meta.lastPage } page={meta.page}/> }
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>F. Creación</TableColumn>
                    <TableColumn>F. Actualización</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>

                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow as='li' key={category.id}>
                                <TableCell width={200}>
                                    <p className='line-clamp-1'>{category.id}</p>
                                </TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{formatDate(category.createdAt)}</TableCell>
                                <TableCell>{formatDate(category.updatedAt)}</TableCell>
                                <TableCell>
                                    <EditCategoryModal category={ category }/>
                                    <DeleteCategoryModal category={ category } />
                                </TableCell>
                            </TableRow>

                        ))

                    }

                </TableBody>
            </Table>
        </section>
    )
}
