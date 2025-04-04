"use client"
import { formatDate, tableClassNames } from '@/lib'
import { TableTitle } from '@/modules/shared'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"

export const UserTable = () => {

    return (
        <section className='container pt-8'>
            <Table
                classNames={tableClassNames}
                topContent={
                    <TableTitle 
                        title='Listado de usuarios' 
                        description='Gestiona los usuarios con acceso al sistema' 
                        placeholder='Buscar usuarios'
                    />
                }
                // bottomContent={ <BrandTablePagination totalPages={ meta.lastPage } page={meta.page}/> }
                aria-label="Users table"
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Apellidos</TableColumn>
                    <TableColumn>C.I.</TableColumn>
                    <TableColumn>Correo</TableColumn>
                    <TableColumn>Estado</TableColumn>
                    <TableColumn>F. Creación</TableColumn>
                    <TableColumn>F. Actualización</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>

                <TableBody>
                    {
                        [0,1,2,3,4,5].map(brand => (
                            <TableRow key={brand}>
                                <TableCell>
                                    <p className='line-clamp-1'>ID</p>
                                </TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>
                                    <p className='line-clamp-1'>
                                    Descripcion
                                    </p>
                                </TableCell>
                                <TableCell>asd</TableCell>
                                <TableCell>asd</TableCell>
                                <TableCell>
                                    a
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
