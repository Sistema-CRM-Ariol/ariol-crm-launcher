import { Metadata } from "next";
import { NewProviderForm, ProviderTable, getProviders } from "@/modules/providers"

type Params = Promise<{ page: string }>
type SearchParams = Promise<{ [key: string]: string | number | undefined }>



export default async function ProvidersPage(props: {
    params: Params
    searchParams: SearchParams
}) {

    const searchParams = await props.searchParams

    const getProvidersResponse = await getProviders(
        searchParams.page as number,
        searchParams.limit as number,
        searchParams.query as string,
    );
    return (
        <>
            <NewProviderForm/>
            <ProviderTable
                getProvidersResponse={ getProvidersResponse! }
            />
        </>
    );
}


export const metadata: Metadata = {
    title: "Proveedores - Ariol S.A",
    description: "Gestiona los proveedores del sistema"
}