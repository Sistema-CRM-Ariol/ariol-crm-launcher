"use client"
import { Button } from "@heroui/button";
import { UserDataForm, RolePermissionSelector, useNewUserForm } from '@/modules/users';
import { Divider } from "@heroui/react";



export const NewUserForm = () => {

    const { handlePermissionsChange, handleSubmit, handleUserDataChange } = useNewUserForm();

    return (

        <section className='pt-8'>
            <form onSubmit={handleSubmit} className='container bg-white p-6 pt-8 pb-10 rounded-sm'>

                <UserDataForm onChange={handleUserDataChange}/>
                <Divider className="my-4" />
                <RolePermissionSelector onChange={handlePermissionsChange}/>

                <Button
                    color='primary'
                    className='mt-8'
                    type='submit'
                >
                    Agergar Usuario
                </Button>
            </form>
        </section>
    )
}
