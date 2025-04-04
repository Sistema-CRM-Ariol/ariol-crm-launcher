"use client"

import { fullInputWrapper } from '@/lib'
import { useNewProviderForm } from '@/modules/providers';

import { Input } from "@heroui/input";
import { Button } from "@heroui/button"


export const NewProviderForm = () => {

    const { handleSubmit, isLoading } = useNewProviderForm();

    return (
        <section className='pt-8'>
            <form onSubmit={handleSubmit} className="provider__form container">

                <h2>Registra una nueva marca</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-4'>

                    <Input
                        size='sm'
                        name='name'
                        isRequired
                        label="Nombre"
                        classNames={fullInputWrapper}
                        placeholder='Nombre del proveedor'
                    />

                    <Input
                        size='sm'
                        name='phone1'
                        label="Número de teléfono 1"
                        classNames={fullInputWrapper}
                        placeholder='Ingresa un numero de contacto'
                    />


                    <Input
                        size='sm'
                        name='phone2'
                        label="Número de teléfono 2"
                        classNames={fullInputWrapper}
                        placeholder='Ingresa un numero de contacto'
                    />


                    <Input
                        size='sm'
                        name='direction'
                        label="Dirección"
                        classNames={fullInputWrapper}
                        placeholder='Dirección del proveedor'
                    />
                </div>

                <Button
                    type='submit'
                    color='primary'
                    isLoading={isLoading}
                    isDisabled={isLoading}
                >
                    Registrar Proveedor
                </Button>
            </form>
        </section>
    )
}
