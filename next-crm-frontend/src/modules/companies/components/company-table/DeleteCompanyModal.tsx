"use client"

import { Company, useDeleteCompany } from '@/modules/companies';
import { Alert01Icon, Delete02Icon } from 'hugeicons-react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";


interface Props {
    company: Company;
}

export const DeleteCompanyModal = ({ company }: Props) => {
    
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { handleDelete, isLoading } = useDeleteCompany(company.id);

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
                            <ModalHeader className='flex-col gap-2 items-center uppercase'>
                                <div className='mx-auto text-red-500 bg-red-100 p-2 rounded-full'>
                                    <Alert01Icon size={30} />
                                </div>
                                Eliminar empresa
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Esta seguro de eliminar la empresa <span className='text-primary-500'>"{company.name}"</span>? <br />
                                    <span className='text-red-500'>Todos sus datos se perderan definitivamente</span>
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button 
                                    isLoading={isLoading} 
                                    isDisabled={isLoading} 
                                    color="primary" 
                                    onPress={async () => {
                                        await handleDelete()
                                        onClose()
                                    }}
                                >
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
