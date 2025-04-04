import { CategoriesTable, getCategories, NewCategoryForm } from "@/modules/categories";
import { Metadata } from "next";

interface Props {
    searchParams: Promise<{ [key: string]: string | number | undefined }>
}

export default async function CategoriesPage(props: Props) {
    const searchParams = await props.searchParams

    const categoriesResponse = await getCategories(
        searchParams.page as number, 
        searchParams.limit as number, 
        searchParams.search as string
    );

    return (
        <>
            <section className="container pt-8">
                <NewCategoryForm/>
            </section>      
            <CategoriesTable categoriesResponse={ categoriesResponse }/>
        </>
    );
}



export const metadata: Metadata = {
    title: 'Categorias - CRM Ariol'
}