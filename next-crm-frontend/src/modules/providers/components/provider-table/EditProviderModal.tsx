"use client"
import { useEffect } from 'react';

import { fullInputWrapper } from '@/lib';
import { Provider, useEditProviderForm } from '@/modules/providers';

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Edit02Icon } from 'hugeicons-react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";


interface Props {
    provider: Provider;
}

export const EditProviderModal = ({ provider }: Props) => {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { handleSubmit, isLoading } = useEditProviderForm(provider);


    useEffect(() => {
        if( !isLoading ) onClose();
    }, [isLoading])
    

    return (
        <>
            <Button
                isIconOnly
                size='sm'
                onPress={onOpen}
                startContent={<Edit02Icon size={18} />}
                color='primary'
                radius='full'
                variant='light'
            />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader>
                                <h3 className='text-lg font-semibold'>Editar proveedor</h3>
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    hidden
                                    type='hidden'
                                    defaultValue={`${provider.id}`}
                                    name="providerId"
                                />
                                <Input
                                    size='sm'
                                    name='name'
                                    isRequired
                                    label="Nombre"
                                    defaultValue={provider.name}
                                    classNames={fullInputWrapper}
                                    placeholder='Nombre del proveedor'
                                />

                                <Input
                                    size='sm'
                                    name='phone1'
                                    label="Número de teléfono 1"
                                    defaultValue={provider.phone1}
                                    classNames={fullInputWrapper}
                                    placeholder='Ingresa un numero de contacto'
                                />


                                <Input
                                    size='sm'
                                    name='phone2'
                                    label="Número de teléfono 2"
                                    defaultValue={provider.phone2}
                                    classNames={fullInputWrapper}
                                    placeholder='Ingresa un numero de contacto'
                                />


                                <Input
                                    size='sm'
                                    name='direction'
                                    label="Dirección"
                                    defaultValue={provider.direction}
                                    classNames={fullInputWrapper}
                                    placeholder='Dirección del proveedor'
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    type='submit'
                                    color="primary"
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                >
                                    Actualizar
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
