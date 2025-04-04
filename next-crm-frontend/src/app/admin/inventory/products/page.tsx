import { getProducts, ProductTable } from "@/modules/products";



interface Props {
    searchParams: Promise<{ [key: string]: string | number | undefined }>
}

export default async function ProductsPage(props: Props) {
    const searchParams = await props.searchParams

    const productsResponse = await getProducts(
        searchParams.page as number, 
        searchParams.limit as number, 
        searchParams.search as string
    );

    return (
        <>
            <ProductTable productsResponse={productsResponse} />
        </>
    );
}