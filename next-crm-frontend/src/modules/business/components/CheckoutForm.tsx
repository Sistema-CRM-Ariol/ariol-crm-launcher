import Image from 'next/image'

import { fullInputWrapper } from '@/lib'
import AriolLogo from '@/assets/images/ariol-logo.png'

import { Button, Divider, Input, Radio, RadioGroup, Textarea } from "@heroui/react"
import { Download01Icon, Search01Icon, SentIcon } from 'hugeicons-react'
import { ShoppingCartCard } from './ShoppingCartCard'


export const CheckoutForm = () => {
    return (
        <form className='checkout__form'>
            <div className='col-span-12'>
                <h1>Nota de entrega</h1>
                <p>Genera una nueva transacción con tus clientes</p>
            </div>
            <div className="checkout__form--details">
                <div className='col-span-12 flex flex-col lg:flex-row gap-4 items-center justify-between'>
                    <div>
                        <Image
                            src={AriolLogo}
                            width={150}
                            alt='Ariol Logo'
                        />
                        <p>Cental: C/Boqueron Edif. Piamonte N° 1518 Local 4 Z/San Pedro</p>
                        <p>+591 2-2482302</p>
                        <p>centralinfo@ariol.com.bo</p>
                    </div>
                    <div className='w-full max-w-md space-y-4'>
                        <h4 className='text-xl font-semibold'>Datos principales</h4>
                        <Input
                            label="N° Factura"
                            name='invoiceNumber'
                            placeholder='Factura #1750'
                            size='sm'
                            isRequired
                            type='email'
                            classNames={fullInputWrapper}
                        />
                        <Input
                            label="Emitido por:"
                            disabled
                            value="Mattias Duarte"
                            name='userId'
                            size='sm'
                            isReadOnly
                            isRequired
                            type='email'
                            classNames={fullInputWrapper}
                        />
                        <Input
                            label="NIT Cliente"
                            placeholder='12312123'
                            name='nit'
                            size='md'
                            isRequired
                            type='number'
                            classNames={fullInputWrapper}
                            endContent={<Button size='sm' variant='light' isIconOnly startContent={<Search01Icon size={14} />} />}
                        />
                        <Input
                            label="Cliente"
                            disabled
                            isRequired
                            isReadOnly
                            placeholder='Factura de cliente'
                            name='clientName'
                            size='sm'
                            classNames={fullInputWrapper}
                        />
                    </div>

                </div>

                <Divider className='col-span-12' />
                <h4 className='font-semibold text-xl col-span-12'>Datos complementarios</h4>

                <RadioGroup
                    className='font-semibold col-span-12 md:col-span-6 xl:col-span-3'
                    orientation='horizontal'
                    label="Modalidad de pago"
                    isRequired

                >
                    <Radio className='font-normal' value="efectivo">Efectivo</Radio>
                    <Radio className='font-normal' value="credito">Crédito</Radio>
                </RadioGroup>

                <RadioGroup
                    className='font-semibold col-span-12 md:col-span-6 xl:col-span-5'
                    orientation='horizontal'
                    isRequired
                    label="Modalidad de salida"
                >
                    <Radio className='font-normal' value="consignacion">Consignación</Radio>
                    <Radio className='font-normal' value="venta">Venta</Radio>
                    <Radio className='font-normal' value="cotizacion">Cotización</Radio>
                    <Radio className='font-normal' value="reposicion">Reposición</Radio>
                </RadioGroup>


                <RadioGroup
                    className='font-semibold col-span-12 md:col-span-12 xl:col-span-4'
                    orientation='horizontal'
                    isRequired
                    label="Modalidad de entrega"
                >
                    <Radio className='font-normal' value="oficina-ariol">Oficina Ariol</Radio>
                    <Radio className='font-normal' value="sucursal">Sucursal</Radio>
                    <Radio className='font-normal' value="terminal-terrestre">Terminal terrestre</Radio>
                    <Radio className='font-normal' value="oficina-cliente">Oficina cliente</Radio>
                    <Radio className='font-normal' value="aeropuerto">Aeropuerto</Radio>
                </RadioGroup>

                <ShoppingCartCard />

            </div>


            <div className="checkout__form--panel">
                <h4 className='text-xl font-semibold'>Finalizar transacción</h4>

                <Textarea
                    label="Agregar una nota"
                    placeholder='Descripción...'
                ></Textarea>
                <Button
                    startContent={<SentIcon />}
                    color='primary'
                    fullWidth
                >
                    Generar transcción
                </Button>
                <Button
                    startContent={<Download01Icon />}
                    fullWidth
                    className='bg-indigo-500 text-white'
                >
                    Guardan en reporte
                </Button>
            </div>


        </form>
    )
}
