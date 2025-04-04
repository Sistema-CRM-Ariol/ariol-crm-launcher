import { ClientProfileCard, ClientTopPurchases, CustomerTaskTable, getClientById, getClients } from "@/modules/clients";
import { TitlePage } from "@/modules/shared";

interface Props {
    params: Promise<{ id: string }>
}


export default async function ClientPage({ params }: Props) {

    const id = (await params).id;

    const { data: client, error } = await getClientById(id);

    if (error) throw new error;

    return (
        <>
            <TitlePage
                title="Perfil del cliente"
                subTitle="Informacion detallada del cliente"
                linkName="Volver"
                pathname="/admin/contacts/clients"
            />

            <section className="pt-8">
                <div className="container grid grid-cols-12 justify-start gap-4">
                    <ClientProfileCard client={client!} />
                    <CustomerTaskTable />
                    <ClientTopPurchases />
                </div>
            </section>
        </>
    );
}


export async function generateStaticParams() {
    const data = await getClients(1, 100);

    return data.clients.map((client) => ({
        id: client.id,
    }))
}