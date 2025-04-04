"use client"
import { useEffect } from 'react'

import { useDeleteProvider, type Provider } from '@/modules/providers';

import { Button } from "@heroui/button";
import { Alert01Icon, Delete02Icon } from 'hugeicons-react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";



interface Props {
    provider: Provider;
}

export const DeleteProviderModal = ({ provider }: Props) => {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { handleDelete, isLoading } = useDeleteProvider(provider.id)

    useEffect(() => {
        if( !isLoading )
            onClose
    }, [isLoading])
    

    return (
        <>
            <Button
                isIconOnly
                size='sm'
                onPress={onOpen}
                startContent={<Delete02Icon size={18} />}
                color='danger'
                radius='full'
                variant='light'
            />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader
                                className='flex-col gap-2 items-center uppercase'
                            >
                                <div className='mx-auto text-red-500 bg-red-100 p-2 rounded-full'>
                                    <Alert01Icon size={30} />
                                </div>
                                Eliminar proveedor
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Esta seguro de eliminar el proveedor <span className='text-primary-500'>{ provider.name }</span>? <br />
                                    <span className='text-red-500'>Todos sus datos asociados se perderan definitivamente</span>
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button isLoading={isLoading} isDisabled={isLoading} color="primary" onPress={handleDelete}>
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
