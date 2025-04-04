import { TitlePage } from "@/modules/shared";
import { NewClientForm } from "@/modules/clients";
import { Metadata } from "next";
import { getCompanies } from "@/modules/companies";

export default async function NewClientPage() {

    const { companies } = await getCompanies(1, 50);

    return (
        <>  
            <TitlePage
                linkName="Volver"
                pathname="/admin/contacts/clients"
                subTitle="Agrega un nuevo cliente al sistema."
                title="Regsitro de Clientes"

            />
            <NewClientForm companies={ companies }/>
        </>
    );
}

export const metadata: Metadata = {
    title: 'Registro de clientes - CRM Ariol'
}