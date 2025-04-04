"use client"
import { Button, Input } from "@heroui/react";

import { fullInputWrapper } from '@/lib';

import { useNewCompanyForm } from '@/modules/companies';



export const NewCompanyForm = () => {

    const { handleSubmit, isLoading } = useNewCompanyForm();

    return (
        <section className='pt-8'>
            <div className="container">

                <form onSubmit={handleSubmit} className='company__form'>

                    <div>
                        <h2 className='!mb-0'>Nueva empresa</h2>
                        <p>Registra nuevas empresas asociadas a tus clientes</p>
                    </div>

                    <div className='flex md:flex-row items-center justify-between gap-4'>

                        <Input
                            classNames={fullInputWrapper}
                            label="Nombre"
                            placeholder='Agrega un nombre'
                            size='sm'
                            name='name'
                            isRequired
                        />

                        <Input
                            name='direction'
                            classNames={fullInputWrapper}
                            placeholder='Ingrese la direccion de la empresa'
                            label="Dirección"
                            size='sm'
                        />
                        
                        <Input
                            name='description'
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
                        Registrar Empresa
                    </Button>
                </form>
            </div>

        </section>
    )
}
