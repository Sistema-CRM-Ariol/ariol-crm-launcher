import { SimpleProduct } from "./simple-product.interface";

export interface GetProductsResponse {
    products: SimpleProduct[];
    meta: Meta;
}

interface Meta {
    total: number;
    page: number;
    lastPage: number;
}
