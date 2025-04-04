import { TitlePage } from "@/modules/shared";
import { getBrands } from "@/modules/brands";
import { getProviders } from '@/modules/providers';
import { NewProductForm } from "@/modules/products";
import { getCategories } from "@/modules/categories";

export default async function NewProductPage() {

    const getBrandsPromise = getBrands(1, 100);
    const getProvidersPromise = getProviders(1, 100)
    const getCategoriesPromise = getCategories(1, 100);

    const [{ brands }, { categories }, { providers }] = await Promise.all([getBrandsPromise, getCategoriesPromise, getProvidersPromise]);

    return (
        <>
            <TitlePage
                linkName="Volver"
                pathname="/admin/inventory/products"
                subTitle="Agrega nuevos productos y registralo en tus inventarios."
                title="Registro de Productos"

            />
            <NewProductForm
                brands={brands}
                providers={providers}
                categories={categories}
            />
        </>
    );
}