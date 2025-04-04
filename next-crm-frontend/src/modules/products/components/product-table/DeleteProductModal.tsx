
import { SimpleProduct, useDeleteProduct } from '@/modules/products';

import { Alert01Icon, Delete02Icon } from 'hugeicons-react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";

interface Props {
    product: SimpleProduct
}

export const DeleteProductModal = ({ product }: Props) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const { handleDelete, isLoading } = useDeleteProduct( product.id );

    return (
        <>
            <Button
                isIconOnly
                size='sm'
                onPress={onOpen}
                startContent={<Delete02Icon size={18} />}
                color='danger'
                variant='light'
            />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='modal__header'>
                                <div className='mx-auto text-red-500 bg-red-100 p-2 rounded-full'>
                                    <Alert01Icon size={30} />
                                </div>
                                Eliminar cliente
                            </ModalHeader>
                            <ModalBody>
                                <p className='text-justify'>
                                    ¿Esta seguro de eliminar el producto <span className='text-primary-500'>"{product.name}"</span>? <br />
                                    <span className='text-red-500'>Todos sus datos se perderan definitivamente</span> <br />
                                    <span>Esto incluye la disponibilidad en inventarios</span>
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
