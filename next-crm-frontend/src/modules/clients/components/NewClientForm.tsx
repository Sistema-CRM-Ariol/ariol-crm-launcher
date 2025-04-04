"use client"
import React, { useState } from 'react'

import { fullInputWrapper } from '@/lib'

import { Button, Input, Select, SelectItem } from "@heroui/react"
import { Delete01Icon, Gps01Icon, IdentificationIcon, Invoice01Icon, Mail01Icon, SmartPhone01Icon, UserIcon } from 'hugeicons-react'
import { useRouter } from 'next/navigation'
import { Company } from '@/modules/companies'
import { createClient } from '../actions/create-client'
import { toast } from 'sonner'


interface Props {
    companies: Company[]
}

export const NewClientForm = ({ companies }: Props) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [emails, setEmails] = useState<string[]>(['']);
    const [phones, setPhones] = useState<string[]>(['']);

    const handleAddField = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        setter(prev => [...prev, '']);
    };

    const handleRemoveField = (index: number, setter: React.Dispatch<React.SetStateAction<string[]>>, values: string[]) => {
        setter(prev => prev.filter((_, i) => i !== index));
    };

    const handleChangeField = (index: number, value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        setter(prev => {
            const newValues = [...prev];
            newValues[index] = value;
            return newValues;
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const { clientName, position, departament, province, address, invoice, nit, companyId } = e.target as HTMLFormElement;

        const newClient = {
            name: clientName.value,
            position: position.value,
            departament: departament.value,
            province: province.value,
            address: address.value,
            invoice: invoice.value,
            nit: nit.value,
            phones,
            emails,
            companyId: companyId.value.trim() === '' ? null : companyId.value
        }

        const { error, data } = await createClient(newClient);

        if (error) {
            toast.error("Ocurrio un error", {
                description: error
            });
            setIsLoading(false);
            return;
        }

        toast.success("Cliente registrado", {
            description: data?.message
        })

        setIsLoading(false);
        router.push('/admin/contacts/clients');

    }

    return (
        <section className='pt-8'>
            <form onSubmit={handleSubmit} className='container bg-white p-6 pt-8 pb-10 rounded-sm'>
                <div className="grid grid-cols-2 gap-y-8 gap-4">

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<UserIcon size={20} />}
                        placeholder='Ingresa un nombre'
                        label="Nombre"
                        name='clientName'
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        size='lg'
                        classNames={fullInputWrapper}
                        startContent={<IdentificationIcon size={20} />}
                        placeholder='Ingresa un Cargo'
                        label="Cargo"
                        name='position'
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa un departamento del pais'
                        label="Departamento"
                        name='departament'
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa la provincia'
                        label="Provincia"
                        name="province"
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa la direccion de residencia'
                        label="Dirección"
                        name="address"
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Invoice01Icon size={20} />}
                        placeholder='Ingresa un nombre de factura'
                        label="Nombre de Factura"
                        name="invoice"
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<IdentificationIcon size={20} />}
                        placeholder='Ingresa un NIT'
                        label="NIT"
                        name="nit"
                        labelPlacement='outside'
                    />

                    <Select
                        items={companies}
                        label="Empresa"
                        name='companyId'
                        placeholder="Selecciona la empresa"
                        labelPlacement='outside'
                        size='lg'
                        classNames={fullInputWrapper}
                    >
                        {(item) => (
                            <SelectItem key={item.id} value={item.id} className="capitalize">
                                {item.name}
                            </SelectItem>
                        )}
                    </Select>

                    <div>
                        {emails.map((email, index) => (
                            <div key={index} className="flex items-center gap-2 mb-4">
                                <Input
                                    size="lg"
                                    type='email'
                                    value={email}
                                    labelPlacement='outside'
                                    classNames={fullInputWrapper}
                                    placeholder={`Correo ${index + 1}`}
                                    startContent={<Mail01Icon size={20} />}
                                    label={`Correo electronico ${index + 1}`}
                                    onChange={(e) => handleChangeField(index, e.target.value, setEmails)}
                                    endContent={
                                        <Button
                                            size='sm'
                                            radius='full'
                                            variant='light'
                                            onClick={() => handleRemoveField(index, setEmails, emails)}
                                            color="danger"
                                        >
                                            <Delete01Icon size={16} />
                                        </Button>
                                    }
                                />
                            </div>
                        ))}
                        <Button type="button" variant='light' onClick={() => handleAddField(setEmails)} color="primary">
                            Añadir Correo
                        </Button>
                    </div>

                    <div>
                        {phones.map((phone, index) => (
                            <div key={index} className="flex items-center gap-2 mb-4">
                                <Input
                                    size="lg"
                                    label={`Teléfono ${index + 1}`}
                                    value={phone}
                                    labelPlacement='outside'
                                    classNames={fullInputWrapper}
                                    placeholder={`Teléfono ${index + 1}`}
                                    startContent={<SmartPhone01Icon size={20} />}
                                    onChange={(e) => handleChangeField(index, e.target.value, setPhones)}
                                    endContent={
                                        <Button
                                            size='sm'
                                            radius='full'
                                            variant='light'
                                            onClick={() => handleRemoveField(index, setPhones, phones)}
                                            color="danger"
                                        >
                                            <Delete01Icon size={16} />
                                        </Button>
                                    }
                                />
                            </div>
                        ))}
                        <Button

                            variant='light' onClick={() => handleAddField(setPhones)} color="primary">
                            Añadir Teléfono
                        </Button>
                    </div>
                </div>

                <Button
                    color='primary'
                    className='mt-8'
                    type='submit'
                    isLoading={isLoading}
                    isDisabled={isLoading}
                >
                    Registrar Cliente
                </Button>
            </form>
        </section>
    )
}