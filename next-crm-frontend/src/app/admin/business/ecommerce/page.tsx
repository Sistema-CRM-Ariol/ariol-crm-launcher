import { FilterProductsStore, getProducts, ProductCard } from "@/modules/products";

export default async function EcommercePage() {

    const { products } = await getProducts()

    return (
        <>
            <FilterProductsStore/>
            <section className="pt-8">
                <div className="container">

                    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }

                    </ul>
                </div>
            </section>
        </>
    );
}