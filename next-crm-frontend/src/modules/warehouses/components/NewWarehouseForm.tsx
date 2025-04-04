"use client"
import { fullInputWrapper } from "@/lib";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useNewWarehouseForm } from "@/modules/warehouses";

export const NewWarehouseForm = () => {
    const { handleSubmit, isLoading } = useNewWarehouseForm();

    return (
        <section className="pt-8">

            <form onSubmit={handleSubmit} className='container warehouse__form'>

                <h2>Registra un nuevo almacén</h2>
                <div className='flex md:flex-row items-center justify-between gap-4'>

                    <Input
                        classNames={fullInputWrapper}
                        label="Nombre"
                        placeholder='Agrega un nombre'
                        size='sm'
                        name='nombre'
                        isRequired
                    />

                    <Input
                        classNames={fullInputWrapper}
                        label="Dirección"
                        placeholder='Agrega un nombre'
                        size='sm'
                        name='location'
                        isRequired
                    />

                    <Input
                        name='descripcion'
                        classNames={fullInputWrapper}
                        placeholder='Ingrese una pequeña descripción'
                        label="Descipcion"
                        size='sm'
                    />
                </div>

                <Button
                    type='submit'
                    color='primary'
                    isLoading={isLoading}
                    isDisabled={isLoading}
                >
                    Registrar Almacén
                </Button>
            </form>
        </section>

    )
}
