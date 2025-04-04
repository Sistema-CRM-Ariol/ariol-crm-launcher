import { Metadata } from 'next';
import { BrandTable, getBrands, NewBrandForm } from '@/modules/brands';


interface Props {
    searchParams: Promise<{ [key: string]: string | number | undefined }>
}

export default async function BrandsPage(props: Props) {

    const searchParams = await props.searchParams

    const getBrandsResponse = await getBrands(
        searchParams.page as number, 
        searchParams.limit as number, 
        searchParams.search as string
    );

    return (
        <>
            <section className="container pt-8">
                <NewBrandForm/>
            </section>      
            <BrandTable getBrandsResponse={ getBrandsResponse }/>
        </>
    );
}

export const metadata: Metadata = {
    title: "Marcas - Ariol S.A"
}