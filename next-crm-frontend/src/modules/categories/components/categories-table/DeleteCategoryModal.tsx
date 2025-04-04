"use client"
import { useState } from 'react'
import { Alert01Icon, Delete02Icon } from 'hugeicons-react';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";
import { toast } from 'sonner';
import { Category } from '../../interfaces/category';
import { deleteCategory } from '@/modules/categories';
// import { deleteBrand } from '../../actions/delete-brand';


interface Props {
    category: Category;
}

export const DeleteCategoryModal = ({ category }: Props) => {
    
    const [isLoading, setIsLoading] = useState(false);
    
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const handleDelete = async () => {
        setIsLoading(true);

        const { data, error } = await deleteCategory( category.id );

        if( error ){
            toast.error("Ocurrio un error", {
                description: error
            })
            setIsLoading(false);
            return;
        }

        toast.success(data?.message);
        setIsLoading(false);
        onClose();
    }


    return (
        <>
            <Button 
                isIconOnly 
                size='sm'
                onPress={onOpen}
                startContent={ <Delete02Icon size={18}/> }
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
                                    <Alert01Icon  size={30}/>
                                </div>
                                Eliminar cliente
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Esta seguro de eliminar la categoria <span className='text-primary-500'>"{ category.name }"</span>? <br />
                                    <span className='text-red-500'>Todos sus datos asociados se perderan definitivamente</span>
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button isLoading={ isLoading } isDisabled={ isLoading } color="primary" onPress={handleDelete}>
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
