"use client"
import Link from 'next/link';
import { useState } from 'react'

import { fullInputWrapper } from '@/lib';
import { useLoginUser } from '@/modules/auth';
import { ViewIcon, ViewOffIcon } from '@/modules/shared';

import { Checkbox, Button, Input } from "@heroui/react";

export const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { handleSubmit, isLoading } = useLoginUser();

    return (
        <form onSubmit={handleSubmit} className='login__form w-full space-y-6'>

            <div className='mb-[3rem] text-center'>
                <h1 className="text-3xl mb-2 font-normal">Bienvenido de nuevo! 👋</h1>
                <p className='text-sm'>Ingresa tus credenciales y comienza a gestionar tu empresa</p>
            </div>

            <Input
                label="Correo electronico"
                name='email'
                type='email'
                classNames={fullInputWrapper}
            />

            <Input
                name='password'
                size='sm'
                label="Contraseña"
                classNames={fullInputWrapper}
                type={showPassword ? "text" : "password"}
                endContent={
                    <Button variant='light' size='sm' isIconOnly onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword
                                ? (
                                    <ViewOffIcon />
                                )
                                : (
                                    <ViewIcon />
                                )
                        }
                    </Button>
                }
            />

            <div className='flex items-center justify-between'>
                <Checkbox defaultSelected size='sm'>Mantener sesion activa</Checkbox>
                <Link href='recovery' className='text-sm text-primary'>Recuperar contraseña</Link>
            </div>

            <Button
                type='submit'
                fullWidth
                isLoading={ isLoading }
                isDisabled={ isLoading }
                color='primary'
            >
                Iniciar Sesion
            </Button>

        </form>
    )
}
