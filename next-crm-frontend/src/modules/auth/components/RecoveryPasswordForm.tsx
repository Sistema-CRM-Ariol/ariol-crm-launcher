import Link from 'next/link';

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export const RecoveryPasswordForm = () => {

    const inputWrapper = [ 
        "shadow-none" ,
        "bg-athens-gray",
        "rounded-md",
        "outline-none",
        "group-data-[focus=true]:bg-athens-gray",
    ]
    const label = "font-medium"

    return (
        <form className='recovery__password--form'>

            <div className='text-center mb-[2rem]'>
                <h1 className="text-3xl mb-2 font-normal">Recupera tu contraseña! 👨‍💻</h1>
                <p className='text-sm'>Ingresa tu correo electronico</p>
            </div>

            <Input
                variant='flat'
                label="Correo electronico"
                placeholder='Ingresa tu correo electronico'
                classNames={{
                    inputWrapper,
                    label
                }}
            />

            <Button
                color='primary'
                fullWidth
            >
                Recuperar contraseña
            </Button>

            <Link
                className='block text-sm text-primary text-center'
                href='/auth/login'
            >
                Quiero iniciar sesion
            </Link>
        </form>
    )
}
