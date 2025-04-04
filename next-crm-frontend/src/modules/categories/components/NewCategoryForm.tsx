"use client"

import { fullInputWrapper } from '@/lib';
import { Button, Input } from "@heroui/react";
import { useNewCategoryForm } from '@/modules/categories';

export const NewCategoryForm = () => {
    const { handleSubmit, isLoading } = useNewCategoryForm();


    return (
        <form onSubmit={handleSubmit} className='category__form'>

            <h2>Registra una nueva categoria</h2>
            <div className='flex md:flex-row items-center justify-between gap-4'>

                <Input
                    classNames={fullInputWrapper}
                    label="Nombre"
                    placeholder='Nombre de la categoria'
                    size='sm'
                    name='name'
                    isRequired
                />

            </div>

            <Button
                type='submit'
                color='primary'
                isLoading={isLoading}
                isDisabled={isLoading}
            >
                Registrar Categoria
            </Button>
        </form>

    )
}
