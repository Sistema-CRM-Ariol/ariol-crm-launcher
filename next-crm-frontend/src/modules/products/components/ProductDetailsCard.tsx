import Link from "next/link";
import Image from "next/image";

import { formatCurrencyToBolivians } from "@/lib";
import NotImageFound from '@/assets/images/not-image.jpg'
import { ArrowDown02Icon, ArrowUp02Icon, DeliveryBox01Icon, Layers01Icon } from "hugeicons-react";
import { Product } from "../interfaces/product.interface";


interface Props {
    product: Product;
}

export const ProductDetailsCard = ({ product }: Props) => {
    return (
        <section className="pt-8">
            <div className="product__details--container">
                <div className="product__details--image">
                    <Image
                        // src={product!.image != null ? product!.image : NotImageFound}
                        src={NotImageFound}
                        width={500}
                        height={500}
                        alt={product.name}
                    />
                </div>
                <div className="product__details--description">
                    <div>
                        <h1>{product.name}</h1>
                        <p className="font-bold">{ product.serialNumber }</p>
                    </div>

                    <div>
                        <h2 className="text-xl mb-0">Descripción</h2>
                        <p>{product.description}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex bg-gray-100 p-2 rounded-full">
                            <Layers01Icon size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Categoria:</h3>
                            <Link href={`/admin/invetory/categories/${product?.category.slug}`}>{product?.category.name}</Link>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-start gap-3">
                            <div className="flex bg-gray-100 p-2 rounded-full">
                                <DeliveryBox01Icon size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">Detalles del proveedor:</h3>

                                <Link className="text-gray-500" href={`/admin/invetory/providers/${product?.provider.id}`}>
                                    Nombre: {product?.provider.name}
                                </Link>

                                <p>Telefono 1: {product.provider.phone1}</p>
                                <p>Telefono 2: {product.provider.phone2}</p>
                                <p>Dirección: {product.provider.direction}</p>
                            </div>
                        </div>
                    </div>

                    <div className="product__details--prices">
                        <div className="product__details--priceSale">
                            <div className="flex bg-green-200 rounded-full p-2">
                                <ArrowDown02Icon className="text-green-500" size={26} />
                            </div>
                            <div>
                                Precio de venta
                                <p className="text-xl text-gray-700 font-bold">{formatCurrencyToBolivians(product.priceSale)}</p>
                            </div>
                        </div>
                        <div className="product__details--pricePurchase">
                            <div className="flex bg-indigo-200 rounded-full p-2">
                                <ArrowUp02Icon className="text-indigo-500" size={26} />
                            </div>
                            <div>
                                Precio de compra
                                <p className="text-xl text-gray-700 font-bold">{formatCurrencyToBolivians(product!.pricePurchase)}</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}
