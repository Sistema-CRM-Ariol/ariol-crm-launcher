import { OrderSummaryCard, ShoppingCartCard } from "@/modules/business";


export default function CartPage() {
    return (
        <section className="pt-8">
            <div className="container grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    <ShoppingCartCard/>
                </div>

                <div className="col-span-4">
                    <OrderSummaryCard/>
                </div>
            </div>
        </section>
    );
}