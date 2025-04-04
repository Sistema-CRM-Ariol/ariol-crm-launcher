"use client"
import { useState } from 'react';
import { Mail01Icon } from 'hugeicons-react';
import { getLocalTimeZone, now} from '@internationalized/date';

import { formatDate } from '@/lib';
import { SimpleClient, scheduleAppointmentWithClient } from '@/modules/clients';
import { Button, DatePicker, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react"


interface Props {
    client: SimpleClient;
}

export const ButtonScheduleAppointment = ({ client }: Props) => {
    
    const [date, setDate] = useState( now(getLocalTimeZone()) );
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleSubmit = async () => {
        console.log(formatDate(date.toDate()))

        await scheduleAppointmentWithClient( client.name, client.emails[0], formatDate(date.toDate()));
    }

    return (
        <div>
            <Button startContent={<Mail01Icon size={18} />} color='success' variant='light' isIconOnly size='sm' onPress={onOpen} />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='text-2xl'>Agendar cita</ModalHeader>
                            <ModalBody>
                                <p>
                                    Se notificara la cita al correo electronico del cliente.
                                </p>

                                <DatePicker
                                    defaultValue={now(getLocalTimeZone())}
                                    hourCycle={24}
                                    label="Birth date"
                                    showMonthAndYearPickers
                                    hideTimeZone
                                    value={date}
                                    onChange={setDate}
                                />
                                {/* <p>Vista Previa</p>
                                <ScheduleAppointmentTemplate 
                                    date={ formatDate(date.toDate())}
                                    name={ client.nombre }
                                /> */}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button onClick={handleSubmit} color="primary" onPress={onClose}>
                                    Agendar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    )
}
