import { getProductDetails, getProducts, ProductDetailsCard } from "@/modules/products";
import { TitlePage } from "@/modules/shared"

import { redirect } from "next/navigation";


export const revalidate = 86400;


export async function generateStaticParams() {
    const { products } = await getProducts(1, 100);

    return products.map((product) => ({
        slug: product.slug,
    }))
}


export default async function ProductDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const slug = (await params).slug

    const { data: product, error } = await getProductDetails(slug)

    if (error !== null) {
        console.log({ error })
        redirect('/admin/inventory/products')
    }

    return (
        <>
            <TitlePage
                title={product!.name}
                subTitle="Descripcion del producto"
                linkName="Volver"
                pathname="/admin/inventory/products"
            />

            <ProductDetailsCard product={product!} />

        </>
    );
}

