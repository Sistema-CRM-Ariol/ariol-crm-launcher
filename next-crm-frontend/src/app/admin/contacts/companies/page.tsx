import { CompanyTable, getCompanies, NewCompanyForm } from "@/modules/companies";
import { Metadata } from "next";


interface Props {
    searchParams: Promise<{ [key: string]: string | number | undefined }>
}


export default async function CompaniesPage(props: Props) {
    const searchParams = await props.searchParams

    const companiesResponse = await getCompanies(
        searchParams.page as number, 
        searchParams.limit as number, 
        searchParams.search as string
    );

    return (
        <>
            <NewCompanyForm />
            <CompanyTable companiesResponse={companiesResponse} />
        </>
    );
}

export const metadata: Metadata = {
    title: 'Empresas - CRM Ariol'
}