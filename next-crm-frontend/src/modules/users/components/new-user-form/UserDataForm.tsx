
import { fullInputWrapper } from "@/lib";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { IdentificationIcon, ImageAdd01Icon, LockPasswordIcon, UserIcon } from 'hugeicons-react';

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UserDataForm = ({ onChange }: Props) => {
    return (
        <>
            <h2>Datos del usuario</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-4">

                <Input
                    size='lg'
                    isRequired
                    classNames={fullInputWrapper}
                    startContent={<UserIcon size={20} />}
                    placeholder='Ingresa un nombre'
                    label="Nombre"
                    name='name'
                    onChange={onChange}
                    labelPlacement='outside'
                />

                <Input
                    isRequired
                    size='lg'
                    classNames={fullInputWrapper}
                    startContent={<UserIcon size={20} />}
                    placeholder='Ingresa los apellidos'
                    label="Apellidos"
                    name='lastname'
                    onChange={onChange}
                    labelPlacement='outside'
                />

                <Input
                    isRequired
                    size='lg'
                    classNames={fullInputWrapper}
                    startContent={<IdentificationIcon size={20} />}
                    placeholder='Ingresa un correo electonico'
                    label="Correo electronico"
                    onChange={onChange}
                    name='email'
                    labelPlacement='outside'
                />

                <Input
                    size='lg'
                    isRequired
                    classNames={fullInputWrapper}
                    startContent={<IdentificationIcon size={20} />}
                    placeholder='Ingresa el C.I.'
                    label="Carnet de Identidad"
                    onChange={onChange}
                    name="ci"
                    labelPlacement='outside'
                />

                <div>

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<LockPasswordIcon size={20} />}
                        placeholder='Ingresa una contraseña segura'
                        label="Contraseña"
                        autoComplete=""
                        name="password"
                        type='password'
                        onChange={onChange}
                        labelPlacement='outside'
                    />

                    <Button color='primary' size='sm' className='mt-2' variant='light'>Generar contraseña</Button>
                </div>

                <Input
                    size='lg'
                    type='file'
                    // isRequired
                    classNames={fullInputWrapper}
                    startContent={<ImageAdd01Icon size={20} />}
                    placeholder='Agrega una imagen del usuario'
                    onChange={onChange}
                    label="Imagen de perfil"
                    name="avatar"
                    labelPlacement='outside'
                />


            </div>
        </>
    )
}
