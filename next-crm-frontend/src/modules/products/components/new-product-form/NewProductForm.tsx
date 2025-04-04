"use client"
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Dollar01Icon, SecurityValidationIcon, TextIcon } from 'hugeicons-react';

import { fullInputWrapper } from '@/lib';
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Category } from '@/modules/categories';
import { Brand } from '@/modules/brands';
import { useNewProductForm } from '../../hooks/useNewProductForm';
import { Provider } from '@/modules/providers';
import { Select, SelectItem } from "@heroui/react";


interface Props {
    brands: Brand[];
    providers: Provider[]
    categories: Category[];
}

export const NewProductForm = ({ categories, brands, providers }: Props) => {

    const { handleSubmit, isLoading } = useNewProductForm();

    return (
        <section className='pt-8'>
            <form onSubmit={handleSubmit} className='container bg-white p-6 pt-8 pb-10 rounded-sm'>
                <div className="grid grid-cols-2 gap-y-8 gap-4">

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<TextIcon size={20} />}
                        placeholder='Ingresa el nombre del producto'
                        label="Nombre"
                        name='name'
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        size='lg'
                        classNames={fullInputWrapper}
                        startContent={<SecurityValidationIcon size={20} />}
                        placeholder='#ABC-123'
                        
                        label="Numero de Serie"
                        name='serialNumber'
                        labelPlacement='outside'
                    />

                    <Textarea
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<TextIcon size={20} />}
                        placeholder='Agrega una descripción del producto'
                        label="Descripción"
                        name='description'
                        className='w-full col-span-2'
                        labelPlacement='outside'
                    ></Textarea>

                    <Input
                        size='lg'
                        type='number'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Dollar01Icon size={20} />}
                        placeholder='$100.00'
                        label="Precio de Compra"
                        name="pricePurchase"
                        labelPlacement='outside'
                    />
                    <Input
                        size='lg'
                        type='number'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Dollar01Icon size={20} />}
                        placeholder='$100.00'
                        label="Precio de Venta"
                        name="priceSale"
                        labelPlacement='outside'
                    />

                    <Select
                        size='lg'
                        name='categoryId'
                        label="Categorias"
                        labelPlacement='outside'
                        placeholder="Selecciona una categoria"
                        items={categories}
                        listboxProps={{
                            emptyContent: 'No se encontraron categorias.'
                        }}
                    >
                        {(category) => (
                            <SelectItem  value={category.id} key={category.id}>
                                {category.name}
                            </SelectItem>
                        )}

                    </Select>

                    <Select
                        size='lg'
                        label="Marcas"
                        name='brandId'
                        items={brands}
                        labelPlacement='outside'
                        placeholder="Selecciona la marca"
                        listboxProps={{
                            emptyContent: 'No se encontraron marcas.'
                        }}

                    >
                        {(brand) => (
                            <SelectItem key={brand.id} value={brand.id}>
                                {brand.name}
                            </SelectItem>
                        )}

                    </Select>

                    <Select
                        size='lg'
                        label="Proveedor"
                        labelPlacement='outside'
                        placeholder="Selecciona la marca"
                        name='providerId'
                        items={providers}
                        listboxProps={{
                            emptyContent: 'No se encontraron marcas.'
                        }}

                    >
                        {(provider) => (
                            <SelectItem key={provider.id} value={provider.id}>
                                {provider.name}
                            </SelectItem>
                        )}

                    </Select>
                </div>

                <Button
                    color='primary'
                    className='mt-8'
                    type='submit'
                    isLoading={isLoading}
                    isDisabled={isLoading}
                >
                    Registrar Producto
                </Button>
            </form>
        </section>
    )
}
