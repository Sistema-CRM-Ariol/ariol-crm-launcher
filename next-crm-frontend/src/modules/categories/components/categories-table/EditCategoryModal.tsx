"use client"
import { fullInputWrapper } from '@/lib';

import { useEditBrandForm } from '@/modules/brands';

import { Edit02Icon } from 'hugeicons-react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@heroui/react";
import { Category, useEditCategoryForm } from '@/modules/categories';


interface Props {
    category: Category;
}

export const EditCategoryModal = ({ category }: Props) => {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { handleSubmit, isLoading } = useEditCategoryForm(category, onClose);

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
                                <h3 className='text-lg font-semibold'>Editar marca</h3>
                            </ModalHeader>
                            <ModalBody>

                                <Input
                                    classNames={fullInputWrapper}
                                    label="Nombre"
                                    placeholder='Agrega un nombre'
                                    size='sm'
                                    defaultValue={category.name}
                                    name='name'
                                    isRequired
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
