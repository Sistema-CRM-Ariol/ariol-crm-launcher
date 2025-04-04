import { TitlePage } from "@/modules/shared";
import { NewUserForm } from '@/modules/users';

export default function RegisterUserPage() {
    return (
        <>
            <TitlePage
                linkName="Volver"
                pathname="/users/list"
                subTitle="Agrega un nuevo usuario para la gestion de tu sistema."
                title="Regsitro de usuarios"

            />

            <NewUserForm/>

        </>
    );
}