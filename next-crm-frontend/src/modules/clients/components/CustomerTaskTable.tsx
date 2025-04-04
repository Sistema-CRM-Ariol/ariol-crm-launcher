"use client"
import { tableClassNames } from '@/lib'
import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react"

export const CustomerTaskTable = () => {
    return (
        <div className='customer__task--table'>
            <Table
                topContent={<h2 className='mb-0'>Tareas recientes</h2>}
                aria-label="Tabla de tareas del cliente"
                classNames={tableClassNames}
            >
                <TableHeader>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>F. de finalizacion</TableColumn>
                    <TableColumn>Encargado</TableColumn>
                    <TableColumn>Estado</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No users found"}>
                    {
                        [0, 1, 2, 3, 4, 5].map(task => (

                            <TableRow key={task} >
                                <TableCell>Cotizacion</TableCell>
                                <TableCell>21 de Septiembre 2024</TableCell>
                                <TableCell>Mattias Duarte</TableCell>
                                <TableCell>
                                    <Chip className='text-white' color='success'>Finalizado</Chip>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}
