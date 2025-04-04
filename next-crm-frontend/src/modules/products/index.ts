// COMPONENTS
export { NewProductForm } from "./components/new-product-form/NewProductForm";
export { ProductTable } from './components/product-table/ProductTable';
export { DeleteProductModal } from "./components/product-table/DeleteProductModal";
export { ProductDetailsCard } from "./components/ProductDetailsCard";
export { FilterProductsStore } from "./components/FilterProductsStore";
export { ProductCard } from "./components/ProductCard";



// ACTIONS
export { getProducts } from "./actions/get-products";
export { createProduct } from "./actions/create-product";
export { deleteProduct } from "./actions/delete-product";
export { getProductDetails } from "./actions/get-product-details";



// HOOKS
export { useDeleteProduct } from "./hooks/useDeleteProduct";



// INTERFACES
export type { GetProductsResponse } from './interfaces/get-products-response.interface';
export type { SimpleProduct } from './interfaces/simple-product.interface';
export type * from './interfaces/product.interface'


